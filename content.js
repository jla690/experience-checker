const rgx =
  /\b(?:\d+\+?|one|two|three|four|five|six|seven|eight|nine|ten)\s+(?:\w+\s+){0,2}?years?\b/i;
let timer = null;

const false_positives = [
  "benefits",
  "benefit",
  "health",
  "wellness",
  "perks",
  "vacation",
  "maternity",
  "leave",
  "discounts",
  "401k",
  "allowance",
  "pension",
];
let prev_description = "";

const createBadge = (text) => {
  const badge = document.createElement("div");
  badge.classList.add("yoe-badge");

  const label = document.createElement("span");
  label.textContent = text;
  label.style.whiteSpace = "nowrap";
  label.style.overflow = "hidden";
  label.style.textOverflow = "ellipsis";
  label.style.display = "inline-block";
  label.style.maxWidth = "550px";

  badge.style.display = "flex";
  badge.style.padding = "4px 8px";
  badge.style.marginBottom = "8px";
  badge.style.borderRadius = "6px";
  badge.style.border = "1px solid #c8d9ea";
  badge.style.background = "#f7fbff";
  badge.style.fontSize = "12px";
  badge.style.fontWeight = "600";
  badge.style.maxWidth = "550px";
  badge.style.gap = "4px";

  badge.append(label);
  return badge;
};

const yoe_check = () => {
  const description_arr = document.getElementsByClassName("jobs-details");
  if (description_arr.length === 0) {
    return;
  }
  const description = description_arr[0];

  const title = description.querySelector("h1");

  if (prev_description === description.textContent) {
    return;
  }
  prev_description = description.textContent;

  description.querySelectorAll(".yoe-badge").forEach((b) => b.remove());
  let matches = new Set();
  const paras = Array.from(description.querySelectorAll("p")).filter((p) => {
    return (
      p.textContent.startsWith("•") ||
      p.textContent.startsWith("*") ||
      p.textContent.startsWith("✔️") ||
      p.textContent.startsWith("✅") ||
      p.textContent.startsWith("-") ||
      p.textContent.startsWith("·")
    );
  });
  const listItems = Array.from(description.querySelectorAll("li"));

  const strongItems = Array.from(description.querySelectorAll("strong")).filter(
    (s) => !s.closest("li")
  );

  const arr = [...listItems, ...paras, ...strongItems];

  for (const element of arr) {
    const cleaned = element.textContent.trim();

    // might need to make it select the job description box instead of the entire page
    if (
      (rgx.test(cleaned) ||
        cleaned.toLowerCase().includes("degree")) &&
      !false_positives.some((word) => cleaned.toLowerCase().includes(word))
    ) {
      matches.add(cleaned);
    }
  }

  if (matches.size > 0) {
    for (const match of matches) {
      const badge = createBadge(match);

      if (title) {
        title.append(badge);
      } else {
        return;
      }
    }
  } else {
    const badge = createBadge(
      "Years or degree not found, please manually check"
    );
    if (title) {
      title.append(badge);
    }
  }
};

const observer = new MutationObserver((_mutations) => {
  clearTimeout(timer);
  timer = setTimeout(() => yoe_check(), 200);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});
