// Listas de imágenes por categoría
const data = {
  gorras: ["img/IMG_6347.JPG", "img/IMG_6391.JPG", "img/IMG_6399.JPG", "img/IMG_6411.JPG"],
  camisas: ["https://via.placeholder.com/300/333", "https://via.placeholder.com/300/444"],
  pantalones: ["https://via.placeholder.com/300/555", "https://via.placeholder.com/300/666"],
  busos: ["https://via.placeholder.com/300/777", "https://via.placeholder.com/300/888"]
};

// Iniciar carruseles
const secciones = document.querySelectorAll(".seccion");

secciones.forEach((seccion) => {
  const id = seccion.id;
  const imagen = seccion.querySelector(".imagen");
  const prev = seccion.querySelector(".prev");
  const next = seccion.querySelector(".next");
  let index = 0;

  function actualizarImg() {
    imagen.src = data[id][index];
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + data[id].length) % data[id].length;
    actualizarImg();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % data[id].length;
    actualizarImg();
  });

  actualizarImg();
});
