/* Week of 2026-11-28. Prepared Saturday morning, Nov 28, 2026 (Pacific).
   Open-house times were read from each Zillow listing's visible Open houses section (not __NEXT_DATA__).
   Weights unchanged: kitchen 20%, interior 20%, space 25%, commute 20%, school 20%.
   Leave an unknown field as "". The page shows n/a.
*/
window.HOUSE_WEEKS = window.HOUSE_WEEKS || {};
window.HOUSE_WEEKS["2026-11-28"] = {
  "title": "House Search Digest — Nov 28, 2026",
  "weekLabel": "Saturday, Nov 28, 2026",
  "lede": "Single-family homes for sale in the South Bay, Westside, Long Beach, and San Pedro.",
  "prepared": "Prepared Saturday morning, Nov 28, 2026 (Pacific, America/Los_Angeles). Sources: today's Zillow map-area extract (276 single-family rows in the 31 target ZIPs), last week's vetted digest and scores, Zillow listing pages, MLS republishers, a Redfin cross-check, LAUSD RSI for new Lomita addresses, and OSRM commutes. This weekend's open houses (Nov 28–29) were read Saturday morning from the visible Open houses section on each Zillow listing page. Factor scores carry over from Nov 21 except 4000 Marion Way (kitchen rescored from new photos).",
  "criteriaSummary": "Detached house with a front and back yard; 3+ bedrooms and 3+ full baths, or 3+ bedrooms and 2+ baths when a real ADU or in-law suite qualifies; list price ≤ $1,500,000; off-peak drive ≤ 30 min to Hawthorne Civic Center; assigned elementary 7+ on GreatSchools; interior relatively updated; at least a 2-car garage.",
  "criteria": [
    "Detached single-family home with a front and back yard. No townhouses, condos, PUDs or attached homes, two-on-a-lot, duplexes, or triplexes.",
    "Beds and baths: a home without an ADU needs 3+ bedrooms and 3+ full baths. A half bath doesn't count, so 2.5 baths fails unless the home also has a real ADU. A ¾ bath (shower, toilet, sink) counts as a full bath. Zillow rounds 2.5 up to 3, so the full/half split is always confirmed in the remarks.",
    "ADU exception: a home with a real ADU, guest house, granny flat, casita, back unit, or attached in-law suite qualifies if the main house has at least 3 bedrooms and 2 bathrooms, and the extra unit has a bedroom, its own bathroom, and its own entrance. The extra unit does not need a kitchen. An ADU or qualifying suite is a small plus for space when ranking.",
    "List price ≤ $1,500,000.",
    "Off-peak drive to Hawthorne Civic Center (4455 W 126th St) ≤ 30 min. A rush-hour drive over 30 min doesn't exclude a home; it lowers the ranking in proportion to the extra time.",
    "Assigned elementary rated 7+ on GreatSchools (2026). Assignment comes from the official district locator for the address. A guaranteed LAUSD magnet path counts but requires a Choices application. An unverified school doesn't pass.",
    "Interior relatively modern or updated. Older homes are fine. Fixer, “bring your vision,” as-is short-sale, and dated trust listings are flagged out.",
    "At least a 2-car garage. This dealbreaker was added Nov 21. Garage counts come from Zillow (garage_spaces). A 1-car garage, or no garage, fails."
  ],
  "methodNotes": [
    "Off-peak times are from the OSRM public driving router, with Census geocoder points. Rush hour is an estimate, not live traffic: +4–10 min for short surface/405 hops, +10–20 for 9–15 mi trips, and +15–25 for 16–23 mi trips. No live-traffic source was available.",
    "Never trust Zillow's bath count. Search cards and homedetails headers round 2.5 up to 3. Full/half splits were checked in the remarks or on MLS republishers.",
    "New LAUSD addresses (2368 253rd St, 2056 242nd St) were checked with the LAUSD Resident School Identifier today; 2037 245th St was rerun as a control. The LBUSD locator still needs a sign-in, so 3360 Kallin Ave's Cubberley K–8 (7) is unofficial. Carried-over homes reuse their earlier official results.",
    "Commute score starts at 10 for an off-peak drive of 12 minutes or less, then subtracts 0.22 per extra off-peak minute and 0.12 per minute that the midpoint of the rush estimate is past 30. School score is the GreatSchools rating (7 = 7.0 through 10 = 10.0), or the qualifying magnet rating (Lomita MST 7 or 7th Street Arts Magnet 9).",
    "Factor scores for carried-over homes were copied from Nov 21 and totals recomputed with half-up rounding (they match to the cent). 4000 Marion Way's kitchen was rescored from 41 new listing photos (6.8 → 4.5). The three new qualifiers were scored fresh; 2056 242nd St (exterior photos only) and 3360 Kallin Ave (renderings only) have middling kitchen and interior scores. Near-misses were not scored.",
    "After the weighted sum, a home in a gated HOA loses 0.75 points. It applies only to 635 Edith Way and 4000 Marion Way (Crown Pointe, $275/mo). Non-gated HOAs are not penalized: 6320 W 85th St (Kentwood Guardians, about $23/year) and 2056 242nd St (Parkside Walk private street, $100/mo; a gate was not confirmed).",
    "Open houses were read from each qualifying home's Zillow listing page (the visible Open houses section above Facts & features), not from map-extract text or __NEXT_DATA__. A home was recorded as None when no Open house heading appeared. Redfin listing pages hit an AWS WAF challenge after about 30 requests; that was not worked around. Listing photos came from the Coldwell Banker image CDN."
  ],
  "rankingNote": "Removed: 2037 245th St (#3 last week) is under contract, 3482 Iroquois Ave (#7) is pending, and 2271 Mira Mar Ave (#17) is off market. New: 2368 253rd St, Lomita enters at #6 (7.83); 2056 242nd St, Lomita (coming soon Dec 5, #12, 7.19) and 3360 Kallin Ave, Long Beach (renderings only, #20, 6.26) also qualify. 4000 Marion Way is back on Zillow, but its kitchen was rescored 6.8 → 4.5 (now #19, 6.47). No price changes on any carried-over home. 4 of the Top 10 have open houses this weekend: Petaluma (Sun 12–1:30 PM), El Rey (Sun 12:30–4 PM), 85th St (Sun 2–4 PM), Pattiz (Sat 12–3 PM). Everything below the removed homes moves up: Petaluma to #3, Western #4, El Rey #5, 85th St #7, April Ct #8, Peabody #9, and Pattiz back into the Top 10 at #10.",
  "radnor": {
    "kicker": "Removed",
    "heading": "2037 245th St is under contract",
    "paragraphs": [
      "It had ranked #3 at 8.13 (kitchen 9.2, interior 8.5, space 5.8, commute 8.7, school 7) at $1,375,000.",
      "Its Zillow listing page now shows Under contract. It had been missing from the Zillow map extract two weeks running while the listing page still showed it active.",
      "Also removed this week: 3482 Iroquois Ave (#7, pending) and 2271 Mira Mar Ave (#17, off market). Do not tour these as active listings."
    ],
    "links": [
      {
        "label": "2037 245th St, Lomita 90717",
        "href": "https://www.zillow.com/homedetails/2037-245th-St-Lomita-CA-90717/21280953_zpid/"
      },
      {
        "label": "3482 Iroquois Ave",
        "href": "https://www.zillow.com/homedetails/3482-Iroquois-Ave-Long-Beach-CA-90808/21137499_zpid/"
      },
      {
        "label": "2271 Mira Mar Ave",
        "href": "https://www.zillow.com/homedetails/2271-Mira-Mar-Ave-Long-Beach-CA-90815/21200286_zpid/"
      }
    ]
  },
  "otherIntro": "The 12 qualifying homes below the Top 10, sorted by the same weighted total. ADU is “—” when none is listed. HOA penalty is “—” when none applies, and −0.75 for a gated HOA. Garage is shown as 2-car or 3-car. Open house is this weekend (Nov 28–29), or “None.” The line under each score is kitchen, interior, space, commute, and school.",
  "otherQualifying": [
    {
      "rank": 11,
      "area": "Long Beach",
      "links": [
        {
          "label": "4537 Linden Ave, LB 90807",
          "href": "https://www.zillow.com/homedetails/4537-Linden-Ave-Long-Beach-CA-90807/21157629_zpid/"
        }
      ],
      "price": "$1,199,000",
      "bedsBaths": "3/3",
      "sqft": "1,557",
      "adu": "—",
      "school": "Los Cerritos 8",
      "offPeak": "22.7",
      "rush": "35–45",
      "score": "7.32",
      "interior": "8.8",
      "space": "4.7",
      "commuteScore": "6.4",
      "schoolScore": "8",
      "notes": "Peninsula with barstool seating, fully open to the family room; full gut reno (all 3 baths, HVAC, roof, windows). Small 1,557 sf house. Open Sat and Sun 12–3 PM.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sat 12–3 PM, Sun 12–3 PM",
      "kitchen": "7.5"
    },
    {
      "rank": 12,
      "area": "Lomita",
      "links": [
        {
          "label": "2056 242nd St, Lomita 90717",
          "href": "https://www.zillow.com/homedetails/2056-242nd-St-Lomita-CA-90717/60325449_zpid/"
        }
      ],
      "price": "$1,450,000",
      "bedsBaths": "4/3.5",
      "sqft": "2,624",
      "adu": "—",
      "school": "Lomita Magnet 7",
      "offPeak": "16.6",
      "rush": "27–37",
      "score": "7.19",
      "interior": "6.0",
      "space": "7.0",
      "commuteScore": "8.7",
      "schoolScore": "7",
      "notes": "NEW, coming soon (on market Dec 5). 2001 build with a loft, short drive. Parkside Walk: about 16 detached homes on a private street with a $100/mo HOA; not gated, so no penalty. Kitchen and interior unverified (exterior photos only). No open house this weekend; open Sat 12/5 and Sun 12/6, 2–4 PM.",
      "badges": [
        "New",
        "Coming soon",
        "Choices"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "5.5"
    },
    {
      "rank": 13,
      "area": "Long Beach",
      "links": [
        {
          "label": "2425 Heather Ave, LB 90815",
          "href": "https://www.zillow.com/homedetails/2425-Heather-Ave-Long-Beach-CA-90815/21202675_zpid/"
        }
      ],
      "price": "$1,139,000",
      "bedsBaths": "3/3",
      "sqft": "2,000",
      "adu": "—",
      "school": "Bixby 8",
      "offPeak": "24.6",
      "rush": "40–50",
      "score": "7.14",
      "interior": "7.6",
      "space": "6.8",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "notes": "No island, but the kitchen connects to open living/dining. Reimagined mid-century; leathered granite, outdoor kitchen, RV parking. Open Sat 2–4 PM.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sat 2–4 PM",
      "kitchen": "6.2"
    },
    {
      "rank": 14,
      "area": "Long Beach",
      "links": [
        {
          "label": "2021 Lees Ave, LB 90815",
          "href": "https://www.zillow.com/homedetails/2021-Lees-Ave-Long-Beach-CA-90815/21209387_zpid/"
        }
      ],
      "price": "$1,275,000",
      "bedsBaths": "4/3",
      "sqft": "1,878",
      "adu": "—",
      "school": "Tincher 8",
      "offPeak": "25.5",
      "rush": "40–50",
      "score": "7.04",
      "interior": "7.2",
      "space": "6.4",
      "commuteScore": "5.2",
      "schoolScore": "8",
      "notes": "Kitchen opens to a vaulted great room with a breakfast counter (no island); bamboo floors, AC, pool. Kitchen photos were thin.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "6.8"
    },
    {
      "rank": 15,
      "area": "Long Beach",
      "links": [
        {
          "label": "6702 E El Progreso St, LB 90815",
          "href": "https://www.zillow.com/homedetails/6702-E-El-Progreso-St-Long-Beach-CA-90815/21207782_zpid/"
        }
      ],
      "price": "$1,495,000",
      "bedsBaths": "main 3/2",
      "sqft": "1,809 listed",
      "adu": "Attached 499 sf 1/1 (2024)",
      "school": "Emerson Parkside 8",
      "offPeak": "25.7",
      "rush": "41–51",
      "score": "6.91",
      "interior": "7.8",
      "space": "8.1",
      "commuteScore": "5.1",
      "schoolScore": "8",
      "notes": "Real permitted 2024 attached ADU (own address, entrance, kitchen, bath, laundry). Remodeled galley with no island. At the price cap.",
      "badges": [
        "ADU rule"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "3.5"
    },
    {
      "rank": 16,
      "area": "San Pedro",
      "links": [
        {
          "label": "1524 W 5th St, San Pedro 90732",
          "href": "https://www.zillow.com/homedetails/1524-W-5th-St-San-Pedro-CA-90732/21351518_zpid/"
        }
      ],
      "price": "$1,250,000",
      "bedsBaths": "3/3",
      "sqft": "2,376",
      "adu": "—",
      "school": "7th St Magnet 9",
      "offPeak": "24.4",
      "rush": "39–49",
      "score": "6.80",
      "interior": "5.5",
      "space": "7.9",
      "commuteScore": "5.6",
      "schoolScore": "9",
      "notes": "Ocean view and 3 full baths; compact U-kitchen with no island. Yard layout and finish level still only partly verified.",
      "badges": [
        "Choices"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "4.0"
    },
    {
      "rank": 17,
      "area": "Long Beach",
      "links": [
        {
          "label": "2916 Charlemagne Ave, LB 90815",
          "href": "https://www.zillow.com/homedetails/2916-Charlemagne-Ave-Long-Beach-CA-90815/21201754_zpid/"
        }
      ],
      "price": "$1,247,000",
      "bedsBaths": "3/3",
      "sqft": "2,148",
      "adu": "—",
      "school": "Carver 8",
      "offPeak": "24.9",
      "rush": "40–50",
      "score": "6.78",
      "interior": "8.0",
      "space": "7.2",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "notes": "Closed granite galley (no island); updated elsewhere, steam shower, $200k pool/putting-green yard, paid-off solar.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "3.5"
    },
    {
      "rank": 18,
      "area": "Long Beach",
      "links": [
        {
          "label": "635 Edith Way, LB 90807",
          "href": "https://www.zillow.com/homedetails/635-Edith-Way-Long-Beach-CA-90807/21161838_zpid/"
        }
      ],
      "price": "$1,199,999",
      "bedsBaths": "3/3",
      "sqft": "2,478",
      "adu": "—",
      "school": "Los Cerritos 8",
      "offPeak": "22.0",
      "rush": "35–45",
      "score": "6.57",
      "interior": "7.6",
      "space": "8.7",
      "commuteScore": "6.6",
      "schoolScore": "8",
      "notes": "Gated Crown Pointe HOA ($275/mo, −0.75). Remodeled quartz galley, not open to living; big 2,478 sf house with a pool. Open Sat 12–3 PM.",
      "badges": [
        "HOA"
      ],
      "hoaPenalty": "−0.75",
      "garage": "2-car",
      "openHouse": "Sat 12–3 PM",
      "kitchen": "3.5"
    },
    {
      "rank": 19,
      "area": "Long Beach",
      "links": [
        {
          "label": "4000 Marion Way, LB 90807",
          "href": "https://www.zillow.com/homedetails/4000-Marion-Way-Long-Beach-CA-90807/21161858_zpid/"
        }
      ],
      "price": "$1,265,000",
      "bedsBaths": "3/3",
      "sqft": "2,491",
      "adu": "—",
      "school": "Los Cerritos 8",
      "offPeak": "22.3",
      "rush": "35–45",
      "score": "6.47",
      "interior": "6.7",
      "space": "8.3",
      "commuteScore": "6.5",
      "schoolScore": "8",
      "notes": "Back on Zillow (new MLS# PW26247850). New photos show a dark-cabinet U-kitchen with a breakfast area, no island, not open to living, so kitchen drops 6.8 → 4.5 (total 6.93 → 6.47). Gated Crown Pointe HOA ($275/mo, −0.75).",
      "badges": [
        "HOA"
      ],
      "hoaPenalty": "−0.75",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "4.5"
    },
    {
      "rank": 20,
      "area": "Long Beach",
      "links": [
        {
          "label": "3360 Kallin Ave, LB 90808",
          "href": "https://www.zillow.com/homedetails/3360-Kallin-Ave-Long-Beach-CA-90808/21140102_zpid/"
        }
      ],
      "price": "$1,500,000",
      "bedsBaths": "4/3",
      "sqft": "2,029",
      "adu": "—",
      "school": "Cubberley 7 (unofficial)",
      "offPeak": "27.7",
      "rush": "43–53",
      "score": "6.26",
      "interior": "7.0",
      "space": "5.5",
      "commuteScore": "4.4",
      "schoolScore": "7",
      "notes": "NEW (listed Nov 28), exactly at the $1.5M cap. Permitted flip and expansion (3/2 → 4/3; bought as-is for $987k Dec 2025). Listing photos are renderings only, so completion and finishes are unverified. School unofficial.",
      "badges": [
        "New"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "6.0"
    },
    {
      "rank": 21,
      "area": "Long Beach",
      "links": [
        {
          "label": "2956 Ladoga Ave, LB 90815",
          "href": "https://www.zillow.com/homedetails/2956-Ladoga-Ave-Long-Beach-CA-90815/21208432_zpid/"
        }
      ],
      "price": "$1,025,000",
      "bedsBaths": "3/3",
      "sqft": "1,648",
      "adu": "—",
      "school": "Emerson Parkside 8",
      "offPeak": "26.1",
      "rush": "41–51",
      "score": "6.24",
      "interior": "7.2",
      "space": "6.0",
      "commuteScore": "5.0",
      "schoolScore": "8",
      "notes": "Closed shaker/quartz U-galley (no island); AC, pool. Baths are 1 full + 2 ¾ (passes). Lowest price among qualifiers.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "3.5"
    },
    {
      "rank": 22,
      "area": "Long Beach",
      "links": [
        {
          "label": "3502 Tulane Ave, LB 90808",
          "href": "https://www.zillow.com/homedetails/3502-Tulane-Ave-Long-Beach-CA-90808/21188984_zpid/"
        }
      ],
      "price": "$1,150,000",
      "bedsBaths": "3/3",
      "sqft": "1,746",
      "adu": "—",
      "school": "Burcham 8",
      "offPeak": "25.1",
      "rush": "40–50",
      "score": "5.95",
      "interior": "6.2",
      "space": "5.8",
      "commuteScore": "5.3",
      "schoolScore": "8",
      "notes": "Closed galley (no island), only moderately updated; turnkey, hardwood, AC.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "3.0"
    }
  ],
  "newThisWeek": {
    "intro": "48 target-ZIP rows were not in last week's files; two were already known (4000 Marion Way, 1028 E 10th St), leaving 46 truly new. Three qualify. The closest new miss is 2237 W 231st St (school 5).",
    "listings": [
      {
        "links": [
          {
            "label": "2368 253rd St, Lomita 90717",
            "href": "https://www.zillow.com/homedetails/2368-253rd-St-Lomita-CA-90717/21280455_zpid/"
          }
        ],
        "price": "$1,295,000",
        "listed": "Nov 24",
        "result": "Qualifies (#6, 7.83)",
        "note": "4 bd / 3 full ba, 2,852 sf, 2-car attached, cul-de-sac. Guaranteed Lomita MST Magnet 7 (Choices). Granite peninsula open to dining; updated, not modern."
      },
      {
        "links": [
          {
            "label": "2056 242nd St, Lomita 90717",
            "href": "https://www.zillow.com/homedetails/2056-242nd-St-Lomita-CA-90717/60325449_zpid/"
          }
        ],
        "price": "$1,450,000",
        "listed": "Coming soon, on market Dec 5",
        "result": "Qualifies (#12, 7.19)",
        "note": "Parkside Walk private-street HOA $100/mo, not gated (no penalty). Kitchen/interior unverified (exterior photos only). Open Sat 12/5 and Sun 12/6, 2–4 PM."
      },
      {
        "links": [
          {
            "label": "3360 Kallin Ave, Long Beach 90808",
            "href": "https://www.zillow.com/homedetails/3360-Kallin-Ave-Long-Beach-CA-90808/21140102_zpid/"
          }
        ],
        "price": "$1,500,000",
        "listed": "Nov 28",
        "result": "Qualifies (#20, 6.26)",
        "note": "Permitted flip/expansion to 4/3. Listing photos are renderings only; Cubberley 7 unofficial."
      },
      {
        "links": [
          {
            "label": "2237 W 231st St, Torrance 90501",
            "href": "https://www.zillow.com/homedetails/2237-W-231st-St-Torrance-CA-90501/21278395_zpid/"
          }
        ],
        "price": "$1,499,000",
        "listed": "Price cut Nov 28",
        "result": "Near-miss",
        "note": "Howard Wood Elementary 5/10 (unofficial). Otherwise strong: 6 bd, 3 baths with showers, 2-car attached, refreshed."
      },
      {
        "links": [
          {
            "label": "6312 E Eliot St, Long Beach 90803",
            "href": "https://www.zillow.com/homedetails/6312-E-Eliot-St-Long-Beach-CA-90803/21209834_zpid/"
          }
        ],
        "price": "$1,429,000",
        "listed": "On market Dec 2",
        "result": "Near-miss",
        "note": "2 full + quarter bath, no ADU."
      }
    ],
    "notVetted": "Not vetted: six auction listings with no list price (1106 E 46th St, 1734 Spreckels Ln, 1808 Peninsula Verde Dr, 2276 Easy Ave, 2721 E 218th Pl, 3618 Petaluma Ave). 6479 Brayton Ave (Redfin-only) remarks are still unread.",
    "qualifyingIntro": "4000 Marion Way was already a qualifier; it is now back on Zillow (new MLS# PW26247850) at the same price. New photos cut its kitchen score, so it slips from #15 to #19.",
    "qualifying": [
      {
        "links": [
          {
            "label": "4000 Marion Way, LB 90807",
            "href": "https://www.zillow.com/homedetails/4000-Marion-Way-Long-Beach-CA-90807/21161858_zpid/"
          }
        ],
        "price": "$1,265,000",
        "note": "Back on Zillow. Dark-cabinet U-kitchen with a breakfast area, no island, not open to living: kitchen 6.8 → 4.5, total 6.93 → 6.47. Gated Crown Pointe HOA (−0.75)."
      }
    ]
  },
  "priceChanges": [
    {
      "links": [
        {
          "label": "2237 W 231st St, Torrance",
          "href": "https://www.zillow.com/homedetails/2237-W-231st-St-Torrance-CA-90501/21278395_zpid/"
        }
      ],
      "from": "$1,549,000",
      "to": "$1,499,000",
      "delta": "−$50,000",
      "when": "Nov 28",
      "note": "Near-miss: Howard Wood Elementary 5/10 (unofficial)."
    },
    {
      "links": [
        {
          "label": "27945 Alvarez Dr, Rancho Palos Verdes",
          "href": "https://www.zillow.com/homedetails/27945-Alvarez-Dr-Rancho-Palos-Verdes-CA-90275/21360255_zpid/"
        }
      ],
      "from": "$1,499,000",
      "to": "$1,459,000",
      "delta": "−$40,000",
      "when": "Nov 27",
      "note": "Not a qualifier: 3/2 with no ADU."
    },
    {
      "links": [
        {
          "label": "3733 W 173rd St, Torrance",
          "href": "https://www.zillow.com/homedetails/3733-W-173rd-St-Torrance-CA-90504/20370836_zpid/"
        }
      ],
      "from": "$885,000",
      "to": "$842,000",
      "delta": "−$43,000",
      "when": "Nov 25",
      "note": "Not a qualifier: 3/2 (two ¾ baths), dated."
    }
  ],
  "priceChangeNote": "No price changes on any carried-over qualifier this week: every home kept from Nov 21 has the same list price. The garage-excluded homes (Leland, Palo Verde, Daggett, Faust) are also unchanged. The drops below are on target-ZIP homes that do not qualify.",
  "statusChanges": [
    {
      "title": "2037 245th St, Lomita 90717 — under contract (removed)",
      "body": "Was #3 last week (8.13). Its Zillow listing page now shows Under contract at $1,375,000. Removed from the ranked lists. It had been missing from the Zillow map extract two weeks running.",
      "links": [
        {
          "label": "2037 245th St, Lomita 90717",
          "href": "https://www.zillow.com/homedetails/2037-245th-St-Lomita-CA-90717/21280953_zpid/"
        }
      ]
    },
    {
      "title": "3482 Iroquois Ave, Long Beach 90808 — pending (removed)",
      "body": "Was #7 last week (7.79). Zillow homedetails shows Pending (after a $16k price cut on 11/15). Removed from the ranked lists.",
      "links": [
        {
          "label": "3482 Iroquois Ave, Long Beach 90808",
          "href": "https://www.zillow.com/homedetails/3482-Iroquois-Ave-Long-Beach-CA-90808/21137499_zpid/"
        }
      ]
    },
    {
      "title": "2271 Mira Mar Ave, Long Beach 90815 — off market (removed)",
      "body": "Was #17 last week (6.90). Not in today's extract; Zillow homedetails shows only a Zestimate (no list price), and the Coldwell Banker listing page now returns 404. Search snippets still show it active (stale). Probably withdrawn or pending; exact status unconfirmed.",
      "links": [
        {
          "label": "2271 Mira Mar Ave, Long Beach 90815",
          "href": "https://www.zillow.com/homedetails/2271-Mira-Mar-Ave-Long-Beach-CA-90815/21200286_zpid/"
        }
      ]
    },
    {
      "title": "4000 Marion Way, Long Beach 90807 — back on Zillow",
      "body": "Last week it was off Zillow and Active only on CRMLS. It is now on Zillow at the same $1,265,000 (new MLS# PW26247850). Still qualifies; kitchen rescored from new photos (see corrections).",
      "links": [
        {
          "label": "4000 Marion Way, Long Beach 90807",
          "href": "https://www.zillow.com/homedetails/4000-Marion-Way-Long-Beach-CA-90807/21161858_zpid/"
        }
      ]
    },
    {
      "title": "2922 Radnor Ave, Long Beach 90815 — still sold",
      "body": "Still sold (not in today's extract). Dropped from the garage-exclusion list this week.",
      "links": [
        {
          "label": "2922 Radnor Ave, Long Beach 90815",
          "href": "https://www.zillow.com/homedetails/2922-Radnor-Ave-Long-Beach-CA-90815/21205566_zpid/"
        }
      ]
    }
  ],
  "corrections": [
    {
      "title": "4000 Marion Way kitchen rescored",
      "body": "41 listing photos retrieved this week show a dark-cabinet U-kitchen with a breakfast area, no island, not open to the living room. Kitchen 6.8 → 4.5; total 6.93 → 6.47. Other factors unchanged."
    },
    {
      "title": "2056 242nd St HOA decision",
      "body": "Parkside Walk is about 16 detached homes on a private street with a $100/mo HOA and normal-size lots. A gate was not confirmed, so it is treated as a non-gated HOA: it qualifies with no penalty. The note flags the HOA and that the kitchen and interior are unverified."
    },
    {
      "title": "3360 Kallin Ave kept with a caveat",
      "body": "Listing photos are renderings only, so completion and finish quality are unverified. It is kept as a qualifier with middling kitchen and interior scores and a renderings-only note."
    },
    {
      "title": "2037 245th St extract gap explained",
      "body": "It was missing from the map extract two weeks running while the listing page showed it active. This week the listing page shows Under contract, so it is removed."
    }
  ],
  "nearMisses": [
    {
      "kind": "callout",
      "title": "Closest new near-miss: 2237 W 231st St",
      "paragraphs": [
        "Would rank high if its official school were 7+.",
        "2237 W 231st St, Torrance 90501. $1,499,000 after a $50k cut on Nov 28. 6 bd, 1 full + 2 ¾ baths (passes), 2-car attached. Refreshed: new LVP, white cabinets, granite island open to dining; no AC. Off-peak 14.9 min / rush est. 25–35.",
        "Howard Wood Elementary is 5/10 per Redfin and web search. That is unofficial (TUSD locator not checked), but it fails as recorded."
      ],
      "links": [
        {
          "label": "2237 W 231st St, Torrance 90501",
          "href": "https://www.zillow.com/homedetails/2237-W-231st-St-Torrance-CA-90501/21278395_zpid/"
        }
      ]
    },
    {
      "kind": "table",
      "title": "New near-misses (failed one hard filter)",
      "intro": "New or newly tracked this week. Each fails on baths, garage, property type, or a potential-only second unit.",
      "rows": [
        {
          "homes": [
            {
              "label": "6312 E Eliot St, Long Beach 90803",
              "href": "https://www.zillow.com/homedetails/6312-E-Eliot-St-Long-Beach-CA-90803/21209834_zpid/"
            }
          ],
          "price": "$1,429,000",
          "school": "not checked",
          "why": "Fails baths: 2 full + a quarter bath in the laundry room, no ADU. University Park Estates, 6,491 sf lot, remodeled. On market Dec 2."
        },
        {
          "homes": [
            {
              "label": "820 1/2 N Newport Ave, Long Beach 90804",
              "href": "https://www.zillow.com/homedetails/820-1-2-N-Newport-Ave-Long-Beach-CA-90804/447636002_zpid/"
            }
          ],
          "price": "$1,095,000",
          "school": "not checked",
          "why": "Real 2/1 back house (rented) behind a 3/2 front house, but fails garage (single garage with a compromised foundation plus a tandem carport) and is partly a fixer."
        },
        {
          "homes": [
            {
              "label": "1857 Lime Ave, Long Beach 90806",
              "href": "https://www.zillow.com/homedetails/1857-Lime-Ave-Long-Beach-CA-90806/21196896_zpid/"
            }
          ],
          "price": "$699,000",
          "school": "not checked",
          "why": "3/3 full, renovated, but no garage (driveway only); one republisher shows it Pending."
        },
        {
          "homes": [
            {
              "label": "836 Loma Ave, Long Beach 90804",
              "href": "https://www.zillow.com/homedetails/836-Loma-Ave-Long-Beach-CA-90804/21222415_zpid/"
            }
          ],
          "price": "$1,050,000",
          "school": "not checked",
          "why": "Duplex (2/1 front + 3/2 back)."
        },
        {
          "homes": [
            {
              "label": "2542 E Madison St, Carson 90810",
              "href": "https://www.zillow.com/homedetails/2542-E-Madison-St-Carson-CA-90810/21245137_zpid/"
            }
          ],
          "price": "$899,000",
          "school": "not checked",
          "why": "4/2 with “two separate entrances, potential” second living area. Potential only, not a real suite."
        },
        {
          "homes": [
            {
              "label": "1749 Lewis Ave, Long Beach 90813",
              "href": "https://www.zillow.com/homedetails/1749-Lewis-Ave-Long-Beach-CA-90813/21234651_zpid/"
            }
          ],
          "price": "$859,000",
          "school": "not checked",
          "why": "Remodeled 3/2; JADU/ADU is a concept only."
        },
        {
          "homes": [
            {
              "label": "25427 Belle Porte Ave, Harbor City 90710",
              "href": "https://www.zillow.com/homedetails/25427-Belle-Porte-Ave-Harbor-City-CA-90710/21290125_zpid/"
            }
          ],
          "price": "$899,000",
          "school": "not checked",
          "why": "Duplex, with an unfinished garage ADU."
        },
        {
          "homes": [
            {
              "label": "1074 252nd St, Harbor City 90710",
              "href": "https://www.zillow.com/homedetails/1074-252nd-St-Harbor-City-CA-90710/21292071_zpid/"
            }
          ],
          "price": "$799,999",
          "school": "not checked",
          "why": "Duplex."
        },
        {
          "homes": [
            {
              "label": "1238 Magnolia Ave, Long Beach 90813",
              "href": "https://www.zillow.com/homedetails/1238-Magnolia-Ave-Long-Beach-CA-90813/21235734_zpid/"
            }
          ],
          "price": "$860,000",
          "school": "not checked",
          "why": "Duplex."
        }
      ]
    },
    {
      "kind": "prose",
      "title": "Screened out quickly",
      "paragraphs": [
        "3/2 or 4/2 with no ADU (remarks read on Zillow): 905 Green Ln (also a fixer, 2,477 sf lot), 11901 Lucile (1-car garage), 11010 Braddock (garage ADU potential only), 3733 W 173rd (two ¾ baths, dated), 18421 Wilton (investor/fixer), 27945 Alvarez (flex room with exterior door, no bed or bath), 6121 E Wentworth (fixer), 5449 E Fairbrook (original kitchen and baths), 3488 E Janice (TLC, as-is), 2959 Cedar (nice MCM, 2.5-car garage, no ADU), 3016 Adriatic, 1303 E Michelson, 3037 Pacific, 2735 Hackett, 983 W 6th (TLC), 767 W 8th (fixer), 1334 E 9th, 1087 253rd, 933 Walnut, 966 Ashbridge; 1345 Linden and 1014 Magnolia were already screened last week.",
        "Auctions with no list price (excluded): 1106 E 46th St, 1734 Spreckels Ln, 1808 Peninsula Verde Dr, 2276 Easy Ave, 2721 E 218th Pl, 3618 Petaluma Ave. Under 3 bd or 1 bath: 1174 E 9th, 2240 Pine, 409 E Pleasant, 4433 E Vermont (2/1); 3515 Adriatic (3/1). 1028 E 10th St is already known (2/1 main + ADU, fails main-house beds)."
      ]
    },
    {
      "kind": "prose",
      "title": "Redfin cross-check",
      "paragraphs": [
        "Redfin cross-check: a fresh ZIP-filter crawl (house, ≤ $1.5M, 3+ beds, 2+ baths; 31 ZIPs) returned 317 in-ZIP cards; 14 were not in today's Zillow extract, and all are known near-misses or were screened from remarks last week. 6479 Brayton Ave (90805, 3/2 card) is the only one whose remarks are still unread. Redfin found no 3+ full-bath house that Zillow missed. After about 30 search hits Redfin listing pages returned an AWS WAF challenge; that was not worked around.",
        "Last week's near-misses (including 4437 Keever Ave, pending an official LBUSD school) were not re-vetted this week."
      ]
    }
  ],
  "openQuestions": [
    {
      "question": "Does 2056 242nd St's private-street HOA count as a PUD under the buyer's rule?",
      "detail": "Parkside Walk: about 16 detached homes on a private street, $100/mo HOA (Cammarata-managed), normal 5,001 sf lot. A gate was not confirmed, so it is kept with no penalty (decision this week). Interior photos should appear when it goes live Dec 5; rescore kitchen and interior then. Open Sat 12/5 and Sun 12/6, 2–4 PM.",
      "links": [
        {
          "label": "2056 242nd St",
          "href": "https://www.zillow.com/homedetails/2056-242nd-St-Lomita-CA-90717/60325449_zpid/"
        }
      ]
    },
    {
      "question": "Is 3360 Kallin Ave actually finished, and what is its official school?",
      "detail": "Listing photos are renderings only, so completion and finishes are unverified (kept with that caveat). Cubberley K–8 (7) is unofficial; the LBUSD locator needs a sign-in. Confirm both before touring.",
      "links": [
        {
          "label": "3360 Kallin Ave",
          "href": "https://www.zillow.com/homedetails/3360-Kallin-Ave-Long-Beach-CA-90808/21140102_zpid/"
        }
      ]
    },
    {
      "question": "What happened to 2271 Mira Mar Ave?",
      "detail": "Off Zillow (Zestimate only) and the Coldwell Banker page is 404; withdrawn vs pending is unconfirmed. Recheck only if the user still cares.",
      "links": [
        {
          "label": "2271 Mira Mar Ave",
          "href": "https://www.zillow.com/homedetails/2271-Mira-Mar-Ave-Long-Beach-CA-90815/21200286_zpid/"
        }
      ]
    },
    {
      "question": "Is 2237 W 231st St's official school really Howard Wood 5?",
      "detail": "The 5/10 is from Redfin and web search; the TUSD locator was not checked. If the official school were 7+, this refreshed 6-bed home would rank high.",
      "links": [
        {
          "label": "2237 W 231st St",
          "href": "https://www.zillow.com/homedetails/2237-W-231st-St-Torrance-CA-90501/21278395_zpid/"
        }
      ]
    },
    {
      "question": "What is the official LBUSD elementary for 4437 Keever Ave?",
      "detail": "Carried from last week and not rechecked this week. Broker sites say Longfellow 9 (unofficial); it stays a near-miss until confirmed at lbschools.net.",
      "links": [
        {
          "label": "4437 Keever Ave",
          "href": "https://www.zillow.com/homedetails/4437-Keever-Ave-Long-Beach-CA-90807/21159238_zpid/"
        }
      ]
    },
    {
      "question": "What do 6479 Brayton Ave's remarks say?",
      "detail": "Redfin-only 3/2 card in 90805; remarks were empty last week and Redfin is now blocking. Low priority.",
      "links": [
        {
          "label": "6479 Brayton Ave",
          "href": "https://www.redfin.com/CA/Long-Beach/6479-Brayton-Ave-90805/home/7506864"
        }
      ]
    },
    {
      "question": "Does 1524 W 5th St have a usable yard, and what is the finish level?",
      "detail": "Carried over; still only partly verified from photos.",
      "links": [
        {
          "label": "1524 W 5th St",
          "href": "https://www.zillow.com/homedetails/1524-W-5th-St-San-Pedro-CA-90732/21351518_zpid/"
        }
      ]
    }
  ],
  "caveat": {
    "title": "Long Beach school assignments are still not officially verified",
    "paragraphs": [
      "The Long Beach Unified school locator still needs a sign-in (locator.pea.powerschool.com), so new Long Beach addresses cannot be officially zoned from here.",
      "This week that affects 3360 Kallin Ave: Cubberley K–8 (7) comes from an earlier MLS record and is unofficial. Confirm at lbschools.net before touring.",
      "Carried-over Long Beach homes still show their earlier official results. The new Lomita homes were checked today with the LAUSD Resident School Identifier.",
      "Still unverified from last week: 4437 Keever Ave (broker sites say Longfellow 9). If confirmed 7+, it would qualify under the ADU rule."
    ]
  },
  "weightsNote": "Scores are 0–10. The total weights kitchen 20%, interior 20%, space 25%, commute 20%, and school 20% (unchanged since Nov 21). Kitchen is the island and open kitchen/living layout; 2001 Carfax Ave is the model (10) and 6320 W 85th St is the lower example (3.0). Interior is everything else about how modern and updated the home is. A home in a gated HOA then loses 0.75 points: 635 Edith Way and 4000 Marion Way (Crown Pointe, $275/mo). Non-gated fees are not penalized: 6320 W 85th St (about $23/year) and 2056 242nd St ($100/mo private street, gate not confirmed). The 2-car garage rule is a hard filter, not part of the score. When two totals match, the higher kitchen score ranks first, then the higher interior score, then the lower list price.",
  "top10": [
    {
      "rank": 1,
      "address": "354 E Carson St, Long Beach 90807",
      "href": "https://www.zillow.com/homedetails/354-E-Carson-St-Long-Beach-CA-90807/21161137_zpid/",
      "price": "$1,450,000",
      "bedsBaths": "5 bd / 3.5 ba (3 full)",
      "size": "2,205 sf · 7,000 sf lot",
      "score": "8.54",
      "interior": "8.0",
      "space": "7.6",
      "commuteScore": "6.9",
      "schoolScore": "9",
      "school": "Longfellow",
      "rating": "9/10",
      "schoolNote": "official LBUSD",
      "commute": "21.4 min off-peak / 34–44 min rush",
      "notes": "Holds #1. Large waterfall-quartz island open to the living room in a remodeled 1925 single-story on a 7,000 sf lot; one of the better Long Beach commutes. No open house this weekend.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "9.3"
    },
    {
      "rank": 2,
      "address": "2001 Carfax Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/2001-Carfax-Ave-Long-Beach-CA-90815/21206502_zpid/",
      "price": "$1,495,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,015 sf · 5,820 sf corner lot",
      "score": "8.27",
      "interior": "9.5",
      "space": "6.1",
      "commuteScore": "5.2",
      "schoolScore": "9",
      "school": "Gant",
      "rating": "9/10",
      "schoolNote": "official LBUSD",
      "commute": "25.5 min off-peak / 40–50 min rush",
      "notes": "Holds #2. The kitchen model (10): waterfall island and a vaulted kitchen fully open to living and dining (Tesoro gut remodel). At the cap, with a longer rush-hour drive.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "10.0"
    },
    {
      "rank": 3,
      "address": "1876 Petaluma Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/1876-Petaluma-Ave-Long-Beach-CA-90815/21207155_zpid/",
      "price": "$1,439,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,411 sf · 6,412 sf lot",
      "score": "8.03",
      "interior": "9.0",
      "space": "7.7",
      "commuteScore": "4.7",
      "schoolScore": "8",
      "school": "Tincher",
      "rating": "8/10",
      "schoolNote": "official LBUSD",
      "commute": "26.7 min off-peak / 42–52 min rush",
      "notes": "Up to #3 after 2037 245th St went under contract. Large island and a kitchen/family-room combo on a top-to-bottom renovation; long rush-hour drive. Open Sun 12–1:30 PM.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sun 12–1:30 PM",
      "kitchen": "8.8"
    },
    {
      "rank": 4,
      "address": "211 N Western Ave, San Pedro 90732",
      "href": "https://www.zillow.com/homedetails/211-N-Western-Ave-San-Pedro-CA-90732/21350738_zpid/",
      "price": "$1,079,000",
      "bedsBaths": "main 3 bd / 2 ba + attached 1/1 in-law suite (own entrance)",
      "size": "1,635 sf listed · 7,694 sf lot",
      "score": "7.91",
      "interior": "8.3",
      "space": "6.2",
      "commuteScore": "6.0",
      "schoolScore": "8",
      "school": "Bandini Street",
      "rating": "8/10",
      "schoolNote": "official LAUSD, grades 1–5",
      "commute": "24.0 min off-peak / 36–46 min rush",
      "notes": "Up to #4. Oversized quartz island fully open to living/dining, plus a qualifying 1/1 in-law suite; lowest price in the Top 10. Busy Western Ave is a red flag (already docked in space).",
      "hoaPenalty": "—",
      "badges": [
        "ADU rule"
      ],
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "9.5"
    },
    {
      "rank": 5,
      "address": "1911 El Rey Rd, San Pedro 90732",
      "href": "https://www.zillow.com/homedetails/1911-El-Rey-Rd-San-Pedro-CA-90732/21351410_zpid/",
      "price": "$1,499,000",
      "bedsBaths": "5 bd / 4 ba",
      "size": "3,267 sf · 7,496 sf lot",
      "score": "7.88",
      "interior": "6.5",
      "space": "10.0",
      "commuteScore": "5.4",
      "schoolScore": "9",
      "school": "7th Street Arts Magnet",
      "rating": "9/10",
      "schoolNote": "guaranteed magnet, Choices application",
      "commute": "26.0 min off-peak / 38–48 min rush",
      "notes": "Up to #5. Most living space in the set (marketed as two homes in one); traditional granite kitchen with no island. 7th St Magnet 9 needs a Choices application. Open Sun 12:30–4 PM.",
      "hoaPenalty": "—",
      "badges": [
        "Choices"
      ],
      "garage": "2-car",
      "openHouse": "Sun 12:30–4 PM",
      "kitchen": "6.0"
    },
    {
      "rank": 6,
      "address": "2368 253rd St, Lomita 90717",
      "href": "https://www.zillow.com/homedetails/2368-253rd-St-Lomita-CA-90717/21280455_zpid/",
      "price": "$1,295,000",
      "bedsBaths": "4 bd / 3 full ba (MLS)",
      "size": "2,852 sf · 5,066 sf lot",
      "score": "7.83",
      "interior": "5.8",
      "space": "9.0",
      "commuteScore": "8.6",
      "schoolScore": "7",
      "school": "Lomita MST Magnet",
      "rating": "7/10",
      "schoolNote": "Eshelman Ave 5 assigned; guaranteed magnet, Choices application; LAUSD RSI today",
      "commute": "17.4 min off-peak / 27–37 min rush",
      "notes": "NEW (listed Nov 24). Big 2,852 sf two-story on a cul-de-sac with a short drive; granite peninsula with seating open to dining. Oak cabinets and tile read as updated, not modern. Magnet needs a Choices application.",
      "hoaPenalty": "—",
      "badges": [
        "New",
        "Choices"
      ],
      "garage": "2-car attached",
      "openHouse": "None",
      "kitchen": "6.5"
    },
    {
      "rank": 7,
      "address": "6320 W 85th St, Los Angeles (Westchester) 90045",
      "href": "https://www.zillow.com/homedetails/6320-W-85th-St-Los-Angeles-CA-90045/20381325_zpid/",
      "price": "$1,499,000",
      "bedsBaths": "5 bd / 3 ba",
      "size": "2,038 sf · 6,901 sf lot",
      "score": "7.74",
      "interior": "7.2",
      "space": "6.8",
      "commuteScore": "10.0",
      "schoolScore": "10",
      "school": "Kentwood Elementary",
      "rating": "10/10",
      "schoolNote": "official LAUSD",
      "commute": "11.6 min off-peak / 16–22 min rush",
      "notes": "Up to #7. Kentwood 10 and the shortest drive (11.6 min), but a compact closed galley (the 3.0 kitchen benchmark). Small non-gated Kentwood Guardians HOA (~$23/yr), not penalized. Open Sun 2–4 PM.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sun 2–4 PM",
      "kitchen": "3.0"
    },
    {
      "rank": 8,
      "address": "1929 April Ct, Lomita 90717",
      "href": "https://www.zillow.com/homedetails/1929-April-Ct-Lomita-CA-90717/21279743_zpid/",
      "price": "$1,349,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,130 sf · 7,038 sf lot",
      "score": "7.58",
      "interior": "6.8",
      "space": "7.2",
      "commuteScore": "8.6",
      "schoolScore": "7",
      "school": "Lomita MST Magnet",
      "rating": "7/10",
      "schoolNote": "guaranteed magnet, Choices application",
      "commute": "17.3 min off-peak / 27–37 min rush",
      "notes": "Up to #8. Breakfast counter through a wide opening (no large island); updated hardwood and granite, cul-de-sac, spa. Only qualifying home with a 3-car garage.",
      "hoaPenalty": "—",
      "badges": [
        "Choices"
      ],
      "garage": "3-car",
      "openHouse": "None",
      "kitchen": "6.5"
    },
    {
      "rank": 9,
      "address": "5103 E Peabody St, Long Beach 90808",
      "href": "https://www.zillow.com/homedetails/5103-E-Peabody-St-Long-Beach-CA-90808/465670604_zpid/",
      "price": "$1,198,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "1,535 sf · 6,351 sf lot",
      "score": "7.52",
      "interior": "8.2",
      "space": "5.5",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "school": "Carver",
      "rating": "8/10",
      "schoolNote": "official LBUSD",
      "commute": "24.8 min off-peak / 40–50 min rush",
      "notes": "Up to #9. Large white island fully open to the living room in a full remodel with pool and spa; modest 1,535 sf is the tradeoff.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "None",
      "kitchen": "9.1"
    },
    {
      "rank": 10,
      "address": "2102 Pattiz Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/2102-Pattiz-Ave-Long-Beach-CA-90815/21209086_zpid/",
      "price": "$1,224,888",
      "bedsBaths": "4 bd / 3 ba",
      "size": "1,948 sf",
      "score": "7.48",
      "interior": "8.0",
      "space": "6.4",
      "commuteScore": "4.7",
      "schoolScore": "8",
      "school": "Tincher",
      "rating": "8/10",
      "schoolNote": "official LBUSD",
      "commute": "26.9 min off-peak / 42–52 min rush",
      "notes": "Back in the Top 10 at #10. Large gathering island with seating, turnkey (new roof and HVAC 2023); long rush-hour drive. Open Sat 12–3 PM.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sat 12–3 PM",
      "kitchen": "8.7"
    }
  ],
  "excludedGarage": {
    "heading": "Excluded: under a 2-car garage",
    "intro": "The 2-car garage rule (added Nov 21) is a hard filter. The four carried homes keep their earlier totals and are still active at unchanged prices; the three new ones were not scored. 2922 Radnor Ave is still sold and was dropped.",
    "homes": [
      {
        "address": "731 N Leland Ave, San Pedro 90732",
        "href": "https://www.zillow.com/homedetails/731-N-Leland-Ave-San-Pedro-CA-90732/21304908_zpid/",
        "price": "$1,299,000",
        "score": "8.20",
        "garage": "1-car",
        "openHouse": "None",
        "reason": "1-car garage (still active, unchanged)"
      },
      {
        "address": "3675 Palo Verde Ave, Long Beach 90808",
        "href": "https://www.zillow.com/homedetails/3675-Palo-Verde-Ave-Long-Beach-CA-90808/21187647_zpid/",
        "price": "$1,499,000",
        "score": "7.17",
        "garage": "1-car",
        "openHouse": "None",
        "reason": "1-car garage (still active, unchanged)"
      },
      {
        "address": "5451 E Daggett St, Long Beach 90815",
        "href": "https://www.zillow.com/homedetails/5451-E-Daggett-St-Long-Beach-CA-90815/21203274_zpid/",
        "price": "$1,398,000",
        "score": "6.79",
        "garage": "1-car",
        "openHouse": "None",
        "reason": "1-car garage (still active, unchanged; had qualified under the ADU rule)"
      },
      {
        "address": "3308 Faust Ave, Long Beach 90808",
        "href": "https://www.zillow.com/homedetails/3308-Faust-Ave-Long-Beach-CA-90808/21190951_zpid/",
        "price": "$1,249,000",
        "score": "6.28",
        "garage": "1-car",
        "openHouse": "Sat 11–2 PM (map extract only; listing page not rechecked)",
        "reason": "1-car garage (still active, unchanged)"
      },
      {
        "address": "820 1/2 N Newport Ave, Long Beach 90804",
        "href": "https://www.zillow.com/homedetails/820-1-2-N-Newport-Ave-Long-Beach-CA-90804/447636002_zpid/",
        "price": "$1,095,000",
        "score": "—",
        "garage": "1-car + tandem carport",
        "openHouse": "None (not checked)",
        "reason": "NEW. Single garage with a compromised foundation plus a tandem carport; also partly a fixer. Not scored."
      },
      {
        "address": "1857 Lime Ave, Long Beach 90806",
        "href": "https://www.zillow.com/homedetails/1857-Lime-Ave-Long-Beach-CA-90806/21196896_zpid/",
        "price": "$699,000",
        "score": "—",
        "garage": "none (driveway)",
        "openHouse": "None (not checked)",
        "reason": "NEW. 3/3 full, renovated, but no garage; possibly pending. Not scored."
      },
      {
        "address": "11901 Lucile St, Los Angeles 90230",
        "href": "https://www.zillow.com/homedetails/11901-Lucile-St-Los-Angeles-CA-90230/20440187_zpid/",
        "price": "$1,499,999",
        "score": "—",
        "garage": "1-car",
        "openHouse": "None (not checked)",
        "reason": "NEW. 1-car garage; also fails baths (3/2, no ADU). Not scored."
      }
    ]
  }
};
