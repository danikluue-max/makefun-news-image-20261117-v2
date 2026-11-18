// News-image entry (round 3): the image is entry.png beside this file, and
// the program copies it to /output/entry.png. The image was drawn by the
// agent in this session: page.html (a hand-built newspaper front page) rendered
// to PNG with headless Chromium; see render.sh. Round 3 rebuilt the world map
// bigger and high-contrast (dark continents, pale ocean, graticule, haloed
// labels), enriched all three lead illustrations further, and added nine
// more illustrated stories (six full panels + three mini-panels) — 12
// illustrated stories in total, still 43 stories overall.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
