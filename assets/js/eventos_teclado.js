bgColor = function (color) {
  let div = document.getElementById("key");
  div.style.backgroundColor = color;
};
function newElement(color) {
  let container = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.backgroundColor = color;
  container.appendChild(nuevoElemento);
}

document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "a" || evento.key === "A") {
      bgColor("pink");
    } else if (evento.key === "s" || evento.key === "S") {
      bgColor("orange");
    } else if (evento.key === "d" || evento.key === "D") {
      bgColor("skyblue");
    }
  })
);
document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "q" || evento.key === "Q") {
      newElement("purple");
    } else if (evento.key === "w" || evento.key === "W") {
      newElement("gray");
    } else if (evento.key === "e" || evento.key === "E") {
      newElement("brown");
    }
  })
);
