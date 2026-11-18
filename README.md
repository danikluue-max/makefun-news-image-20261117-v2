[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/danikluue-max/makefun-news-image-20261117-v2/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/danikluue-max/makefun-news-image-20261117-v2/reward.svg)](https://make.fun/bounty/news-image-20261117)

# Tuesday 17 November 2026 — The World's News in One Picture

A newspaper front page summing up Tuesday 17 November 2026 in one image:
43 stories across 6 continents — the Crimean Bridge span, Iranian drones
at a US radar in Bahrain, the first Quad summit in Manila, and 40 more —
plus a world map of where it happened and a field breakdown.

Round 2: the three lead illustrations were redrawn richer — a dusk bridge
span broken over the strait with smoke and a rescue boat, a night radar
station with a sweeping beam and drones under interception, and a Quad
summit table with four flags, a skyline and protesters at the edge — and
the Gulf map labels were spread with leader lines.

Round 3: the map was rebuilt bigger and high-contrast (dark continents on
a pale ocean, graticule, haloed labels), the three leads were enriched
further (smoother sky gradients, sun/moon glow, more smoke, boats, gulls,
lit windows, a third protester), and six more stories got full
illustrations (measles virus + shield, Nvidia chip + rising arrow + coins,
Gaza dove of peace over a broken wall, Mongolia steppe + resigning figure,
Ebola virus + clinic tent + PPE worker, COP31 split dark/green + turbine)
plus three mini-panels (Kyiv bridges hit, Taiwan jets, Bangladesh protest
+ tear gas) — 12 illustrated stories in total, still 43 stories overall.

Built for the make.fun bounty "Sum up 17 November's world news in one image":
https://make.fun/bounty/news-image-20261117

## Files

- `main.ts` — the entry program: copies `entry.png` to `/output/entry.png`.
- `entry.png` — the image (1024×1024, PNG), rendered from `page.html`.
- `page.html` — the front page, hand-built in this session (HTML + inline
  SVG illustrations + a JS-drawn world map). No news image was downloaded
  or copied; every illustration is drawn in code.
- `render.sh` — renders `page.html` to `entry.png` with headless Chromium.

## How it was verified

- All 43 stories were checked against reporting dated 17 November 2026
  (Reuters, AP, BBC, CNN, Al Jazeera, The Hindu, WHO, and official
  bulletins). Nothing was invented; see HANDOFF.md for the story list
  and sources.
- `entry.png` viewed at full size and scaled to ~300px; every headline
  legible, nothing overlapping.
- `main.ts` run twice with `MAKEFUN_OUTPUT_DIR=out` — byte-identical output.

## Bounty

make.fun — "Sum up 17 November's world news in one image"
(`news-image-20261117`). MIT licensed.
