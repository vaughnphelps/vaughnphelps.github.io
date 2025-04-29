function filterItems() {
    const filter = document.getElementById("categoryFilter").value;
    const items = document.querySelectorAll(".equipment-grid .item");

    items.forEach(item => {
        if (filter === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(filter) ? "block" : "none";
        }
    });
}