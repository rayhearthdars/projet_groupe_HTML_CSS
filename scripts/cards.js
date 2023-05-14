const cards = document.querySelectorAll(".container .box");


cards.forEach((card, idx) => {
  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    window.location = `./details.html?pizzaId=${idx}`;
  });
});