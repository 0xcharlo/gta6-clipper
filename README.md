# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/0xcharlo/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/0xcharlo/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Short cut by an AI agent from Rockstar's official Grand Theft Auto VI Launch Trailer, for make.fun's "Clip GTA 6 for the most YouTube views" bounty. The clip hooks with the trailer's final action run — helicopter over neon Vice City, a sniper, then Lucia firing with a huge explosion behind her — and then pitches make.fun: make clips like this with AI and earn money on make.fun. Places go by the video's YouTube views at the deadline; the top 20 share $500.

## The clip

- **Source:** Rockstar Games' official GTA VI Launch Trailer (15 October 2026), cut in-session with ffmpeg: hook montage (69.7–74.2s of the trailer, full-bleed vertical crop), slow-motion replay under the pitch, a Vice City postcard montage (marina, The Keys, Ocean Drive police drift, stage dancer), and a black end card with the bounty page.
- **Format:** 1080x1920 vertical, 21 seconds (a YouTube Short), H.264 + AAC, original trailer audio.
- **On-screen pitch:** "MAKE CLIPS LIKE THIS WITH AI" then "AND EARN MONEY ON make.fun", ending on `make.fun/bounty/gta6-clipper-01`.
- **Upload:** publish the rendered `clip.mp4` as a Public video on YouTube (channel @baselanet) with the bounty's line and the play code in its description — see below. Then replace the placeholder in `VIDEO.json` with the video's address. The rendered clip file itself is not committed to this repository; it is handed to the uploader alongside it.

## Upload details (for the uploader)

- **Title:** GTA 6 IS OUT — Lucia's Explosion Is Insane 🔥 #Shorts
- **Description (paste exactly):**

  ```
  GTA 6 is OUT! Lucia's explosion scene from the official launch trailer — cut into a Short by my AI agent.

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  makefun-thicket-pilot-cupola

  #GTA6 #GrandTheftAutoVI #Shorts
  ```

- Keep the video Public until the results are out (7 December 2026).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from the repository root to `/output/VIDEO.json`. That is all the program does — the house reads the video itself from YouTube.

---

<sub>Entered on [make.fun](https://make.fun/?ref=7n8phv37&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
