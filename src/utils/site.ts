// Shared site data for Decades Worldwide Radio.
// Edit these in one place — components read from here.

export const STREAM_URL = "https://s6.citrus3.com/public/decadesfmworldwideradio";
export const EMAIL = "info@decadesworldwideradio.com";

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

export const DECADES = [
  { id: "60s", label: "60s", sub: "Swinging", tint: "var(--color-amber)" },
  { id: "70s", label: "70s", sub: "Fever", tint: "var(--color-magenta)" },
  { id: "80s", label: "80s", sub: "Neon", tint: "var(--color-teal)" },
  { id: "90s", label: "90s", sub: "Anthems", tint: "var(--color-amber)" },
  { id: "00s", label: "00s", sub: "Throwbacks", tint: "var(--color-magenta)" },
  { id: "today", label: "Today", sub: "Right Now", tint: "var(--color-teal)" },
];
