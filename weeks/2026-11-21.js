/* Week of 2026-11-21. Same-day revision after the 2-car garage rule and open-house column were added Nov 21.
   Leave an unknown field as "". The page shows n/a.
*/
window.HOUSE_WEEKS = window.HOUSE_WEEKS || {};
window.HOUSE_WEEKS["2026-11-21"] = {
  "title": "House Search Digest — Nov 21, 2026",
  "weekLabel": "Saturday, Nov 21, 2026",
  "lede": "Single-family homes for sale in the South Bay, Westside, Long Beach, and San Pedro.",
  "prepared": "Prepared Saturday morning, Nov 21, 2026 (8:20–9:30 AM Pacific), then updated later that morning after a new bed/bath rule, a Zillow 2-bath pass, and a clarification that an attached in-law suite with its own entrance counts. Later the same day every qualifying home was rescored and the Top 5 was expanded to a Top 10. Still later that day a 2-car garage rule was added as a dealbreaker and this weekend’s Zillow open houses were recorded. Factor scores were left unchanged; five homes dropped out, and the Top 10 was re-ranked.",
  "criteriaSummary": "Detached house with a front and back yard; 3+ bedrooms and 3+ full baths, or 3+ bedrooms and 2+ baths when a real ADU or in-law suite qualifies; list price ≤ $1,500,000; off-peak drive ≤ 30 min to Hawthorne Civic Center; assigned elementary 7+ on GreatSchools; interior relatively updated; at least a 2-car garage (rule added Nov 21).",
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
    "New LAUSD addresses were checked with the LAUSD Resident School Identifier (rsi.lausd.net). Carried-over homes reuse last week's official results (LAUSD RSI, LBUSD DecisionInsite 236516, TUSD 85052, PVPUSD, CCUSD).",
    "Commute score starts at 10 for an off-peak drive of 12 minutes or less, then subtracts 0.22 per extra off-peak minute and 0.12 per minute that the midpoint of the rush estimate is past 30. School score is the GreatSchools rating (7 = 7.0 through 10 = 10.0), or the qualifying magnet rating (Lomita MST 7 or 7th Street Arts Magnet 9).",
    "Space penalties already applied: busy Western Ave −0.8, the fence that splits the Daggett yard −0.3, and the unverified hillside yard at 1524 W 5th St −0.25. An unverified lot scored as a neutral 0 on the lot component. Palo Verde’s lot was not verified. Living area for ADU homes is main plus documented ADU: Daggett 1,832 + 423 = 2,255; El Progreso 1,809 + 499 = 2,308. Western is scored on the listed 1,635 sf plus the qualifying-suite bonus, without an invented extra square footage. 2001 Carfax Ave is the high-interior benchmark. 6320 W 85th St scores lower for a compact kitchen with no island. Near-misses were not scored.",
    "After the weighted sum, a home in a gated HOA loses 0.75 points. That is a significant detractor, not a dealbreaker. It applies only to 635 Edith Way and 4000 Marion Way, both in Crown Pointe ($275/mo). 6320 W 85th St has a small non-gated neighborhood HOA (Kentwood Guardians, about $23/year) and is not penalized.",
    "The 2-car garage rule was added Nov 21. It is a hard filter, not a scoring factor. Garage counts and this weekend’s open houses come from Zillow, recorded in zillow-oh-garage-2026-11-21.jsonl. Factor scores and totals were not changed."
  ],
  "rankingNote": "The 2-car garage rule was added Nov 21. It dropped 731 N Leland Ave (was #1 at 8.20; 1-car garage) out of the Top 10, so 6320 W 85th St is now #1. 2922 Radnor Ave (was #9 at 7.28) is also out: Zillow now shows it RECENTLY_SOLD at $895,000 with no garage. 1929 April Ct and 2102 Pattiz Ave moved in at #9 and #10. 3482 Iroquois Ave holds at #8 and has the only Top 10 open house this weekend (Sun 11/22 1-4pm). 211 N Western Ave ranks #7; busy Western Ave is still a red flag and is reflected in the space score. 6816 Cerritos Ave still does not pass: the attached unit would now count, but an official 7+ elementary could not be confirmed (Redfin lists Grant Elementary as assigned at 4/10). 4437 Keever Ave remains the highlighted near-miss pending an official school check.",
  "radnor": {
    "kicker": "Excluded",
    "heading": "2922 Radnor Ave is no longer qualifying",
    "paragraphs": [
      "It had ranked #9 at 7.28 (interior 7.9, space 5.8, commute 5.3, school 10), with its listing status unconfirmed.",
      "Zillow now shows it RECENTLY_SOLD at $895,000 with no garage. It fails the 2-car garage rule added Nov 21, and it is off the market, so it is out either way.",
      "It is listed under Excluded: under a 2-car garage. Do not tour it as an active listing."
    ],
    "links": [
      {
        "label": "2922 Radnor Ave, LB 90815",
        "href": "https://www.redfin.com/CA/Long-Beach/2922-Radnor-Ave-90815/home/7582394"
      },
      {
        "label": "Zillow",
        "href": "https://www.zillow.com/homedetails/2922-Radnor-Ave-Long-Beach-CA-90815/21205566_zpid/"
      }
    ]
  },
  "otherIntro": "The 12 qualifying homes below the Top 10, sorted by the same weighted total. Scores are unchanged. ADU is “—” when the digest does not list one. HOA penalty is “—” when none applies, and −0.75 for a gated HOA. Garage is the Zillow garage_spaces count, shown as 2-car or 3-car. Open house is this weekend (Nov 21–22), or “none.” The line under each score is interior, space, commute, and school.",
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
      "score": "7.00",
      "interior": "8.4",
      "space": "4.7",
      "commuteScore": "6.4",
      "schoolScore": "8",
      "notes": "Full reno: peninsula with barstool seating, kitchen open to the family room; all 3 baths, HVAC, roof, and windows redone. Modest 1,557 sf house (formerly #3). 5,163 sf lot.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 12,
      "area": "Long Beach",
      "links": [
        {
          "label": "6702 E El Progreso St, LB 90815",
          "href": "https://www.zillow.com/homedetails/6702-E-El-Progreso-St-Long-Beach-CA-90815/21207782_zpid/"
        }
      ],
      "price": "$1,495,000",
      "bedsBaths": "main 3/2 + ADU",
      "sqft": "1,809 listed (ADU 499)",
      "adu": "Attached 499 sf 1/1 (built 9/2024; own address, entrance, full kitchen, bath, laundry)",
      "school": "Emerson Parkside 8",
      "offPeak": "25.7",
      "rush": "41–51",
      "score": "6.99",
      "interior": "6.7",
      "space": "8.1",
      "commuteScore": "5.1",
      "schoolScore": "8",
      "notes": "Main house remodeled (kitchen, both baths, new HVAC, new LVP) but a galley kitchen with no island. 7,215 sf corner lot. At the price cap. NEW under the ADU rule.",
      "badges": [
        "ADU rule"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 13,
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
      "score": "6.96",
      "interior": "7.1",
      "space": "7.2",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "notes": "“Beautifully updated”; steam shower; $200k pool/putting-green backyard (2021); paid-off solar. Island / open concept not confirmed. 6,112 sf lot.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 14,
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
      "score": "6.94",
      "interior": "7.3",
      "space": "6.8",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "notes": "“Reimagined” mid-century; leathered granite; outdoor kitchen; RV parking. Island not mentioned. 6,248 sf lot.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 15,
      "area": "Long Beach",
      "links": [
        {
          "label": "2271 Mira Mar Ave, LB 90815",
          "href": "https://www.zillow.com/homedetails/2271-Mira-Mar-Ave-Long-Beach-CA-90815/21200286_zpid/"
        }
      ],
      "price": "$1,299,000",
      "bedsBaths": "3/3",
      "sqft": "1,809",
      "adu": "—",
      "school": "Bixby 8",
      "offPeak": "24.4",
      "rush": "39–49",
      "score": "6.93",
      "interior": "8.1",
      "space": "5.5",
      "commuteScore": "5.6",
      "schoolScore": "8",
      "notes": "“Exceptionally remodeled” designer quartz kitchen, permitted baths, new windows and AC, deck and pergola. Island and open concept not confirmed in remarks (formerly #5).",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 16,
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
      "score": "6.83",
      "interior": "7.4",
      "space": "6.4",
      "commuteScore": "5.2",
      "schoolScore": "8",
      "notes": "Vaulted beams, kitchen opens to the great room (no island mentioned), bamboo floors, low-E windows, AC; pool; front lawn.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 17,
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
      "school": "No assigned ES returned; guaranteed 7th Street Arts Magnet 9 (Choices application)",
      "offPeak": "24.4",
      "rush": "39–49",
      "score": "6.82",
      "interior": "5.5",
      "space": "7.9",
      "commuteScore": "5.6",
      "schoolScore": "9",
      "notes": "NEW (1 day). 3 full baths, no common walls, 7,096 sf hillside lot, ocean view, central AC, vinyl floors. Yard layout and finish level not verified; interior scored as middling 5.5.",
      "badges": [
        "New",
        "Choices"
      ],
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
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
      "price": "$1,199,999 (↓ $20,001)",
      "bedsBaths": "3/3",
      "sqft": "2,478",
      "adu": "—",
      "school": "Los Cerritos 8",
      "offPeak": "22.0",
      "rush": "35–45",
      "score": "6.79",
      "interior": "7.0",
      "space": "8.7",
      "commuteScore": "6.6",
      "schoolScore": "8",
      "notes": "Remodeled kitchen and primary bath; island / open concept not confirmed. Strong space (2,478 sf, pool, 6,514 sf lot). Gated Crown Pointe HOA ($275/mo); −0.75 penalty applied (was 7.54, former #6).",
      "hoaPenalty": "−0.75",
      "badges": [
        "HOA"
      ],
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 19,
      "area": "Long Beach",
      "links": [
        {
          "label": "5103 E Peabody St, LB 90808",
          "href": "https://www.zillow.com/homedetails/5103-E-Peabody-St-Long-Beach-CA-90808/465670604_zpid/"
        }
      ],
      "price": "$1,198,000",
      "bedsBaths": "4/3",
      "sqft": "1,535",
      "adu": "—",
      "school": "Carver 8",
      "offPeak": "24.8",
      "rush": "40–50",
      "score": "6.57",
      "interior": "7.2",
      "space": "5.5",
      "commuteScore": "5.4",
      "schoolScore": "8",
      "notes": "Fully remodeled; pool and spa; primary bedroom has its own exterior entrance; R-3 zoned. Island / open concept not confirmed. 6,351 sf lot (0.1458 acre). Tied with Marion on total; Peabody ranks higher on interior.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 20,
      "area": "Long Beach",
      "links": [
        {
          "label": "4000 Marion Way, LB 90807",
          "href": "https://www.redfin.com/CA/Long-Beach/4000-Marion-Way-90807/home/7526110"
        }
      ],
      "price": "$1,265,000",
      "bedsBaths": "3/3",
      "sqft": "2,491",
      "adu": "—",
      "school": "Los Cerritos 8",
      "offPeak": "22.3",
      "rush": "35–45",
      "score": "6.57",
      "interior": "6.7",
      "space": "8.3",
      "commuteScore": "6.5",
      "schoolScore": "8",
      "notes": "Newer appliances and floors (not a documented gut remodel); island / open concept not confirmed. Strong space (2,491 sf, pool, 5,914 sf lot). Same gated Crown Pointe HOA as Edith ($275/mo); −0.75 penalty applied (was 7.32, former #10). Off Zillow, Active on CRMLS (Nov 21).",
      "hoaPenalty": "−0.75",
      "badges": [
        "HOA",
        "Status"
      ],
      "garage": "2-car",
      "openHouse": "none"
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
      "score": "6.55",
      "interior": "7.0",
      "space": "6.0",
      "commuteScore": "5.0",
      "schoolScore": "8",
      "notes": "Shaker/quartz kitchen, AC, pool. Island not mentioned. Baths are 1 full + 2 ¾ (passes). 5,891 sf lot. Open houses Sat 11/21 1-4pm and Sun 11/22 2-4pm.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sat 11/21 1-4pm; Sun 11/22 2-4pm"
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
      "score": "6.21",
      "interior": "6.0",
      "space": "5.8",
      "commuteScore": "5.3",
      "schoolScore": "8",
      "notes": "Turnkey, hardwood, AC; only one bath noted as remodeled (moderately updated). Island / open concept not confirmed. 6,012 sf lot.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    }
  ],
  "newThisWeek": {
    "intro": "20 target-ZIP Zillow addresses were not in last week’s (Nov 17) digest. The seven below are new on Zillow (7 days or less). The other 13 are older listings, newly tracked because the search area widened. Only 1524 W 5th St qualifies. Redfin added two homes that are not on Zillow; both are near-misses.",
    "listings": [
      {
        "links": [
          {
            "label": "1958 Avenida Feliciano, RPV 90275",
            "href": "https://www.zillow.com/homedetails/1958-Avenida-Feliciano-Rancho-Palos-Verdes-CA-90275/21347582_zpid/"
          }
        ],
        "price": "$1,450,000",
        "listed": "0 days, coming soon",
        "result": "Near-miss",
        "note": "2 full + 1 half (2.5). Upgraded single-level home, new roof and stucco, large private yard, Lynx BBQ, central AC. Open Sun Dec 6, 1–4 PM."
      },
      {
        "links": [
          {
            "label": "25526 Baycrest Ct, Harbor City 90710",
            "href": "https://www.zillow.com/homedetails/25526-Baycrest-Ct-Harbor-City-CA-90710/465671364_zpid/"
          }
        ],
        "price": "$599,000",
        "listed": "0 days",
        "result": "Near-miss",
        "note": "2.5 baths; gated Harbor Village HOA ($215); “needs TLC.”"
      },
      {
        "links": [
          {
            "label": "1524 W 5th St, San Pedro 90732",
            "href": "https://www.zillow.com/homedetails/1524-W-5th-St-San-Pedro-CA-90732/21351518_zpid/"
          }
        ],
        "price": "$1,250,000",
        "listed": "1 day",
        "result": "Qualifies",
        "note": "The only new listing that clears every hard filter. Yard layout and finish level are not verified."
      },
      {
        "links": [
          {
            "label": "23728 President Ave, Harbor City 90710",
            "href": "https://www.zillow.com/homedetails/23728-President-Ave-Harbor-City-CA-90710/21300050_zpid/"
          }
        ],
        "price": "$899,000",
        "listed": "2 days",
        "result": "Near-miss",
        "note": "Official LAUSD RSI assigns President Avenue Elementary, 6/10, with no guaranteed Lomita Magnet note. Partial updates only. Sold 9/29/2026 for $863,000 and was relisted."
      },
      {
        "links": [
          {
            "label": "3345 View Ridge Dr, LB 90804",
            "href": "https://www.zillow.com/homedetails/3345-View-Ridge-Dr-Long-Beach-CA-90804/95699639_zpid/"
          }
        ],
        "price": "$1,095,000",
        "listed": "2 days",
        "result": "Near-miss",
        "note": "Detached 2012 home, 4/3 with 3 full baths, but in gated Aubry at Alamitos Ridge (HOA $224, common-area lot) with a small backyard."
      },
      {
        "links": [
          {
            "label": "1052 Chestnut Ave, LB 90813",
            "href": "https://www.zillow.com/homedetails/1052-Chestnut-Ave-Long-Beach-CA-90813/21235837_zpid/"
          }
        ],
        "price": "$950,000",
        "listed": "2 days",
        "result": "Near-miss",
        "note": "MLS type duplex (1906 Victorian + rear apartment)."
      },
      {
        "links": [
          {
            "label": "361 E 53rd St, LB 90805",
            "href": "https://www.zillow.com/homedetails/361-E-53rd-St-Long-Beach-CA-90805/21155760_zpid/"
          }
        ],
        "price": "$699,000",
        "listed": "3 days",
        "result": "Near-miss",
        "note": "2.5 baths; 3,005 sf lot. School not checked."
      },
      {
        "links": [
          {
            "label": "1520 W 215th St, Torrance 90501",
            "href": "https://www.redfin.com/CA/Torrance/1520-W-215th-St-90501/home/7648627"
          }
        ],
        "price": "$1,458,000",
        "listed": "Redfin only",
        "result": "Near-miss",
        "note": "Not on Zillow. MLS type triplex: front 3-bd house + JADU + rear ADU. LAUSD Halldale 9."
      },
      {
        "links": [
          {
            "label": "6816 Cerritos Ave, LB 90805",
            "href": "https://www.redfin.com/CA/Long-Beach/6816-Cerritos-Ave-90805/home/7508008"
          }
        ],
        "price": "$899,999",
        "listed": "Redfin only",
        "result": "Near-miss",
        "note": "No Zillow page found. Remodeled 3/2 plus a brand-new attached ADU. Official 7+ elementary could not be confirmed; Redfin lists Grant Elementary at 4/10."
      }
    ],
    "notVetted": "Not vetted: the three “Residence 1/2/3 Plan, Cabrilla at Ponte Vista” builder cards ($882k–$907k), which have no street address.",
    "qualifyingIntro": "These were already on the market. They newly clear the filters because of this week’s ADU and attached-suite rules. After the weighted score, 211 N Western Ave is #8. Daggett and El Progreso rank below the Top 10.",
    "qualifying": [
      {
        "links": [
          {
            "label": "5451 E Daggett St, LB 90815",
            "href": "https://www.zillow.com/homedetails/5451-E-Daggett-St-Long-Beach-CA-90815/21203274_zpid/"
          }
        ],
        "price": "$1,398,000",
        "note": "Main house 3 bd / 2 ba, 1,832 sf, plus a permitted detached 423 sf ADU (2020) with kitchenette, full bath, private entrance, and mini-split. Bixby 8. Now passes."
      },
      {
        "links": [
          {
            "label": "6702 E El Progreso St, LB 90815",
            "href": "https://www.zillow.com/homedetails/6702-E-El-Progreso-St-Long-Beach-CA-90815/21207782_zpid/"
          }
        ],
        "price": "$1,495,000",
        "note": "Remodeled 3 bd / 2 ba main house plus an attached permitted 499 sf 1/1 ADU built 9/2024, with its own address and entrance. Emerson Parkside 8. Now passes. At the price cap."
      },
      {
        "links": [
          {
            "label": "211 N Western Ave, San Pedro 90732",
            "href": "https://www.zillow.com/homedetails/211-N-Western-Ave-San-Pedro-CA-90732/21350738_zpid/"
          }
        ],
        "price": "$1,079,000",
        "note": "Remodeled 3 bd / 2 ba main house plus an attached 1/1 in-law suite with its own entrance. Official Bandini Street 8. Now passes, and the weighted score ranks it #8. Busy Western Ave is a red flag and is already docked in the space score."
      }
    ]
  },
  "priceChanges": [
    {
      "links": [
        {
          "label": "354 E Carson St",
          "href": "https://www.zillow.com/homedetails/354-E-Carson-St-Long-Beach-CA-90807/21161137_zpid/"
        }
      ],
      "from": "$1,485,000",
      "to": "$1,450,000",
      "delta": "−$35,000",
      "when": "Nov 20",
      "note": ""
    },
    {
      "links": [
        {
          "label": "635 Edith Way",
          "href": "https://www.zillow.com/homedetails/635-Edith-Way-Long-Beach-CA-90807/21161838_zpid/"
        }
      ],
      "from": "$1,220,000",
      "to": "$1,199,999",
      "delta": "−$20,001",
      "when": "Nov 19",
      "note": ""
    },
    {
      "links": [
        {
          "label": "5451 E Daggett St",
          "href": "https://www.zillow.com/homedetails/5451-E-Daggett-St-Long-Beach-CA-90815/21203274_zpid/"
        }
      ],
      "from": "$1,399,000",
      "to": "$1,398,000",
      "delta": "−$1,000",
      "when": "",
      "note": ""
    },
    {
      "links": [
        {
          "label": "2033 W Burnett St"
        }
      ],
      "from": "$839,900",
      "to": "$835,988",
      "delta": "",
      "when": "",
      "note": "Still fails on school."
    }
  ],
  "priceChangeNote": "No other carried-over home changed price. Drops were checked against last week’s prices.",
  "statusChanges": [
    {
      "title": "727 W Hill St, LB 90806",
      "body": "Failed on school. The Zillow page now shows only a Zestimate, so it is off-market. The digest does not include a listing URL."
    },
    {
      "title": "2298 Webster Ave",
      "body": "Failed, Garfield 5/10. Zillow now shows it for rent at $8,500/mo, while Redfin still shows it for sale at $900,000. The status conflicts; either way it fails on school. The digest does not include a listing URL."
    },
    {
      "title": "2470 Webster Ave",
      "body": "Failed, Garfield 5/10. Still for sale at $949,000, but reclassified as a triplex (being converted to three units), which is why it left the single-family search. The digest does not include a listing URL."
    },
    {
      "title": "2922 Radnor Ave and 4000 Marion Way",
      "body": "2922 Radnor Ave is no longer a status conflict: Zillow now shows it RECENTLY_SOLD at $895,000 with no garage, and it is excluded under the 2-car garage rule. 4000 Marion Way remains off Zillow and Active on CRMLS (Nov 21) at $1,265,000; it still qualifies (2-car garage, gated-HOA penalty applied).",
      "links": [
        {
          "label": "2922 Radnor Ave",
          "href": "https://www.redfin.com/CA/Long-Beach/2922-Radnor-Ave-90815/home/7582394"
        },
        {
          "label": "4000 Marion Way",
          "href": "https://www.redfin.com/CA/Long-Beach/4000-Marion-Way-90807/home/7526110"
        }
      ]
    },
    {
      "title": "2037 245th St and 2126 W Rockinghorse Rd",
      "body": "Both still show as for sale on their Zillow pages, so this looks like a gap in the extract. 245th St ($1,375,000) stays qualifying. Rockinghorse ($1,229,000) moves to near-miss because its school assignment was never officially verified.",
      "links": [
        {
          "label": "2037 245th St",
          "href": "https://www.zillow.com/homedetails/2037-245th-St-Lomita-CA-90717/21280953_zpid/"
        },
        {
          "label": "2126 W Rockinghorse Rd",
          "href": "https://www.zillow.com/homedetails/2126-W-Rockinghorse-Rd-Rancho-Palos-Verdes-CA-90275/21346126_zpid/"
        }
      ]
    }
  ],
  "corrections": [
    {
      "title": "2.5-bath corrections",
      "body": "18031 Gramercy Pl, 658 W 7th St, 954 W 6th St, 627 S Meyler St, 330 Ultimo Ave, and 1724 Freeport Ter were wrongly passed last week. This week’s check also caught 944 W Sepulveda St (remarks: “4-bed, 2.5-bath”) and 6926 E Peabody St (1 full + 1 ¾ + 1 half, only two baths with showers). All eight were rechecked for a real ADU. None has an existing ADU. 944 W Sepulveda has a downstairs suite described as a potential ADU conversion only. They stay near-misses."
    },
    {
      "title": "ADU rule",
      "body": "6702 E El Progreso St (3/2 + 1/1 attached ADU) and 5451 E Daggett St (3/2 + detached ADU) now pass. 4437 Keever Ave is a highlighted near-miss pending an official school check."
    },
    {
      "title": "Attached in-law suite",
      "body": "An attached in-law suite with its own entrance counts if it has a bedroom and its own bath. A kitchen is not required. 211 N Western Ave now passes (main 3/2 remodeled + 1/1 suite, official Bandini 8, front and back yards). The weighted score ranks it #8. Busy Western Ave is a red flag and is already docked in the space score. 6816 Cerritos Ave still fails: an official 7+ school could not be confirmed (Redfin assigned Grant 4)."
    },
    {
      "title": "Zillow 2-bath pass",
      "body": "162 unique Zillow 3+ / under-3-bath house listings at or under $1.5M were diffed against the Redfin 2-bath work. No new passes from that pass. Added near-misses: 1546 W 223rd St and 261 Wisconsin Ave."
    },
    {
      "title": "Kitchen not required in the extra unit",
      "body": "An ADU, guest house, or back unit does not need a kitchen if it has a bedroom and its own bath. A full recheck found no new full-criteria pass. 261 Wisconsin Ave was the only home previously downgraded for a missing kitchen; it still fails because the main house is 3/1.5. 6236 W 77th St was treated as a future/incomplete ADU. Even counting its detached guest house, it fails official Westport Heights 5 and a dated interior."
    },
    {
      "title": "Not a traditional SFR with a yard",
      "body": "The Ponte Vista / Point Vista cluster — 1638 Hornet, 27634 Rockcrest, 1682 Yorktown, 1642 W Saratoga, and 27520 Dayton — are gated-HOA “detached townhome” products on 1,000–3,421 sf lots (HOA $215–$260). 6068 Avenida de Castillo is in Bixby Village, with a $747/mo HOA and a 3,285 sf lot. 373 Gladys Ave is two homes on one lot."
    },
    {
      "title": "Interior not relatively modern",
      "body": "2755 Nipomo Ave (“great bones… potential”), 349 Winslow Ave (“bring your vision”), 2335 Carfax Ave (short sale, sold as-is), and 3934 California Ave (fresh paint, 20-year-old roof; no kitchen or bath remodel described)."
    },
    {
      "title": "1342 E Wesley Dr",
      "body": "Tenant-occupied, sold subject to the existing tenancy, and the remarks don’t describe an updated interior. Now a near-miss."
    },
    {
      "title": "1310 W 1st St",
      "body": "3 full baths confirmed, but the 2,774 sf lot with a rear garage likely leaves no real backyard. Now a near-miss."
    }
  ],
  "nearMisses": [
    {
      "kind": "table",
      "title": "Fails strict 3-bath rule",
      "intro": "Rechecked for a real ADU. None of the eight correction addresses has an existing ADU. 944 W Sepulveda’s downstairs suite is described as a potential ADU conversion only.",
      "rows": [
        {
          "homes": [
            {
              "label": "1958 Avenida Feliciano, RPV 90275",
              "href": "https://www.zillow.com/homedetails/1958-Avenida-Feliciano-Rancho-Palos-Verdes-CA-90275/21347582_zpid/"
            }
          ],
          "price": "$1,450,000",
          "school": "LAUSD RSI: Taper Ave 8 assigned (1–5); Eastview PVPUSD option per listing. 23.7 / 34–44",
          "why": "2 full + 1 half (2.5). Otherwise strong: upgraded single-level home, new roof and stucco, large private yard, Lynx BBQ, central AC. Coming soon; open Sun Dec 6, 1–4 PM.",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "18031 Gramercy Pl, Torrance 90504",
              "href": "https://www.zillow.com/homedetails/18031-Gramercy-Pl-Torrance-CA-90504/20376419_zpid/"
            }
          ],
          "price": "$1,050,000",
          "school": "Arlington 9 · 9.5 / 15–22",
          "why": "Correction: 2.5 baths."
        },
        {
          "homes": [
            {
              "label": "658 W 7th St, San Pedro 90731",
              "href": "https://www.zillow.com/homedetails/658-W-7th-St-San-Pedro-CA-90731/2058017609_zpid/"
            }
          ],
          "price": "$749,000",
          "school": "Cabrillo Ave 9 · 22.1 / 35–45",
          "why": "Correction: 2.5 baths."
        },
        {
          "homes": [
            {
              "label": "954 W 6th St, San Pedro 90731",
              "href": "https://www.zillow.com/homedetails/954-W-6th-St-San-Pedro-CA-90731/21306849_zpid/"
            }
          ],
          "price": "$1,100,000",
          "school": "Cabrillo Ave 9 · 22.5 / 35–45",
          "why": "Correction: 2.5 baths."
        },
        {
          "homes": [
            {
              "label": "627 S Meyler St, San Pedro 90731",
              "href": "https://www.zillow.com/homedetails/627-S-Meyler-St-San-Pedro-CA-90731/21306886_zpid/"
            }
          ],
          "price": "$999,000",
          "school": "Cabrillo Ave 9 · 22.5 / 35–45",
          "why": "Correction: 2.5 baths."
        },
        {
          "homes": [
            {
              "label": "330 Ultimo Ave, LB 90814",
              "href": "https://www.zillow.com/homedetails/330-Ultimo-Ave-Long-Beach-CA-90814/21218525_zpid/"
            }
          ],
          "price": "$1,365,000",
          "school": "Lowell 7 · 28.8 / 44–54",
          "why": "Correction: 2.5 baths."
        },
        {
          "homes": [
            {
              "label": "1724 Freeport Ter, San Pedro 90732",
              "href": "https://www.zillow.com/homedetails/1724-Freeport-Ter-San-Pedro-CA-90732/21310537_zpid/"
            }
          ],
          "price": "$970,000",
          "school": "7th St Magnet 9 (Choices) · 26.1 / 38–48",
          "why": "Correction: 2.5 baths (also $200 HOA, 3,000 sf lot)."
        },
        {
          "homes": [
            {
              "label": "944 W Sepulveda St, San Pedro 90731",
              "href": "https://www.zillow.com/homedetails/944-W-Sepulveda-St-San-Pedro-CA-90731/21305276_zpid/"
            }
          ],
          "price": "$800,000",
          "school": "Bandini 8 · 22.6 / 35–45",
          "why": "Correction: 2.5 baths per listing remarks."
        },
        {
          "homes": [
            {
              "label": "6926 E Peabody St, LB 90808",
              "href": "https://www.zillow.com/homedetails/6926-E-Peabody-St-Long-Beach-CA-90808/21135998_zpid/"
            }
          ],
          "price": "$1,215,000",
          "school": "Newcomb 10 · 28.3 / 43–53",
          "why": "Correction: 1 full + 1 ¾ + 1 half."
        },
        {
          "homes": [
            {
              "label": "25526 Baycrest Ct, Harbor City 90710",
              "href": "https://www.zillow.com/homedetails/25526-Baycrest-Ct-Harbor-City-CA-90710/465671364_zpid/"
            }
          ],
          "price": "$599,000",
          "school": "not checked · 19.2 / 29–39",
          "why": "2.5 baths; gated Harbor Village HOA ($215); “needs TLC.”",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "361 E 53rd St, LB 90805",
              "href": "https://www.zillow.com/homedetails/361-E-53rd-St-Long-Beach-CA-90805/21155760_zpid/"
            }
          ],
          "price": "$699,000",
          "school": "not checked · 22.4 / 32–42",
          "why": "2.5 baths; 3,005 sf lot.",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "1444 Plaza Del Amo, Torrance 90501",
              "href": "https://www.zillow.com/homedetails/1444-Plaza-Del-Amo-Torrance-CA-90501/466084378_zpid/"
            }
          ],
          "price": "$820,000",
          "school": "not checked · 14.9 / 25–35",
          "why": "2.5 baths; 2023 HOA community (South Bay Village), 1,833 sf lot."
        },
        {
          "homes": [
            {
              "label": "1390 260th St, Harbor City 90710",
              "href": "https://www.zillow.com/homedetails/1390-260th-St-Harbor-City-CA-90710/68964226_zpid/"
            }
          ],
          "price": "$869,000",
          "school": "not checked · 20.0 / 30–40",
          "why": "2.5 baths; gated HOA ($150)."
        },
        {
          "homes": [
            {
              "label": "243 E Home St, LB 90805",
              "href": "https://www.zillow.com/homedetails/243-E-Home-St-Long-Beach-CA-90805/21156319_zpid/"
            }
          ],
          "price": "$749,999",
          "school": "not checked · 21.4 / 31–41",
          "why": "2.5 baths; 1,856 sf lot."
        }
      ]
    },
    {
      "kind": "callout",
      "title": "Highlighted near-miss: 4437 Keever Ave",
      "paragraphs": [
        "Would likely rank in the Top 5 if its official school is 7+.",
        "4437 Keever Ave, LB 90807 is back on the market (Redfin remarks updated Nov 20 after an earlier escrow). $999,995. Main house about 4 bd / 2 ba. Detached ~400 sf studio ADU with its own kitchen, bathroom, laundry, and private patio. $400k+ renovation (quartz kitchen, LVP, new windows, updated primary bath). Front and back yards. 5,940 sf lot. Off-peak 23.9 min / rush est. 39–49 min.",
        "Broker/ATTOM sites say Longfellow 9, but that is unofficial. The official LBUSD locator still requires a sign-in, so it does not pass until the assignment is confirmed. If it is Barton (4/10) instead, it fails."
      ],
      "links": [
        {
          "label": "4437 Keever Ave, LB 90807",
          "href": "https://www.zillow.com/homedetails/4437-Keever-Ave-Long-Beach-CA-90807/21159238_zpid/"
        }
      ]
    },
    {
      "kind": "prose",
      "title": "Zillow 2-bath pass",
      "paragraphs": [
        "The 162-listing Zillow extract (3+ beds, under 3 baths, house type, $1.5M max, target ZIPs) was compared with the Redfin 2-bath pass. 143 addresses already overlapped (110 already reviewed; 33 previously empty Redfin pages were retried, and 32 then returned remarks). 19 were Zillow-only and were screened from broker or MLS remarks. ADU status was determined for all 162. That pass added no full-criteria home.",
        "A later attached-suite clarification added 211 N Western Ave. The unweighted Top 5 was unchanged at that point. The later weighted score ranks Western #8. A later clarification that a guest house does not need a kitchen does not change 261 Wisconsin Ave (the main house is 3/1.5) and does not add a new pass.",
        "Other Zillow-only homes were dropped because they had no existing ADU, only ADU potential, or were duplexes or two homes on a lot, including 1035 Ohio Ave, 1535 W 224th St, and 2016 248th St. The digest does not include listing URLs for those three."
      ]
    },
    {
      "kind": "table",
      "title": "Real ADU or suite, but still a near-miss",
      "intro": "The extra unit is real. The home still fails on the main house, the property type, the school, or the condition.",
      "rows": [
        {
          "homes": [
            {
              "label": "6816 Cerritos Ave, LB 90805",
              "href": "https://www.redfin.com/CA/Long-Beach/6816-Cerritos-Ave-90805/home/7508008"
            }
          ],
          "price": "$899,999",
          "school": "Official LBUSD not confirmed; Redfin assigned Grant 4 · 20.3 / 30–40",
          "why": "Redfin; no Zillow page found. Remodeled 3/2 main house plus a brand-new attached ADU / in-law unit (~400 sf, own systems). The attached unit would now count, but it does not pass without a confirmed official elementary of 7+."
        },
        {
          "homes": [
            {
              "label": "6147 Gundry Ave, LB 90805",
              "href": "https://www.zillow.com/homedetails/6147-Gundry-Ave-Long-Beach-CA-90805/21148596_zpid/"
            }
          ],
          "price": "$975,000",
          "school": "LBUSD not checked",
          "why": "Main house is only 2 bd / 2 ba, plus a 2021 ADU and a 2023 JADU, both rented. Fails the 3-bed main-house minimum."
        },
        {
          "homes": [
            {
              "label": "474 E Adair St, LB 90805",
              "href": "https://www.zillow.com/homedetails/474-E-Adair-St-Long-Beach-CA-90805/21151764_zpid/"
            }
          ],
          "price": "$710,000",
          "school": "LBUSD not checked · ~21 / 31–41",
          "why": "Has a detached ADU with its own kitchen and full bath, but the main house “needs updates” / “make it your own.” Fails the relatively modern interior rule. School unverified."
        },
        {
          "homes": [
            {
              "label": "1532 W 221st St, Torrance 90501",
              "href": "https://www.zillow.com/homedetails/1532-W-221st-St-Torrance-CA-90501/21265813_zpid/"
            }
          ],
          "price": "$1,255,000",
          "school": "LAUSD: Meyler St (not rated here) · 14.2 / 18–24",
          "why": "Front house is only 2/2 + 2025 rear ADU 3/2: two homes on one lot. Fails the 3-bed main-house minimum."
        },
        {
          "homes": [
            {
              "label": "373 Gladys Ave, LB 90814",
              "href": "https://www.zillow.com/homedetails/373-Gladys-Ave-Long-Beach-CA-90814/21225123_zpid/"
            }
          ],
          "price": "$1,249,000",
          "school": "Mann 7 · 28.6 / 44–54",
          "why": "1918 bungalow + attached 2/2 ADU with its own address and no interior connection (two homes on one lot). Combined 5/3 implies the main house is about 3/1, which fails the 2-bath main-house minimum."
        },
        {
          "homes": [
            {
              "label": "1028 E 10th St, LB 90813",
              "href": "https://www.zillow.com/homedetails/1028-E-10th-St-Long-Beach-CA-90813/21237435_zpid/"
            }
          ],
          "price": "$849,900",
          "school": "ATTOM: Lincoln 7 (unofficial) · not OSRM’d this pass",
          "why": "New this search: remodeled 2 bd / 1 ba main house + legal attached 384 sf 1/1 ADU on a 7,529 sf lot. Fails the 3-bed / 2-bath main-house minimum. Open today 12–3 PM."
        },
        {
          "homes": [
            {
              "label": "3353 W 168th St, Torrance 90504",
              "href": "https://www.redfin.com/CA/Torrance/3353-W-168th-St-90504/home/6586290"
            }
          ],
          "price": "$1,299,000",
          "school": "TUSD not officially checked this pass",
          "why": "New this search: remodeled 3/1 main house + separate 1/1 ADU, each with a private entrance. Fails the 2-bath main-house minimum."
        },
        {
          "homes": [
            {
              "label": "5592 W 82nd St, Los Angeles 90045",
              "href": "https://www.redfin.com/CA/Los-Angeles/5592-W-82nd-St-90045/home/6640013"
            }
          ],
          "price": "$1,299,000",
          "school": "Official LAUSD: Westport Heights 5 · not OSRM’d",
          "why": "New this search: remodeled 2/1 main house + detached 450 sf ADU with its own address. Fails beds, baths, and school."
        },
        {
          "homes": [
            {
              "label": "2641 S Kerckhoff Ave, San Pedro 90731",
              "href": "https://www.redfin.com/CA/San-Pedro/2641-S-Kerckhoff-Ave-90731/home/7695832"
            }
          ],
          "price": "$1,100,000",
          "school": "Official LAUSD: Leland Street 6",
          "why": "New this search: fully rebuilt front house is 2/1; 2024 garage ADU is 2/1. Both units tenant-occupied. Fails main-house beds/baths and school."
        },
        {
          "homes": [
            {
              "label": "2151 E Spaulding Ct, LB 90804",
              "href": "https://www.zillow.com/homedetails/2151-E-Spaulding-Ct-Long-Beach-CA-90804/21222116_zpid/"
            }
          ],
          "price": "$799,000",
          "school": "previously unverified · tiny",
          "why": "Main level is only 2/2; upstairs is a permitted ADU/JADU. Fails the 3-bed main-house minimum."
        },
        {
          "homes": [
            {
              "label": "4235 Artesia Blvd, Torrance 90504",
              "href": "https://www.redfin.com/CA/Torrance/4235-Artesia-Blvd-90504/home/6576472"
            }
          ],
          "price": "$1,399,000",
          "school": "Evelyn Carr 8 unofficial (TUSD locator unavailable) · 7.6 / 12–18",
          "why": "4 bd / 2.5 ba main house + permitted ~400 sf ADU by the garage. Could meet the ADU rule (two full baths in the main house) if the official school is 7+ and the interior checks out. Remarks are thin; busy arterial; empty pool under a deck. Kept as a near-miss."
        },
        {
          "homes": [
            {
              "label": "5447 Lime Ave, LB 90805",
              "href": "https://www.redfin.com/CA/Long-Beach/5447-Lime-Ave-90805/home/7515460"
            }
          ],
          "price": "$899,000",
          "school": "ATTOM: Harte / Bret Harte 6 (unofficial)",
          "why": "3/2 main + 2025 detached 1/1 ADU + a rear studio. Active under contract. Even if it were still free, the unofficial school is 6, and three units on one lot is a type concern."
        },
        {
          "homes": [
            {
              "label": "4722 Pepperwood Ave, LB 90808",
              "href": "https://www.coldwellbankerhomes.com/ca/long-beach/4722-pepperwood-ave/pid_74525850/"
            }
          ],
          "price": "$1,215,000",
          "school": "ATTOM: Twain 6 (unofficial)",
          "why": "Coming soon (showings were to start Nov 13); not yet in today’s Redfin for-sale results. 4/2 main + a detached guest house/ADU with a bath, connected to the garage. If Twain is right, it fails school when it lists. Recheck if the listing goes live."
        },
        {
          "homes": [
            {
              "label": "1546 W 223rd St, Torrance 90501",
              "href": "https://www.zillow.com/homedetails/1546-W-223rd-St-Torrance-CA-90501/21266024_zpid/"
            }
          ],
          "price": "$1,000,000",
          "school": "not fully vetted (fails main-house beds/baths)",
          "why": "Zillow shows 3/2, but remarks split it as a front house 2 bd / 1 ba plus a separate legal permitted ADU / back house at 1548 W 223rd (1/1). Fails the 3-bed / 2-bath main-house minimum. Found on the empty-remarks retry."
        },
        {
          "homes": [
            {
              "label": "261 Wisconsin Ave, LB 90803",
              "href": "https://www.zillow.com/homedetails/261-Wisconsin-Ave-Long-Beach-CA-90803/21229583_zpid/"
            }
          ],
          "price": "$1,380,000",
          "school": "not fully vetted (fails main-house baths)",
          "why": "1919 Bluff Heights Craftsman. Zillow shows 4/2, but the main house is 3 bd / 1 full ba + 1 half ba (3/1.5). A permitted 690 sf detached guest house (2003) has a bedroom, bathroom, walk-in closet, and two-car garage. A missing kitchen is not a problem. It still fails the 2-full-bath main-house minimum. Trust listing; cosmetic repairs. Zillow-only in this pass."
        },
        {
          "homes": [
            {
              "label": "6236 W 77th St, Los Angeles 90045",
              "href": "https://www.zillow.com/homedetails/6236-W-77th-St-Los-Angeles-CA-90045/20379807_zpid/"
            }
          ],
          "price": "$1,399,000",
          "school": "Official LAUSD: Westport Heights 5",
          "why": "3/2 main (1,708 sf) plus a ~450 sf permitted bonus room. Redfin features list a detached guest house with a bath and fireplace; remarks frame it as a future ADU / guest quarters and do not mention a kitchen. Even counting that unit, it fails: official school is 5, and the interior is only fresh paint / would-benefit-from-updating / bring-your-vision."
        }
      ]
    },
    {
      "kind": "table",
      "title": "Not a single-family home with its own yard",
      "intro": "PUD, multi-unit, or attached. Small-lot gated products fail even when the building is detached.",
      "rows": [
        {
          "homes": [
            {
              "label": "21721 S Normandie Ave, Torrance 90501",
              "href": "https://www.zillow.com/homedetails/21721-S-Normandie-Ave-Torrance-CA-90501/250225571_zpid/"
            }
          ],
          "price": "$1,298,888",
          "school": "LAUSD: Halldale 9 · OSRM not computed (address didn’t geocode); nearby 90501 homes run 13–15 min",
          "why": "2020 modern home, but in Pacific Bougainvillea HOA ($114), 4,162 sf lot, patio only, three stories. Closest thing to a pass among the new listings if you’d relax the PUD rule."
        },
        {
          "homes": [
            {
              "label": "1520 W 215th St, Torrance 90501",
              "href": "https://www.redfin.com/CA/Torrance/1520-W-215th-St-90501/home/7648627"
            }
          ],
          "price": "$1,458,000",
          "school": "LAUSD: Halldale 9 · 13.4 / 17–23",
          "why": "Redfin only. MLS type triplex: front 3-bd house + JADU + rear ADU."
        },
        {
          "homes": [
            {
              "label": "3345 View Ridge Dr, LB 90804",
              "href": "https://www.zillow.com/homedetails/3345-View-Ridge-Dr-Long-Beach-CA-90804/95699639_zpid/"
            }
          ],
          "price": "$1,095,000",
          "school": "not checked · 24.1 / 39–49",
          "why": "Detached 2012 home, 4/3 with 3 full baths, but in gated Aubry at Alamitos Ridge (HOA $224, common-area lot) with a small backyard.",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "1052 Chestnut Ave, LB 90813",
              "href": "https://www.zillow.com/homedetails/1052-Chestnut-Ave-Long-Beach-CA-90813/21235837_zpid/"
            }
          ],
          "price": "$950,000",
          "school": "not checked · 24.4 / 39–49",
          "why": "MLS type duplex (1906 Victorian + rear apartment).",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "250 W Ridgewood, LB 90805",
              "href": "https://www.zillow.com/homedetails/250-W-Ridgewood-Long-Beach-CA-90805/302798295_zpid/"
            },
            {
              "label": "4693 Holly Ave, LB 90805",
              "href": "https://www.zillow.com/homedetails/4693-Holly-Ave-Long-Beach-CA-90805/302798409_zpid/"
            }
          ],
          "price": "$1,049,999 · $949,999",
          "school": "not checked · 21.3 · 20.8",
          "why": "Gated Riverdale-type PUDs (HOA $269 / $245; lots 2,937 / 2,410 sf)."
        },
        {
          "homes": [
            {
              "label": "1542 W 223rd St, Torrance 90501",
              "href": "https://www.zillow.com/homedetails/1542-W-223rd-St-Torrance-CA-90501/21266025_zpid/"
            },
            {
              "label": "6147 Gundry Ave, LB 90805",
              "href": "https://www.zillow.com/homedetails/6147-Gundry-Ave-Long-Beach-CA-90805/21148596_zpid/"
            },
            {
              "label": "474 E Adair St, LB 90805",
              "href": "https://www.zillow.com/homedetails/474-E-Adair-St-Long-Beach-CA-90805/21151764_zpid/"
            }
          ],
          "price": "$1,100,000 · $975,000 · $710,000",
          "school": "not checked",
          "why": "3 rentals / main 2-2 + ADU + JADU / main + ADU needing updates."
        },
        {
          "homes": [
            {
              "label": "1638 Hornet",
              "href": "https://www.zillow.com/homedetails/1638-Hornet-Dr-San-Pedro-CA-90732/466050471_zpid/"
            },
            {
              "label": "27634 Rockcrest",
              "href": "https://www.zillow.com/homedetails/27634-Rockcrest-Rd-San-Pedro-CA-90732/2068619341_zpid/"
            },
            {
              "label": "1682 Yorktown",
              "href": "https://www.zillow.com/homedetails/1682-Yorktown-Ln-San-Pedro-CA-90732/464418183_zpid/"
            },
            {
              "label": "1642 W Saratoga",
              "href": "https://www.zillow.com/homedetails/1642-W-Saratoga-Ln-San-Pedro-CA-90732/444619522_zpid/"
            },
            {
              "label": "27520 Dayton",
              "href": "https://www.zillow.com/homedetails/27520-Dayton-Ave-San-Pedro-CA-90732/2058017089_zpid/"
            }
          ],
          "price": "$890k–$1.499M",
          "school": "Taper 8 · 22.5–22.8 / 35–45",
          "why": "Ponte Vista / Point Vista. Gated-HOA “detached townhomes,” new construction (2022–24); patio, no real yard. Lots 1,000–3,421 sf, HOA $215–$260."
        },
        {
          "homes": [
            {
              "label": "6068 Avenida de Castillo, LB 90803",
              "href": "https://www.zillow.com/homedetails/6068-Avenida-De-Castillo-Long-Beach-CA-90803/21210666_zpid/"
            }
          ],
          "price": "$1,298,000",
          "school": "Kettering 8 · 29.6 / 45–55",
          "why": "Bixby Village HOA $747/mo, 3,285 sf lot."
        },
        {
          "homes": [
            {
              "label": "373 Gladys Ave, LB 90814",
              "href": "https://www.zillow.com/homedetails/373-Gladys-Ave-Long-Beach-CA-90814/21225123_zpid/"
            }
          ],
          "price": "$1,249,000",
          "school": "Mann 7 · 28.6 / 44–54",
          "why": "Two homes on one lot (1918 bungalow + 2/2 ADU)."
        },
        {
          "homes": [
            {
              "label": "Carry-overs: 18508 Kingsdale (duplex), 2815 Sepulveda Unit 5 (PUD), 2301 Marshallfield #A (two-on-a-lot), 3938 E 5th St (two-on-a-lot), 776 W 1st St (duplex + NOD), 4235 Artesia Blvd (multi-family/ADU), 2470 Webster (now a triplex)"
            }
          ],
          "price": "",
          "school": "",
          "why": "Unchanged from last week."
        }
      ]
    },
    {
      "kind": "table",
      "title": "Interior, condition, or occupancy",
      "rows": [
        {
          "homes": [
            {
              "label": "2755 Nipomo Ave, LB 90815",
              "href": "https://www.zillow.com/homedetails/2755-Nipomo-Ave-Long-Beach-CA-90815/21208563_zpid/"
            }
          ],
          "price": "$1,100,000",
          "school": "Emerson Parkside 8 · 26.0 / 41–51",
          "why": "“Great bones… potential”; laminate floors; no remodel described. Great yards."
        },
        {
          "homes": [
            {
              "label": "2335 Carfax Ave, LB 90815",
              "href": "https://www.zillow.com/homedetails/2335-Carfax-Ave-Long-Beach-CA-90815/21206375_zpid/"
            }
          ],
          "price": "$899,999",
          "school": "Prisk 10 · 25.3 / 40–50",
          "why": "Short sale, sold as-is, subject to lender approval."
        },
        {
          "homes": [
            {
              "label": "349 Winslow Ave, LB 90814",
              "href": "https://www.zillow.com/homedetails/349-Winslow-Ave-Long-Beach-CA-90814/21218510_zpid/"
            }
          ],
          "price": "$1,225,000",
          "school": "Lowell 7 · 28.3 / 43–53",
          "why": "“Original charm… bring your vision.”"
        },
        {
          "homes": [
            {
              "label": "3934 California Ave, LB 90807",
              "href": "https://www.zillow.com/homedetails/3934-California-Ave-Long-Beach-CA-90807/21160695_zpid/"
            }
          ],
          "price": "$1,259,000",
          "school": "Longfellow 9 · 22.1 / 35–45",
          "why": "Only fresh paint and partial PEX plumbing; no kitchen or bath remodel described. Borderline; worth a photo check."
        },
        {
          "homes": [
            {
              "label": "1342 E Wesley Dr, LB 90806",
              "href": "https://www.zillow.com/homedetails/1342-E-Wesley-Dr-Long-Beach-CA-90806/21197242_zpid/"
            }
          ],
          "price": "$1,199,000",
          "school": "Alvarado 9 · 23.8 / 36–46",
          "why": "Tenant-occupied, sold subject to the lease; interior not described as updated."
        },
        {
          "homes": [
            {
              "label": "100 W Barclay St, LB 90805",
              "href": "https://www.zillow.com/homedetails/100-W-Barclay-St-Long-Beach-CA-90805/21244301_zpid/"
            },
            {
              "label": "41 W Barclay St, LB 90805",
              "href": "https://www.zillow.com/homedetails/41-W-Barclay-St-Long-Beach-CA-90805/21244224_zpid/"
            }
          ],
          "price": "$740,000 · $750,000",
          "school": "not checked",
          "why": "“Needs TLC” (care-facility use) / foreclosure, tenant-occupied, as-is."
        },
        {
          "homes": [
            {
              "label": "Carry-overs: 2831 Dalemead (fixer), 2011 W Crestwood (“update, reimagine”), 1134 Goldenrose (cosmetic fixer), 1670 Laraine Cir (remodel unfinished)"
            }
          ],
          "price": "",
          "school": "",
          "why": "Unchanged."
        }
      ]
    },
    {
      "kind": "table",
      "title": "School below 7 or unverified",
      "rows": [
        {
          "homes": [
            {
              "label": "23728 President Ave, Harbor City 90710",
              "href": "https://www.zillow.com/homedetails/23728-President-Ave-Harbor-City-CA-90710/21300050_zpid/"
            }
          ],
          "price": "$899,000",
          "school": "President Avenue Elementary 6/10 · off-peak 16.5 / rush est. 27–37",
          "why": "4/3 · 2,080 sf. The official LAUSD RSI assigns President Avenue Elementary, 6/10, with no guaranteed Lomita Magnet note for this address (unlike the Lomita homes). Partial updates only (new flooring and paint, granite). It sold 9/29/2026 for $863,000 and was relisted.",
          "badges": [
            "New"
          ]
        },
        {
          "homes": [
            {
              "label": "2126 W Rockinghorse Rd, RPV 90275",
              "href": "https://www.zillow.com/homedetails/2126-W-Rockinghorse-Rd-Rancho-Palos-Verdes-CA-90275/21346126_zpid/"
            }
          ],
          "price": "$1,229,000",
          "school": "Unverified. Last week inferred Park Western 10 / Dapplegray 7; neither locator returns this address",
          "why": "As-is trust sale. Still shows for sale on Zillow. Missing from this morning’s extract."
        }
      ],
      "after": [
        "Also below 7 or unverified, without a new listing URL this week: 283 Dockside Ln (address not in RSI), 2151 E Spaulding Ct (Herrera unverified, tiny), 1810 S Leland (6), 1841 S Mesa (4), 662 W 31st (6), 2067 Glentree (5), 4336 W 179th (6), 4143 Center (6), 1071 E 46th (4; now a foreclosure), 2710 Magnolia (6), 2217/1866 San Francisco (5), 2246 Locust (5), 1081 Loma (3), 1800 E Hardwick (4), 90810 cluster (Webster 4, Muir 6, Garfield 5)."
      ]
    },
    {
      "kind": "prose",
      "title": "Off-peak commute over 30 min",
      "paragraphs": [
        "4281 Admirable Dr (32.4), 21 Sweetbay Rd (35.2, plus land movement), 7055 and 7119 Island Village Dr (31.5 / 31.2). These fail the off-peak commute rule. The digest does not include prices or listing URLs for them this week."
      ]
    },
    {
      "kind": "table",
      "title": "Yard",
      "rows": [
        {
          "homes": [
            {
              "label": "1310 W 1st St, San Pedro 90732",
              "href": "https://www.zillow.com/homedetails/1310-W-1st-St-San-Pedro-CA-90732/68994901_zpid/"
            }
          ],
          "price": "$859,000",
          "school": "Bandini 8 · 23.2 / 35–45",
          "why": "3/3 full. Turnkey 2006 build (granite, tile), but the 2,774 sf lot with a rear garage likely leaves no real backyard. Confirm in photos."
        }
      ]
    }
  ],
  "openQuestions": [
    {
      "question": "Is 4000 Marion Way active on Zillow as well as CRMLS?",
      "detail": "Off Zillow, Active on CRMLS (Nov 21) at $1,265,000. The afternoon Redfin recrawl showed a “NEW 46 mins ago” sash, so it may now be clearly active on Redfin. Still confirm Zillow.",
      "links": [
        {
          "label": "4000 Marion Way",
          "href": "https://www.redfin.com/CA/Long-Beach/4000-Marion-Way-90807/home/7526110"
        }
      ]
    },
    {
      "question": "What is the official LBUSD elementary for 4437 Keever Ave?",
      "detail": "Back on the market after an earlier escrow (listing updated Nov 20). $999,995, with a detached studio ADU. Broker and ATTOM sites say Longfellow 9. That is unofficial, and this is the assignment to confirm first. If it is Barton (4/10) instead, the home fails. A 7+ official school would likely put it in the Top 5.",
      "links": [
        {
          "label": "4437 Keever Ave",
          "href": "https://www.zillow.com/homedetails/4437-Keever-Ave-Long-Beach-CA-90807/21159238_zpid/"
        }
      ]
    },
    {
      "question": "What is the official elementary for 6816 Cerritos Ave?",
      "detail": "The remodeled 3/2 main house plus the attached ADU would now count, but only with a confirmed official elementary of 7+. Redfin lists Grant Elementary (4/10) as assigned. Official LBUSD was not confirmed.",
      "links": [
        {
          "label": "6816 Cerritos Ave",
          "href": "https://www.redfin.com/CA/Long-Beach/6816-Cerritos-Ave-90805/home/7508008"
        }
      ]
    },
    {
      "question": "Which of these unofficial school reads, if any, are actually 7+?",
      "detail": "Still unverified: 474 E Adair, 6147 Gundry, 5447 Lime (ATTOM Harte / Bret Harte 6, and Active under contract), 4722 Pepperwood (ATTOM Twain 6, coming soon; showings were to start Nov 13), and 1028 E 10th (ATTOM Lincoln 7, unofficial). 4235 Artesia Blvd has only an unofficial Evelyn Carr 8 because the TUSD locator was behind PowerSchool. None of these pass on the current record.",
      "links": [
        {
          "label": "474 E Adair St",
          "href": "https://www.zillow.com/homedetails/474-E-Adair-St-Long-Beach-CA-90805/21151764_zpid/"
        },
        {
          "label": "6147 Gundry Ave",
          "href": "https://www.zillow.com/homedetails/6147-Gundry-Ave-Long-Beach-CA-90805/21148596_zpid/"
        },
        {
          "label": "5447 Lime Ave",
          "href": "https://www.redfin.com/CA/Long-Beach/5447-Lime-Ave-90805/home/7515460"
        },
        {
          "label": "4722 Pepperwood Ave",
          "href": "https://www.coldwellbankerhomes.com/ca/long-beach/4722-pepperwood-ave/pid_74525850/"
        },
        {
          "label": "1028 E 10th St",
          "href": "https://www.zillow.com/homedetails/1028-E-10th-St-Long-Beach-CA-90813/21237435_zpid/"
        },
        {
          "label": "4235 Artesia Blvd",
          "href": "https://www.redfin.com/CA/Torrance/4235-Artesia-Blvd-90504/home/6576472"
        }
      ]
    },
    {
      "question": "What is the drive time from 21721 S Normandie Ave?",
      "detail": "Census and Nominatim both failed, so OSRM was not computed. Nearby 90501 homes run 13–15 min off-peak. It is the closest thing to a pass among the new listings if the PUD rule were relaxed (Pacific Bougainvillea HOA $114, 4,162 sf lot, patio only).",
      "links": [
        {
          "label": "21721 S Normandie Ave",
          "href": "https://www.zillow.com/homedetails/21721-S-Normandie-Ave-Torrance-CA-90501/250225571_zpid/"
        }
      ]
    },
    {
      "question": "Does 1958 Avenida Feliciano gain a third full bath?",
      "detail": "It is 2 full + 1 half today. A remodel that adds a third full bath is unlikely, and it should be rechecked anyway. Coming soon; open Sun Dec 6, 1–4 PM.",
      "links": [
        {
          "label": "1958 Avenida Feliciano",
          "href": "https://www.zillow.com/homedetails/1958-Avenida-Feliciano-Rancho-Palos-Verdes-CA-90275/21347582_zpid/"
        }
      ]
    },
    {
      "question": "Does 1524 W 5th St have a real yard and an updated interior?",
      "detail": "It qualifies on the hard filters (new, 1 day) via a guaranteed 7th Street Arts Magnet 9 Choices path. Yard layout and finish level were not verified. Check the photos.",
      "links": [
        {
          "label": "1524 W 5th St",
          "href": "https://www.zillow.com/homedetails/1524-W-5th-St-San-Pedro-CA-90732/21351518_zpid/"
        }
      ]
    },
    {
      "question": "Which status conflicts are still open on the next pass?",
      "detail": "2298 Webster Ave is a rental on Zillow ($8,500/mo) and for sale on Redfin ($900,000); it fails Garfield 5/10 either way. 2037 245th St ($1,375,000) and 2126 W Rockinghorse Rd ($1,229,000) are on Zillow but were missing from this morning’s extract. 4437 Keever Ave is back on the market. 4722 Pepperwood Ave should be rechecked if the listing goes live.",
      "links": [
        {
          "label": "2037 245th St",
          "href": "https://www.zillow.com/homedetails/2037-245th-St-Lomita-CA-90717/21280953_zpid/"
        },
        {
          "label": "2126 W Rockinghorse Rd",
          "href": "https://www.zillow.com/homedetails/2126-W-Rockinghorse-Rd-Rancho-Palos-Verdes-CA-90275/21346126_zpid/"
        },
        {
          "label": "4437 Keever Ave",
          "href": "https://www.zillow.com/homedetails/4437-Keever-Ave-Long-Beach-CA-90807/21159238_zpid/"
        },
        {
          "label": "4722 Pepperwood Ave",
          "href": "https://www.coldwellbankerhomes.com/ca/long-beach/4722-pepperwood-ave/pid_74525850/"
        }
      ]
    }
  ],
  "caveat": {
    "title": "Long Beach school assignments are not officially verified this week",
    "paragraphs": [
      "The Long Beach Unified school locator now needs a sign-in, so new Long Beach school assignments are not officially verified.",
      "The locator moved to locator.pea.powerschool.com (StudyID 236516). Its API now requires a Bearer token, so a new Long Beach address needs a manual browser lookup, or a check on lbschools.net. No new Long Beach address was checked. None of the new Long Beach homes needed one: each failed on bath count, home type, or condition first.",
      "Carried-over homes still show last week’s official results (LBUSD DecisionInsite 236516, along with LAUSD RSI, TUSD 85052, PVPUSD, and CCUSD). Those ratings were not re-pulled from the locator this week.",
      "Still unverified, and the one to confirm first: 4437 Keever Ave. Broker and ATTOM sites say Longfellow 9. If the official school is Barton (4/10), it fails. 6816 Cerritos Ave would pass under the attached-suite rule only with a confirmed official 7+; Redfin currently lists Grant 4 as assigned. Also unverified: 474 E Adair, 6147 Gundry, 5447 Lime, 4722 Pepperwood, and 1028 E 10th (Lincoln 7 unofficial). 4235 Artesia Blvd still has only an unofficial Evelyn Carr 8."
    ]
  },
  "weightsNote": "Scores are 0–10. The total weights interior 35%, space 25%, commute 20%, and school 20%. A home in a gated HOA then loses 0.75 points. That applies to 635 Edith Way and 4000 Marion Way (Crown Pointe, $275/mo). No other qualifying home is in a gated HOA. A non-gated fee is not penalized: 6320 W 85th St has Kentwood Guardians, about $23/year. The 2-car garage rule was added Nov 21; it is a hard filter, not part of the score. When two totals match, the higher interior score ranks first, then the lower list price.",
  "top10": [
    {
      "rank": 1,
      "address": "6320 W 85th St, Los Angeles (Westchester) 90045",
      "href": "https://www.zillow.com/homedetails/6320-W-85th-St-Los-Angeles-CA-90045/20381325_zpid/",
      "price": "$1,499,000",
      "bedsBaths": "5 bd / 3 ba",
      "size": "2,038 sf · 6,901 sf lot",
      "score": "7.87",
      "interior": "6.2",
      "space": "6.8",
      "commuteScore": "10.0",
      "schoolScore": "10",
      "school": "Kentwood Elementary",
      "rating": "10/10",
      "schoolNote": "official LAUSD",
      "commute": "11.6 min off-peak / 16–22 min rush",
      "notes": "Now #1 after the 2-car garage rule dropped 731 N Leland Ave. Best school and the shortest commute. The remodeled quartz kitchen is compact, has no island, and is not open to the living room (confirmed in listing photos), so interior is scored clearly below the island / open-concept homes. It has a small non-gated neighborhood HOA (Kentwood Guardians, about $23/year), which is not penalized.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 2,
      "address": "2001 Carfax Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/2001-Carfax-Ave-Long-Beach-CA-90815/21206502_zpid/",
      "price": "$1,495,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,015 sf · 5,820 sf corner lot",
      "score": "7.79",
      "interior": "9.8",
      "space": "6.1",
      "commuteScore": "5.2",
      "schoolScore": "9",
      "school": "Gant",
      "rating": "9/10",
      "schoolNote": "official LBUSD",
      "commute": "25.5 min off-peak / 40–50 min rush",
      "notes": "Highest interior score: Tesoro gut remodel with a large waterfall island (seating) and a vaulted open kitchen/living/dining, confirmed in listing photos. An average-size house at the cap and a longer rush-hour drive keep it just behind #1.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 3,
      "address": "354 E Carson St, Long Beach 90807",
      "href": "https://www.zillow.com/homedetails/354-E-Carson-St-Long-Beach-CA-90807/21161137_zpid/",
      "price": "$1,450,000 (↓ $35,000 on Nov 20)",
      "bedsBaths": "5 bd / 3.5 ba",
      "size": "2,205 sf · 7,000 sf lot",
      "score": "7.74",
      "interior": "7.6",
      "space": "7.6",
      "commuteScore": "6.9",
      "schoolScore": "9",
      "school": "Longfellow",
      "rating": "9/10",
      "schoolNote": "official LBUSD",
      "commute": "21.4 min off-peak / 34–44 min rush",
      "notes": "Beautifully remodeled 1925 single-story on a big lot, with one of the better Long Beach commutes. Official remarks say waterfall quartz but do not explicitly confirm an island.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 4,
      "address": "2037 245th St, Lomita 90717",
      "href": "https://www.zillow.com/homedetails/2037-245th-St-Lomita-CA-90717/21280953_zpid/",
      "price": "$1,375,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "1,932 sf · 5,147 sf lot",
      "score": "7.67",
      "interior": "8.8",
      "space": "5.8",
      "commuteScore": "8.7",
      "schoolScore": "7",
      "school": "Lomita MST Magnet",
      "rating": "7/10",
      "schoolNote": "President Ave 6 assigned; guaranteed magnet, Choices application",
      "commute": "16.9 min off-peak / 27–37 min rush",
      "notes": "Oversized kitchen island and a turnkey remodel, plus one of the shortest drives in the set. Missing from today’s extract, but the Zillow page still showed it active.",
      "hoaPenalty": "—",
      "badges": [
        "Choices"
      ],
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 5,
      "address": "1876 Petaluma Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/1876-Petaluma-Ave-Long-Beach-CA-90815/21207155_zpid/",
      "price": "$1,439,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,411 sf · 6,412 sf lot",
      "score": "7.51",
      "interior": "8.7",
      "space": "7.7",
      "commuteScore": "4.7",
      "schoolScore": "8",
      "school": "Tincher",
      "rating": "8/10",
      "schoolNote": "",
      "commute": "26.7 min off-peak / 42–52 min rush",
      "notes": "Large kitchen island and a top-to-bottom renovation (roof, plumbing, electrical, windows) in a 2,411 sf house. Open concept was not explicitly confirmed. The rush-hour drive is among the longer ones.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 6,
      "address": "1911 El Rey Rd, San Pedro 90732",
      "href": "https://www.zillow.com/homedetails/1911-El-Rey-Rd-San-Pedro-CA-90732/21351410_zpid/",
      "price": "$1,499,000",
      "bedsBaths": "5 bd / 4 ba",
      "size": "3,267 sf · 7,496 sf lot",
      "score": "7.48",
      "interior": "6.0",
      "space": "10.0",
      "commuteScore": "5.4",
      "schoolScore": "9",
      "school": "7th Street Magnet",
      "rating": "9/10",
      "schoolNote": "guaranteed magnet, Choices application",
      "commute": "26.0 min off-peak / 38–48 min rush",
      "notes": "Most living space in the set, at the price cap. Interior is granite/wood, not a documented island or open-concept remodel. MLS lists it as SFR, but it is marketed as “two homes in one.”",
      "hoaPenalty": "—",
      "badges": [
        "Choices"
      ],
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 7,
      "address": "211 N Western Ave, San Pedro 90732",
      "href": "https://www.zillow.com/homedetails/211-N-Western-Ave-San-Pedro-CA-90732/21350738_zpid/",
      "price": "$1,079,000",
      "bedsBaths": "main 3/2 + suite",
      "size": "1,635 sf listed · 7,694 sf lot",
      "score": "7.32",
      "interior": "8.5",
      "space": "6.2",
      "commuteScore": "6.0",
      "schoolScore": "8",
      "school": "Bandini Street",
      "rating": "8/10",
      "schoolNote": "official LAUSD, grades 1–5",
      "commute": "24.0 min off-peak / 36–46 min rush",
      "notes": "Quartz island and an open-concept living/kitchen/dining in a remodeled 3/2, plus a qualifying 1/1 in-law (own entrance, bath, kitchen, laundry) on a 7,694 sf lot. Lowest price in the Top 10. Busy Western Ave is a red flag and is already docked in the space score. Some MLS feeds label it multi-family. Suite is a registered short-term rental (~$2,100/mo). NEW under the attached-suite rule.",
      "hoaPenalty": "—",
      "badges": [
        "ADU rule"
      ],
      "garage": "2-car",
      "openHouse": "none"
    },
    {
      "rank": 8,
      "address": "3482 Iroquois Ave, Long Beach 90808",
      "href": "https://www.zillow.com/homedetails/3482-Iroquois-Ave-Long-Beach-CA-90808/21137499_zpid/",
      "price": "$1,399,000",
      "bedsBaths": "5 bd / 3.5 ba",
      "size": "3,012 sf · 5,584 sf lot",
      "score": "7.24",
      "interior": "7.0",
      "space": "9.8",
      "commuteScore": "4.7",
      "schoolScore": "7",
      "school": "Cubberley K–8",
      "rating": "7/10",
      "schoolNote": "",
      "commute": "27.0 min off-peak / 42–52 min rush",
      "notes": "Strong space (3,012 sf, 5 beds) on a 2011 custom build with paid-off solar. Island and open concept were not confirmed, so interior is middling; school is the minimum 7, and the commute is among the longer ones. Confirm yard depth. Open house Sun 11/22 1-4pm, the only Top 10 open house this weekend.",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "Sun 11/22 1-4pm"
    },
    {
      "rank": 9,
      "address": "1929 April Ct, Lomita 90717",
      "href": "https://www.zillow.com/homedetails/1929-April-Ct-Lomita-CA-90717/21279743_zpid/",
      "price": "$1,349,000",
      "bedsBaths": "4 bd / 3 ba",
      "size": "2,130 sf · 7,038 sf lot",
      "score": "7.12",
      "interior": "6.3",
      "space": "7.2",
      "commuteScore": "8.6",
      "schoolScore": "7",
      "school": "Lomita MST Magnet",
      "rating": "7/10",
      "schoolNote": "Choices application",
      "commute": "17.3 min off-peak / 27–37 min rush",
      "notes": "Moved into the Top 10 after the 2-car garage rule. Updated (hardwood, granite), not brand-new; breakfast counter rather than an island; cul-de-sac, spa. The only qualifying home with a 3-car garage.",
      "hoaPenalty": "—",
      "garage": "3-car",
      "openHouse": "none"
    },
    {
      "rank": 10,
      "address": "2102 Pattiz Ave, Long Beach 90815",
      "href": "https://www.zillow.com/homedetails/2102-Pattiz-Ave-Long-Beach-CA-90815/21209086_zpid/",
      "price": "$1,224,888",
      "bedsBaths": "4 bd / 3 ba",
      "size": "1,948 sf · 5,600 sf lot",
      "score": "7.05",
      "interior": "8.3",
      "space": "6.4",
      "commuteScore": "4.7",
      "schoolScore": "8",
      "school": "Tincher",
      "rating": "8/10",
      "schoolNote": "",
      "commute": "26.9 min off-peak / 42–52 min rush",
      "notes": "Moved into the Top 10 after the 2-car garage rule. Turnkey: large gathering island, granite/cherry kitchen; updated baths, vinyl floors, new roof and HVAC (2023).",
      "hoaPenalty": "—",
      "garage": "2-car",
      "openHouse": "none"
    }
  ],
  "excludedGarage": {
    "heading": "Excluded: under a 2-car garage",
    "intro": "The 2-car garage rule was added Nov 21. These five homes had already been scored; their factor scores are unchanged, but they no longer qualify. Garage counts come from Zillow.",
    "homes": [
      {
        "address": "731 N Leland Ave, San Pedro 90732",
        "href": "https://www.zillow.com/homedetails/731-N-Leland-Ave-San-Pedro-CA-90732/21304908_zpid/",
        "price": "$1,299,000",
        "score": "8.20",
        "garage": "1-car",
        "openHouse": "none",
        "reason": "1-car garage (was #1 at 8.20 before this rule)"
      },
      {
        "address": "2922 Radnor Ave, Long Beach 90815",
        "href": "https://www.zillow.com/homedetails/2922-Radnor-Ave-Long-Beach-CA-90815/21205566_zpid/",
        "price": "$1,389,000",
        "score": "7.28",
        "garage": "none",
        "openHouse": "none",
        "reason": "Zillow now shows it RECENTLY_SOLD at $895,000 with no garage, so it is out either way (was #9 at 7.28)"
      },
      {
        "address": "3675 Palo Verde Ave, Long Beach 90808",
        "href": "https://www.zillow.com/homedetails/3675-Palo-Verde-Ave-Long-Beach-CA-90808/21187647_zpid/",
        "price": "$1,499,000",
        "score": "7.17",
        "garage": "1-car",
        "openHouse": "none",
        "reason": "1-car garage"
      },
      {
        "address": "5451 E Daggett St, Long Beach 90815",
        "href": "https://www.zillow.com/homedetails/5451-E-Daggett-St-Long-Beach-CA-90815/21203274_zpid/",
        "price": "$1,398,000",
        "score": "6.79",
        "garage": "1-car",
        "openHouse": "none",
        "reason": "1-car garage (had qualified under the ADU rule)"
      },
      {
        "address": "3308 Faust Ave, Long Beach 90808",
        "href": "https://www.zillow.com/homedetails/3308-Faust-Ave-Long-Beach-CA-90808/21190951_zpid/",
        "price": "$1,249,000",
        "score": "6.28",
        "garage": "1-car",
        "openHouse": "none",
        "reason": "1-car garage"
      }
    ]
  }
};
