# House Search Digest

Personal Saturday digest of single-family homes for sale in the South Bay, Westside, Long Beach, and San Pedro. The site is static: `index.html`, `styles.css`, `app.js`, and `data.js`. There is no build step and no third-party tracking.

GitHub Pages serves this repository from the `main` branch, folder `/`.

## Update next Saturday

Replace the object in `data.js` (`window.HOUSE_DIGEST`) with that week’s digest.

- Copy prices, ratings, commute times, and listing URLs exactly.
- Leave an unknown field as `""`. The page shows `n/a`.
- Do not add a home that is not in the digest.
- Set `title` to `House Search Digest — <date>`, and set the same text in the `<title>` of `index.html`.
- Areas in `otherQualifying` drive the filter. `Long Beach`, `San Pedro`, and `Lomita` stay in that order. Any other `area` value is added automatically.

Open `index.html` in a browser. The script is local, so the file works without a server.

## What’s on the page

Top 10 with weighted scores (interior 35%, space 25%, commute 20%, school 20%) and a 0.75 gated-HOA penalty, the 2922 Radnor Ave status callout, other qualifying homes sorted by score with an area filter, an ADU column, and the HOA penalty, new listings, price changes and corrections, near-misses, open questions, the Long Beach school-locator caveat, and the buyer criteria.
