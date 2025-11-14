const rgx = /(?:\d+\+?|one|two|three|four|five|six|seven|eight|nine|ten)(?:\s+\w+){0,3}\s+year(?:s)?/i;
let timer = null;

const yoe_check = () => {
    document.querySelectorAll(".yoe-badge").forEach(b => b.remove());
    let matches = [];
    const arr = Array.from(document.querySelectorAll("li"));

    for (const element of arr) {
        const cleaned = element.textContent
            .trim()
            .toLowerCase();
        if ((rgx.test(cleaned) && cleaned.includes("experience")) || cleaned.includes("degree")) {
            matches.push(cleaned);
        }
    }

    if (matches.length > 0) {
        for (const match of matches) {
            const badge = document.createElement("div");
            badge.textContent = match;
            badge.classList.add("yoe-badge");
            badge.style.padding = "4px 8px";
            badge.style.transition = "opacity 0.2s";
            badge.style.borderRadius = "8px";
            badge.style.background = "#e0f0ff";
            badge.style.fontSize = "12px";
            badge.style.fontWeight = "600";
            badge.style.display = "inline-block";
            badge.style.marginLeft = "8px";

            const title = document.querySelector("h1");
            if (title) {
                title.append(badge);
            } else {
                return;
            }
        }
    }
};

yoe_check();

const observer = new MutationObserver((mutations) => {
    clearTimeout(timer);
    timer = setTimeout(() => yoe_check(), 200);
})

observer.observe(document.body, { childList: true, subtree: true });