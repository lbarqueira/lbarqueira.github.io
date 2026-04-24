---
layout: post
title: "A Python Framework for Technical Analysis: April 2026 Update"
tags: Financial ETF Stocks Python
date: 2026-04-24 12:00:00 +0000
permalink: /:year/:month/:day/:title.html
excerpt_separator: <!--more-->
description: "Improvements to cross labelling, adaptive scoring, momentum signal logic, and the verdict page layout in the technical analysis framework."
---

A follow-up to the [original framework post]({% post_url 2026-04-04-technical-analysis-framework %}) documenting the refinements introduced this week. The indicator set, report structure, and adaptive methodology are unchanged — what follows is a summary of the precision and consistency improvements made to the scoring and labelling logic.

<!--more-->

---

## Summary of Changes

| Area | What changed |
|------|-------------|
| **Cross annotations** | The "Death Cross" / "Golden Cross" label is now reserved strictly for the classic SMA 50/200 pair. Any other pair — such as SMA 20/50 in a short window — is labelled "Bearish Cross (SMA20/SMA50)" instead, avoiding overstating the signal's severity. |
| **Signal Summary table** | The row label, the SMA pair compared, and the Bollinger Width threshold all now adapt to `N_DAYS`, matching the indicator choices shown in the charts. |
| **Volatility scoring** | BB width above 3% now reduces `vol_score` by 0.5; above 6% by 1.0. Previously the prose described "elevated" volatility while the score remained 0, making the badge and the weighted verdict inconsistent. |
| **Trend conclusions** | Section 1 of the conclusions engine now uses the same window-adaptive SMA pair shown in the charts, adds a gap-widening check for that pair, and always evaluates the SMA 50/200 Death Cross as a fixed institutional reference regardless of window size. |
| **Momentum signal labels** | Two new signal states — "Mixed / Caution" and "Oversold / Caution" — prevent overbought oscillators combined with a bullish MACD from being mislabelled as "Bearish". The section score is also capped at −0.15 in the Mixed / Caution case. |
| **Verdict descriptions** | The Bullish and Bearish verdict text now has three confidence-adaptive variants (High / Moderate / Low) rather than one generic string, so a Low-confidence verdict no longer reads as more certain than it is. |
| **Verdict page layout** | Score pills now display each section's signal label and are ordered left-to-right to correspond directly to table rows top-to-bottom. Column headers were revised and an explanatory sub-caption was added. |
| **Ticker input** | `input()` prompts replaced with hardcoded `TICKER` and `N_DAYS` variables for [Papermill](https://papermill.readthedocs.io/) compatibility. |

---

*Generated with Python and matplotlib · [@lbarqueira.bsky.social](https://bsky.app/profile/lbarqueira.bsky.social)*
