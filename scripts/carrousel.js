const images = [];

const slide = ["./assets/fond2.jpg", "./assets/fond3.jpg", "./assets/fond4.jpg"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  console.log("test");
  document.getElementById("header_img").src = slide[numero];
};

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 37) {
    ChangeSlide(-1);
  } else if (e.keyCode === 39) {
    ChangeSlide(1);
  }
};


