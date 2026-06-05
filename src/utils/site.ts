// Shared site data for Decades Worldwide Radio.
// Edit these in one place - components read from here.

// Direct Citrus3 audio stream (HTTPS, AAC) - played inline via HTML5 <audio>.
export const STREAM_DIRECT_URL = "https://s6.citrus3.com:2020/11066/stream";
// Public Citrus3 player page - fallback "open in new tab" if inline playback fails.
export const STREAM_URL = "https://s6.citrus3.com/public/decadesfmworldwideradio";
export const EMAIL = "info@decadesfm.com";

export const SOCIALS = {
  instagram: "https://www.instagram.com/decadesworldwideradio",
  youtube: "https://www.youtube.com/@decadesworldwideradio",
  x: "https://x.com/decadesww",
};

// Where the station can be heard (multi-platform distribution).
export const PLATFORMS = ["TuneIn", "Alexa", "Spotify", "myTuner"];

// Primary navigation, in order. Internal paths are passed through withBase by consumers.
export const NAV_LINKS = [
  { name: "Shows", path: "/shows" },
  { name: "Schedule", path: "/schedule" },
  { name: "Decades", path: "/decades" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Five decades drive the hero timeline and the category grid. Each gets one
// neon accent from the palette. `image` is optional - cards fall back to a
// tinted gradient until a real photo is dropped into public/images/decades/.
export const DECADES = [
  { id: "60s", label: "60s", sub: "The Swinging Sixties", blurb: "Where it all began - Motown soul and the British Invasion.", tint: "var(--color-gold)", image: "/images/decades/60s.webp" },
  { id: "70s", label: "70s", sub: "Disco Fever", blurb: "Stadium anthems and the glitterball in full swing.", tint: "var(--color-pink)", image: "/images/decades/70s.webp" },
  { id: "80s", label: "80s", sub: "Neon Nights", blurb: "Big hair, bigger choruses and synth-pop at full volume.", tint: "var(--color-blue)", image: "/images/decades/80s.webp" },
  { id: "90s", label: "90s", sub: "The Anthems", blurb: "Britpop, R&B and the last great singalong decade.", tint: "var(--color-purple)", image: "/images/decades/90s.webp" },
  { id: "today", label: "Today", sub: "Right Now", blurb: "The hits still landing, beside the classics that made them.", tint: "var(--color-green)", image: "/images/decades/today.webp" },
];
