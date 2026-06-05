import { useEffect, useState } from "react";
import { Play, Pause, Loader2, X, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { radio, type RadioState } from "../utils/radio";

/**
 * Persistent sticky mini-player. Rendered once in the layout and kept across
 * page navigations via `transition:persist`, so the live stream keeps playing
 * while the visitor browses. Appears only once playback is active.
 */
export function MiniPlayer() {
  const [state, setState] = useState<RadioState>("idle");
  const [volume, setVol] = useState(0.85);
  const [muted, setMuted] = useState(false);

  useEffect(() => radio.subscribe(setState), []);
  useEffect(() => { setVol(radio.getVolume()); }, []);

  // Hidden until the visitor starts playback.
  const visible = state !== "idle";

  const handleVol = (v: number) => {
    setVol(v);
    setMuted(v === 0);
    radio.setVolume(v);
  };

  const toggleMute = () => {
    if (muted || volume === 0) { handleVol(0.85); }
    else { radio.setVolume(0); setMuted(true); }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-500 ${visible ? "translate-y-0" : "translate-y-full"}`}
      role="region"
      aria-label="Live radio player"
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-3xl m-3 sm:m-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center gap-4 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.9)] border border-red/20">
          {/* Live indicator + station */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="relative flex h-3 w-3 shrink-0">
              {state === "playing" && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-70" />
              )}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm tracking-[0.18em] text-red leading-none">
                {state === "loading" ? "CONNECTING…" : state === "error" ? "STREAM ERROR" : "LIVE"}
              </p>
              <p className="text-sm text-foreground truncate leading-tight mt-0.5">Decades Worldwide Radio</p>
            </div>
          </div>

          {/* Volume (desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button type="button" onClick={toggleMute} aria-label={muted || volume === 0 ? "Unmute" : "Mute"} className="text-muted hover:text-foreground transition-colors">
              {muted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={(e) => handleVol(parseFloat(e.target.value))}
              aria-label="Volume"
              className="w-24 accent-red"
            />
          </div>

          {/* Play / pause */}
          <button
            type="button"
            onClick={() => radio.toggle()}
            aria-label={state === "playing" ? "Pause" : state === "error" ? "Retry" : "Play"}
            className="shrink-0 w-12 h-12 rounded-full bg-red text-white flex items-center justify-center hover:bg-red-deep hover:scale-105 transition-all shadow-[0_0_24px_-6px_var(--color-red)]"
          >
            {state === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> :
             state === "playing" ? <Pause className="w-5 h-5" /> :
             state === "error" ? <RotateCcw className="w-5 h-5" /> :
             <Play className="w-5 h-5 ml-0.5" />}
          </button>

          {/* Stop / dismiss */}
          <button
            type="button"
            onClick={() => radio.stop()}
            aria-label="Stop and close player"
            className="shrink-0 p-2 text-muted hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
