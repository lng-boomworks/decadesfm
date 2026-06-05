import { STREAM_DIRECT_URL } from "./site";

/*
  Shared live-radio controller — a module singleton so every "Listen Live"
  button on the page reflects the same play/loading state. Plays the Citrus3
  AAC stream inline via a single HTML5 <audio> element (no new tab).

  Audio only ever instantiates on a user click (client gesture), so this is
  SSR-safe — nothing here touches the DOM at module load.
*/

export type RadioState = "idle" | "loading" | "playing" | "error";

let audio: HTMLAudioElement | null = null;
let state: RadioState = "idle";
let stopping = false;
let volume = 0.85;
const listeners = new Set<(s: RadioState) => void>();

function emit() {
  for (const fn of listeners) fn(state);
}

function setState(next: RadioState) {
  if (next === state) return;
  state = next;
  emit();
}

function build(): HTMLAudioElement {
  const a = new Audio();
  a.preload = "none";
  a.volume = volume;
  a.addEventListener("playing", () => setState("playing"));
  a.addEventListener("waiting", () => setState("loading"));
  a.addEventListener("pause", () => { if (!stopping) setState("idle"); });
  a.addEventListener("error", () => { if (!stopping) setState("error"); });
  return a;
}

export const radio = {
  getState: () => state,

  subscribe(fn: (s: RadioState) => void) {
    listeners.add(fn);
    fn(state); // sync the new subscriber immediately
    return () => listeners.delete(fn);
  },

  getVolume: () => volume,

  setVolume(v: number) {
    volume = Math.min(1, Math.max(0, v));
    if (audio) audio.volume = volume;
  },

  stop() {
    if (!audio) return;
    stopping = true;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    stopping = false;
    setState("idle");
  },

  async toggle() {
    if (!audio) audio = build();

    // Already playing/connecting → fully stop (tear the connection down so we
    // always reconnect to *live* rather than resuming a stale buffer).
    if (state === "playing" || state === "loading") {
      stopping = true;
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      stopping = false;
      setState("idle");
      return;
    }

    // Start: (re)attach a fresh source and play.
    setState("loading");
    audio.src = STREAM_DIRECT_URL;
    try {
      await audio.play();
    } catch {
      setState("error");
    }
  },
};
