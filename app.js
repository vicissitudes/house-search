(function () {
  const app = document.getElementById("app");
  const SECTIONS = {
    "top-10": 1,
    radnor: 1,
    other: 1,
    "new": 1,
    changes: 1,
    "near-misses": 1,
    questions: 1,
    caveat: 1,
    criteria: 1
  };
  let currentId = "";

  function weekList() {
    return (window.HOUSE_MANIFEST || []).filter(function (id) {
      return window.HOUSE_WEEKS && window.HOUSE_WEEKS[id];
    }).slice().sort().reverse();
  }

  function parseHash() {
    const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!raw) return { id: "", section: "" };
    const parts = raw.split("/");
    if (SECTIONS[parts[0]] && !parts[1]) return { id: "", section: parts[0] };
    return { id: parts[0], section: parts[1] || "" };
  }

  function renderDigest(data, weekId) {
  const skip = document.querySelector(".skip");
  if (skip) skip.setAttribute("href", "#" + weekId + "/top-10");
  document.title = data.title;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null && text !== "") node.textContent = text;
    return node;
  }

  function display(value) {
    if (value == null || String(value).trim() === "") return "n/a";
    return String(value);
  }

  function linkNode(link) {
    if (!link || !link.href) return document.createTextNode(link ? link.label : "");
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = link.label;
    return a;
  }

  function linksLine(links) {
    const frag = document.createDocumentFragment();
    (links || []).forEach(function (link, index) {
      if (index > 0) frag.appendChild(document.createTextNode(" · "));
      frag.appendChild(linkNode(link));
    });
    return frag;
  }

  function badges(list) {
    const frag = document.createDocumentFragment();
    (list || []).forEach(function (label) {
      const kind = /new|qualif|adu/i.test(label) ? "good" : "warn";
      frag.appendChild(el("span", "badge " + kind, label));
    });
    return frag;
  }

  function addressCell(links, badgeList) {
    const wrap = document.createElement("div");
    wrap.appendChild(linksLine(links));
    const marks = badges(badgeList);
    if (marks.childNodes.length) {
      wrap.appendChild(document.createTextNode(" "));
      wrap.appendChild(marks);
    }
    return wrap;
  }

  function cell(label, content, className) {
    const td = document.createElement("td");
    td.dataset.label = label;
    if (className) td.className = className;
    if (content instanceof Node) td.appendChild(content);
    else td.textContent = display(content);
    return td;
  }

  function table(caption, headers, records, renderRow) {
    const wrap = el("div", "table-wrap");
    const tableEl = document.createElement("table");
    tableEl.className = "cards";
    const cap = document.createElement("caption");
    cap.textContent = caption;
    tableEl.appendChild(cap);
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headers.forEach(function (header) {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = header;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    const tbody = document.createElement("tbody");
    records.forEach(function (record) {
      tbody.appendChild(renderRow(record));
    });
    tableEl.appendChild(thead);
    tableEl.appendChild(tbody);
    wrap.appendChild(tableEl);
    return { wrap: wrap, tbody: tbody, table: tableEl };
  }

  function section(id, title, kicker) {
    const sectionEl = el("section", "section");
    sectionEl.id = id;
    if (kicker) sectionEl.appendChild(el("p", "kicker", kicker));
    sectionEl.appendChild(el("h2", "", title));
    return sectionEl;
  }

  function paragraphs(parent, list) {
    (list || []).forEach(function (text) {
      parent.appendChild(el("p", "", text));
    });
  }

  const wrap = el("div", "wrap");
  wrap.id = "digest";

  const tabs = el("div", "week-tabs");
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Digest weeks");
  weekList().forEach(function (id) {
    const week = window.HOUSE_WEEKS[id] || {};
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "week-tab";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", id === weekId ? "true" : "false");
    btn.setAttribute("aria-controls", "digest");
    btn.id = "week-tab-" + id;
    btn.textContent = week.weekLabel || id;
    btn.addEventListener("click", function () {
      if ((location.hash || "").replace(/^#/, "") !== id) location.hash = id;
    });
    tabs.appendChild(btn);
  });
  wrap.appendChild(tabs);

  const head = el("header", "masthead");
  const plate = el("div", "nameplate");
  plate.appendChild(el("span", "", "Personal search"));
  plate.appendChild(el("span", "", data.weekLabel));
  head.appendChild(plate);
  head.appendChild(el("h1", "", data.title));
  head.appendChild(el("p", "lede", data.lede));
  head.appendChild(el("p", "prepared", data.prepared));
  wrap.appendChild(head);

  const reports = el("nav", "nav reports-nav");
  reports.setAttribute("aria-label", "Reports");
  const reportList = document.createElement("ul");
  [
    ["carfax-deep-dive.html", "2001 Carfax Ave deep dive"],
    ["crime-comparison.html", "Crime comparison"]
  ].forEach(function (item) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item[0];
    a.textContent = item[1];
    li.appendChild(a);
    reportList.appendChild(li);
  });
  reports.appendChild(reportList);
  wrap.appendChild(reports);

  const nav = el("nav", "nav");
  nav.setAttribute("aria-label", "Sections");
  const navList = document.createElement("ul");
  [
    ["top-10", "Top 10"],
    ["radnor", "Radnor"],
    ["other", "Other homes"],
    ["new", "New"],
    ["changes", "Prices"],
    ["near-misses", "Near-misses"],
    ["questions", "Open questions"],
    ["caveat", "School caveat"],
    ["criteria", "Criteria"],
  ].forEach(function (item) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + weekId + "/" + item[0];
    a.textContent = item[1];
    li.appendChild(a);
    navList.appendChild(li);
  });
  nav.appendChild(navList);
  wrap.appendChild(nav);

  function hoaPenalty(value) {
    const text = value && String(value).trim() ? String(value) : "—";
    const marked = text !== "—" && text !== "-";
    return el("span", marked ? "hoa-penalty" : "", text);
  }

  function listHas(list, key) {
    return (list || []).some(function (home) { return home[key] != null; });
  }

  function factor(score, detail) {
    const wrap = document.createElement("div");
    wrap.appendChild(el("span", "factor", display(score)));
    if (detail) wrap.appendChild(el("span", "factor-sub", detail));
    return wrap;
  }

  function homeCard(home, kind) {
    const card = el("article", "home-card");
    if (home.area) card.dataset.area = home.area;
    const head = el("div", "home-card-head");
    head.appendChild(el("span", "home-rank", String(home.rank)));
    head.appendChild(el("span", "home-score", display(home.score)));
    card.appendChild(head);
    const title = el("h3", "home-address");
    if (kind === "top") title.appendChild(addressCell([{ label: home.address, href: home.href }], home.badges));
    else title.appendChild(addressCell(home.links, home.badges));
    card.appendChild(title);
    card.appendChild(el("p", "home-price", display(home.price)));
    const bits = [];
    if (home.bedsBaths) bits.push(home.bedsBaths);
    if (kind === "top" && home.size) bits.push(home.size);
    if (kind !== "top" && home.sqft) bits.push(home.sqft + " sf");
    if (bits.length) card.appendChild(el("p", "home-meta", bits.join(" · ")));
    if (home.garage != null) card.appendChild(el("p", "home-line", "Garage: " + home.garage));
    if (home.openHouse != null) {
      const scheduled = String(home.openHouse).trim().toLowerCase() !== "none";
      card.appendChild(el("p", "home-open" + (scheduled ? " is-open" : ""), "Open house: " + home.openHouse));
    }
    if (kind === "top") {
      const schoolBits = [home.school, home.rating, home.schoolNote].filter(Boolean);
      if (schoolBits.length) card.appendChild(el("p", "home-line", schoolBits.join(" · ")));
      if (home.commute) card.appendChild(el("p", "home-line", home.commute));
    } else {
      if (home.school) card.appendChild(el("p", "home-line", home.school));
      const commuteBits = [];
      if (home.offPeak) commuteBits.push(home.offPeak + " min off-peak");
      if (home.rush) commuteBits.push(home.rush + " min rush");
      if (commuteBits.length) card.appendChild(el("p", "home-line", commuteBits.join(" / ")));
    }
    if (home.adu && home.adu !== "—") card.appendChild(el("p", "home-line", "ADU: " + home.adu));
    if (home.hoaPenalty && home.hoaPenalty !== "—") card.appendChild(el("p", "home-line", "HOA penalty: " + home.hoaPenalty));
    const factors = el("div", "factor-row");
    const factorPairs = [["Int", home.interior], ["Space", home.space], ["Commute", home.commuteScore], ["School", home.schoolScore]];
    if (home.kitchen != null) factorPairs.unshift(["Kit", home.kitchen]);
    factorPairs.forEach(function (pair) {
      if (pair[1] == null || String(pair[1]).trim() === "") return;
      const chip = el("div", "factor-chip");
      chip.appendChild(el("span", "factor-chip-label", pair[0]));
      chip.appendChild(el("span", "factor-chip-value", String(pair[1])));
      factors.appendChild(chip);
    });
    if (factors.childNodes.length) card.appendChild(factors);
    if (home.notes) card.appendChild(el("p", "home-notes", home.notes));
    return card;
  }

  const topHasKitchen = listHas(data.top10, "kitchen");
  const topHasGarage = listHas(data.top10, "garage");
  const topHasOpen = listHas(data.top10, "openHouse");
  const topHeaders = ["#", "Address", "Price", "Beds / baths", "Total"];
  if (topHasKitchen) topHeaders.push("Kitchen");
  topHeaders.push("Interior", "Space", "Commute", "School", "HOA penalty");
  if (topHasGarage) topHeaders.push("Garage");
  if (topHasOpen) topHeaders.push("Open house");
  topHeaders.push("Notes");

  const top = section("top-10", "Top 10", "Scored");
  top.appendChild(el("p", "intro", data.weightsNote));
  const topTable = table(
    "Ten homes that clear every hard filter, ranked by the weighted total. Factor scores are 0–10.",
    topHeaders,
    data.top10,
    function (home) {
      const tr = document.createElement("tr");
      const beds = document.createElement("div");
      beds.className = "beds";
      beds.appendChild(document.createTextNode(home.bedsBaths));
      beds.appendChild(el("span", "size", home.size));
      const total = document.createElement("div");
      total.appendChild(el("span", "total", home.score));
      tr.appendChild(cell("#", String(home.rank), "rank num"));
      tr.appendChild(cell("Address", addressCell([{ label: home.address, href: home.href }], home.badges)));
      tr.appendChild(cell("Price", home.price, "num"));
      tr.appendChild(cell("Beds / baths", beds));
      tr.appendChild(cell("Total", total, "num"));
      if (topHasKitchen) tr.appendChild(cell("Kitchen", home.kitchen, "num"));
      tr.appendChild(cell("Interior", factor(home.interior, home.interiorNote), "num"));
      tr.appendChild(cell("Space", factor(home.space), "num"));
      tr.appendChild(cell("Commute", factor(home.commuteScore, home.commute), "num"));
      tr.appendChild(cell("School", factor(home.schoolScore, [home.school, home.rating, home.schoolNote].filter(Boolean).join(" · ")), "num"));
      tr.appendChild(cell("HOA penalty", hoaPenalty(home.hoaPenalty), "num"));
      if (topHasGarage) tr.appendChild(cell("Garage", home.garage));
      if (topHasOpen) tr.appendChild(cell("Open house", home.openHouse));
      tr.appendChild(cell("Notes", home.notes));
      return tr;
    }
  );
  topTable.table.classList.add("wide");
  topTable.wrap.classList.add("wide-only");
  top.appendChild(topTable.wrap);
  const topCards = el("div", "home-cards phone-only");
  (data.top10 || []).forEach(function (home) { topCards.appendChild(homeCard(home, "top")); });
  top.appendChild(topCards);
  top.appendChild(el("p", "note", data.rankingNote));
  wrap.appendChild(top);

  const radnor = section("radnor", data.radnor.heading, data.radnor.kicker);
  radnor.classList.add("callout");
  paragraphs(radnor, data.radnor.paragraphs);
  const radnorLinks = el("div", "link-row");
  radnorLinks.appendChild(linksLine(data.radnor.links));
  radnor.appendChild(radnorLinks);
  wrap.appendChild(radnor);

  const other = section("other", "Other qualifying homes", "Ranked 11–27");
  other.appendChild(el("p", "intro", data.otherIntro));
  const preferred = ["Long Beach", "San Pedro", "Lomita"];
  const present = {};
  data.otherQualifying.forEach(function (home) { present[home.area] = true; });
  const extraAreas = Object.keys(present).filter(function (area) {
    return preferred.indexOf(area) === -1;
  }).sort();
  const areas = ["All"].concat(preferred.filter(function (area) {
    return present[area];
  })).concat(extraAreas);

  const filterBar = el("div", "filters");
  filterBar.setAttribute("role", "toolbar");
  filterBar.setAttribute("aria-label", "Filter by area");
  const status = el("p", "filter-status");
  status.setAttribute("aria-live", "polite");

  const otherHasKitchen = listHas(data.otherQualifying, "kitchen");
  const otherHasGarage = listHas(data.otherQualifying, "garage");
  const otherHasOpen = listHas(data.otherQualifying, "openHouse");
  const otherHeaders = ["#", "Address", "Price", "Bd/Ba", "Sq ft", "ADU", "Elementary (GS)", "Off-peak", "Rush est.", "HOA penalty", "Score"];
  if (otherHasKitchen) otherHeaders.push("Kitchen");
  if (otherHasGarage) otherHeaders.push("Garage");
  if (otherHasOpen) otherHeaders.push("Open house");
  otherHeaders.push("Notes");

  const otherTable = table(
    "Homes that clear the hard filters and rank below the Top 10, sorted by the weighted total. Off-peak and rush figures are minutes.",
    otherHeaders,
    data.otherQualifying,
    renderOtherRow
  );

  function renderOtherRow(home) {
    const tr = document.createElement("tr");
    tr.dataset.area = home.area;
    tr.appendChild(cell("#", String(home.rank), "rank num"));
    tr.appendChild(cell("Address", addressCell(home.links, home.badges)));
    tr.appendChild(cell("Price", home.price, "num"));
    tr.appendChild(cell("Bd/Ba", home.bedsBaths, "num"));
    tr.appendChild(cell("Sq ft", home.sqft, "num"));
    tr.appendChild(cell("ADU", home.adu));
    tr.appendChild(cell("Elementary (GS)", home.school));
    tr.appendChild(cell("Off-peak", home.offPeak, "num"));
    tr.appendChild(cell("Rush est.", home.rush, "num"));
    tr.appendChild(cell("HOA penalty", hoaPenalty(home.hoaPenalty), "num"));
    const score = document.createElement("div");
    const factorBits = [];
    if (home.kitchen != null) factorBits.push("kit " + home.kitchen);
    factorBits.push("int " + home.interior, "space " + home.space, "commute " + home.commuteScore, "school " + home.schoolScore);
    score.appendChild(el("span", "total", display(home.score)));
    score.appendChild(el("span", "factor-sub", factorBits.join(" · ")));
    tr.appendChild(cell("Score", score, "num"));
    if (otherHasKitchen) tr.appendChild(cell("Kitchen", home.kitchen, "num"));
    if (otherHasGarage) tr.appendChild(cell("Garage", home.garage));
    if (otherHasOpen) tr.appendChild(cell("Open house", home.openHouse));
    tr.appendChild(cell("Notes", home.notes));
    return tr;
  }

  function applyFilter(area) {
    const rows = data.otherQualifying.filter(function (home) {
      return area === "All" || home.area === area;
    });
    otherTable.tbody.replaceChildren.apply(otherTable.tbody, rows.map(renderOtherRow));
    if (!rows.length) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = otherHeaders.length;
      td.appendChild(el("p", "empty", "No homes in this area."));
      tr.appendChild(td);
      otherTable.tbody.appendChild(tr);
    }
    otherCards.querySelectorAll(".home-card").forEach(function (card) {
      card.hidden = area !== "All" && card.dataset.area !== area;
    });
    otherCardsEmpty.hidden = rows.length > 0;
    const noun = rows.length === 1 ? "home" : "homes";
    status.textContent = area === "All"
      ? "Showing all " + rows.length + " " + noun + "."
      : "Showing " + rows.length + " " + noun + " in " + area + ".";
  }

  areas.forEach(function (area) {
    const button = document.createElement("button");
    button.type = "button";
    const count = area === "All"
      ? data.otherQualifying.length
      : data.otherQualifying.filter(function (home) { return home.area === area; }).length;
    button.textContent = area + " · " + count;
    button.setAttribute("aria-pressed", area === "All" ? "true" : "false");
    button.addEventListener("click", function () {
      Array.prototype.forEach.call(filterBar.querySelectorAll("button"), function (btn) {
        btn.setAttribute("aria-pressed", btn === button ? "true" : "false");
      });
      applyFilter(area);
    });
    filterBar.appendChild(button);
  });

  other.appendChild(filterBar);
  other.appendChild(status);
  otherTable.wrap.classList.add("wide-only");
  other.appendChild(otherTable.wrap);
  const otherCards = el("div", "home-cards phone-only");
  const otherCardsEmpty = el("p", "empty", "No homes in this area.");
  otherCardsEmpty.hidden = true;
  data.otherQualifying.forEach(function (home) { otherCards.appendChild(homeCard(home, "other")); });
  otherCards.appendChild(otherCardsEmpty);
  other.appendChild(otherCards);
  applyFilter("All");
  wrap.appendChild(other);

  if (data.excludedGarage) {
    const block = data.excludedGarage;
    const homes = block.homes || [];
    const excludedHasGarage = listHas(homes, "garage");
    const excludedHasOpen = listHas(homes, "openHouse");
    const excludedHeaders = ["Address", "Price", "Score"];
    if (excludedHasGarage) excludedHeaders.push("Garage");
    if (excludedHasOpen) excludedHeaders.push("Open house");
    excludedHeaders.push("Reason");
    const excluded = section("excluded-garage", block.heading || "Excluded");
    if (block.intro) excluded.appendChild(el("p", "intro", block.intro));
    const excludedTable = table(
      block.heading || "Homes excluded by the garage rule.",
      excludedHeaders,
      homes,
      function (home) {
        const tr = document.createElement("tr");
        tr.appendChild(cell("Address", addressCell([{ label: home.address, href: home.href }])));
        tr.appendChild(cell("Price", home.price, "num"));
        tr.appendChild(cell("Score", home.score, "num"));
        if (excludedHasGarage) tr.appendChild(cell("Garage", home.garage));
        if (excludedHasOpen) tr.appendChild(cell("Open house", home.openHouse));
        tr.appendChild(cell("Reason", home.reason));
        return tr;
      }
    );
    excludedTable.wrap.classList.add("wide-only");
    excluded.appendChild(excludedTable.wrap);
    const excludedCards = el("div", "home-cards phone-only");
    homes.forEach(function (home) {
      const card = el("article", "home-card");
      const head = el("div", "home-card-head");
      head.appendChild(el("span", "home-score", display(home.score)));
      card.appendChild(head);
      const title = el("h3", "home-address");
      title.appendChild(addressCell([{ label: home.address, href: home.href }]));
      card.appendChild(title);
      card.appendChild(el("p", "home-price", display(home.price)));
      if (home.garage != null) card.appendChild(el("p", "home-line", "Garage: " + home.garage));
      if (home.openHouse != null) {
        const scheduled = String(home.openHouse).trim().toLowerCase() !== "none";
        card.appendChild(el("p", "home-open" + (scheduled ? " is-open" : ""), "Open house: " + home.openHouse));
      }
      if (home.reason) card.appendChild(el("p", "home-notes", home.reason));
      excludedCards.appendChild(card);
    });
    excluded.appendChild(excludedCards);
    wrap.appendChild(excluded);
  }

  const fresh = section("new", "New this week", "Compared with the prior week");
  fresh.appendChild(el("p", "intro", data.newThisWeek.intro));
  fresh.appendChild(table(
    "Listings new to Zillow this week, plus two Redfin-only adds.",
    ["Home", "Price", "Listed", "Result", "Note"],
    data.newThisWeek.listings,
    function (item) {
      const tr = document.createElement("tr");
      const result = el("span", "result " + (item.result === "Qualifies" ? "pass" : "miss"), item.result);
      tr.appendChild(cell("Home", addressCell(item.links)));
      tr.appendChild(cell("Price", item.price, "num"));
      tr.appendChild(cell("Listed", item.listed));
      tr.appendChild(cell("Result", result));
      tr.appendChild(cell("Note", item.note));
      return tr;
    }
  ).wrap);
  fresh.appendChild(el("p", "note", data.newThisWeek.notVetted));
  fresh.appendChild(el("h3", "", "Newly qualifying under this week’s rules"));
  fresh.appendChild(el("p", "intro", data.newThisWeek.qualifyingIntro));
  fresh.appendChild(table(
    "Homes that newly pass because of the ADU rule or the attached-suite rule.",
    ["Home", "Price", "Why it qualifies now"],
    data.newThisWeek.qualifying,
    function (item) {
      const tr = document.createElement("tr");
      tr.appendChild(cell("Home", addressCell(item.links)));
      tr.appendChild(cell("Price", item.price, "num"));
      tr.appendChild(cell("Why it qualifies now", item.note));
      return tr;
    }
  ).wrap);
  wrap.appendChild(fresh);

  const changes = section("changes", "Price changes and corrections", "Compared with the prior week");
  changes.appendChild(el("h3", "", "Price drops"));
  changes.appendChild(table(
    "Price changes on homes that were already in last week’s digest.",
    ["Home", "Was", "Now", "Change", "When", "Note"],
    data.priceChanges,
    function (item) {
      const tr = document.createElement("tr");
      tr.appendChild(cell("Home", addressCell(item.links)));
      tr.appendChild(cell("Was", item.from, "num"));
      tr.appendChild(cell("Now", item.to, "num"));
      tr.appendChild(cell("Change", item.delta, "num"));
      tr.appendChild(cell("When", item.when));
      tr.appendChild(cell("Note", item.note));
      return tr;
    }
  ).wrap);
  changes.appendChild(el("p", "note", data.priceChangeNote));
  changes.appendChild(el("h3", "", "Missing from today’s Zillow results"));
  const statusList = document.createElement("ul");
  statusList.className = "stack";
  data.statusChanges.forEach(function (item) {
    const li = document.createElement("li");
    li.appendChild(el("h3", "", item.title));
    li.appendChild(el("p", "", item.body));
    if (item.links) {
      const line = el("div", "link-row");
      line.appendChild(linksLine(item.links));
      li.appendChild(line);
    }
    statusList.appendChild(li);
  });
  changes.appendChild(statusList);
  changes.appendChild(el("h3", "", "Corrections"));
  const correctionList = document.createElement("ul");
  correctionList.className = "stack";
  data.corrections.forEach(function (item) {
    const li = document.createElement("li");
    li.appendChild(el("h3", "", item.title));
    li.appendChild(el("p", "", item.body));
    correctionList.appendChild(li);
  });
  changes.appendChild(correctionList);
  wrap.appendChild(changes);

  const misses = section("near-misses", "Near-misses", "Did not clear every filter");
  data.nearMisses.forEach(function (block) {
    if (block.kind === "table") {
      misses.appendChild(el("h3", "", block.title));
      if (block.intro) misses.appendChild(el("p", "intro", block.intro));
      misses.appendChild(table(
        block.title,
        ["Home", "Price", "School / commute", "Why"],
        block.rows,
        function (item) {
          const tr = document.createElement("tr");
          tr.appendChild(cell("Home", addressCell(item.homes, item.badges)));
          tr.appendChild(cell("Price", item.price, "num"));
          tr.appendChild(cell("School / commute", item.school));
          tr.appendChild(cell("Why", item.why));
          return tr;
        }
      ).wrap);
      (block.after || []).forEach(function (text) {
        misses.appendChild(el("p", "after", text));
      });
      return;
    }
    if (block.kind === "callout") {
      const box = el("aside", "callout");
      box.appendChild(el("h3", "", block.title));
      paragraphs(box, block.paragraphs);
      if (block.links) {
        const line = el("div", "link-row");
        line.appendChild(linksLine(block.links));
        box.appendChild(line);
      }
      misses.appendChild(box);
      return;
    }
    const prose = el("div", "prose");
    prose.appendChild(el("h3", "", block.title));
    paragraphs(prose, block.paragraphs);
    misses.appendChild(prose);
  });
  wrap.appendChild(misses);

  const questions = section("questions", "Open questions", "Still to confirm");
  const qList = document.createElement("ol");
  qList.className = "questions";
  data.openQuestions.forEach(function (item) {
    const li = document.createElement("li");
    li.appendChild(el("h3", "", item.question));
    li.appendChild(el("p", "", item.detail));
    if (item.links) {
      const line = el("div", "link-row");
      line.appendChild(linksLine(item.links));
      li.appendChild(line);
    }
    qList.appendChild(li);
  });
  questions.appendChild(qList);
  wrap.appendChild(questions);

  const caveat = section("caveat", data.caveat.title, "Caveat");
  caveat.classList.add("caveat");
  paragraphs(caveat, data.caveat.paragraphs);
  wrap.appendChild(caveat);

  const foot = el("footer", "criteria");
  foot.id = "criteria";
  const details = el("details", "criteria-body");
  details.open = true;
  const summary = document.createElement("summary");
  summary.textContent = "Buyer criteria";
  details.appendChild(summary);
  details.appendChild(el("p", "", data.criteriaSummary));
  const list = document.createElement("ul");
  data.criteria.forEach(function (item) {
    list.appendChild(el("li", "", item));
  });
  details.appendChild(list);
  data.methodNotes.forEach(function (item) {
    details.appendChild(el("p", "muted", item));
  });
  foot.appendChild(details);
  foot.appendChild(el("p", "colophon", "Personal digest for " + (data.weekLabel || weekId) + ". Listing pages change. Confirm status, schools, and yards before touring. This site does not use tracking or a build step. Older weeks stay on this page."));
  wrap.appendChild(foot);

  app.replaceChildren(wrap);
  }

  function showFromHash() {
    const weeks = weekList();
    if (!weeks.length) {
      app.textContent = "No digests are listed.";
      return;
    }
    const parsed = parseHash();
    const id = weeks.indexOf(parsed.id) >= 0 ? parsed.id : weeks[0];
    if (parsed.id !== id) {
      history.replaceState(null, "", "#" + id + (parsed.section ? "/" + parsed.section : ""));
    }
    if (id !== currentId) {
      currentId = id;
      renderDigest(window.HOUSE_WEEKS[id], id);
    }
    if (parsed.section) {
      const scroll = function () {
        const node = document.getElementById(parsed.section);
        if (node) node.scrollIntoView({ block: "start", behavior: "auto" });
      };
      requestAnimationFrame(scroll);
      setTimeout(scroll, 50);
    }
  }

  window.addEventListener("hashchange", showFromHash);
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details").forEach(function (node) {
      node.dataset.wasOpen = String(node.open);
      node.open = true;
    });
  });
  window.addEventListener("afterprint", function () {
    document.querySelectorAll("details").forEach(function (node) {
      node.open = node.dataset.wasOpen === "true";
    });
  });
  showFromHash();
})();
