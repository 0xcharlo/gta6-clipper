// gta6-clipper-01: the entry is a YouTube video, not this program.
// This program only hands the house the video's address: it reads VIDEO.json
// from the repository root, checks it is a JSON object with a url string,
// and writes those exact bytes to /output/VIDEO.json. The house reads the
// video itself through the YouTube Data API; nothing this program writes
// about the video is scored.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "VIDEO.json");
const raw = readFileSync(source, "utf8");
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  (parsed as { url: string }).url.length === 0
) {
  console.error("VIDEO.json must be a JSON object with a non-empty string url");
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "VIDEO.json"), raw);
