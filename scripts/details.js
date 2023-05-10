const pizzas = [
  {
    name: "HeroBook Pro",
    brand: "Chuwi",
    description: "Ordinateur portable Herobook pro équipé de Windows 11 pré-installé et du processeur Celeron N4020. Avec cache de 4M, fréquence de 1,1 GHz jusqu'à 2,8 GHz, GPU Intel UHD Graphics 600. Prend en charge le décodage vidéo fluide en 4k ",
    image: "../assets/ordinateur_chuwi.jpg",
  },
  {
    name: "Galaxy Book2 Pro",
    brand: "Samsung",
    description: "Vous l'attendiez? Le voici. Le Galaxy Book2 Pro 360 est un ordinateur portable 2-en-1 fin et léger, tactile et compatible avec le S Pen. Ce dernier est fourni dans la boite. Grâce à un temps de latence ultra faible, vous bénéficiez d'une expérience d'écriture et de dessin fluide comme sur du papier. ",
    image: "../assets/ordinateur1.jpg",
  },
  {
    name: "Galaxy Tab S8",
    brand: "Samsung",
    description: "La Galaxy Tab S8 est dotée d'un écran de 11 pouces et la Galaxy Tab S8+ d'un écran de 12,4 pouces. La Galaxy Tab S8 Ultra est la plus grande de toutes avec un écran de 14,6 pouces.",
    image: "../assets/tablette1.jpg",
  },
  {
    name: "Galaxy Tab A8",
    brand: "Samsung",
    description: "La Samsung Galaxy Tab A8 est la nouvelle tablette tactile d'entrée de gamme du géant sud-coréen. Elle est dotée d'une large dalle de 10,5 pouces définie en 1920 x 1200 pixels et embarque une puce 10 % plus performante que la Galaxy Tab A7.",
    image: "../assets/tablette2.jpg",
  },
  {
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    description: "Le Galaxy S23 Ultra embarque tout le savoir-faire Samsung au cœur d'une conception minimaliste et unique en son genre. Avec l'intégration de matériaux recyclés dans le verre des faces avant et arrière, ou l'utilisation de colorants composés de pigments naturels pour le traitement du cadre en aluminium, sa fabrication a été entièrement repensée. Pour un smartphone plus respectueux de l'environnement.",
    image: "../assets/telephone1.jpg",
  },
  {
    name: "Galaxy S23",
    brand: "Samsung",
    description: "Les Galaxy S23 et Galaxy 23+ incarnent un changement majeur pour Samsung, en intégrant des matériaux recyclés. Les faces avant et arrière en verre intègrent en effet du verre recyclé, tandis que leur châssis embarque des composants en plastique recyclé. Leur emballage, enfin, est fait de carton entièrement recyclé",
    image: "../assets/telephone2.jpg",
  },
];

const params = new URLSearchParams(window.location.search);
console.log("params", params.get("pizzaId"));
const currPizzaId = params.get("pizzaId");

const pizzaTitle = document.createElement("h2");
pizzaTitle.textContent = pizzas[currPizzaId].name;
// document.body.appendChild(pizzaTitle);

const pizzaDescription = document.createElement("p");
pizzaDescription.textContent = pizzas[currPizzaId].description;
// document.body.appendChild(pizzaDescription);

const img = document.createElement("img");
img.src = pizzas[currPizzaId].image;
document.body.appendChild(img);
document.body.appendChild(pizzaTitle);
document.body.appendChild(pizzaDescription);
