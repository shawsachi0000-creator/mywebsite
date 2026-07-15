const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}
