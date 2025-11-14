const yoeBadges = document.getElementsByClassName("yoe-badge");
for (let i = 0; i < yoeBadges.length; i++) {
    yoeBadges[i].addEventListener("click", () => {
        alert("Button clicked!");
    });
}