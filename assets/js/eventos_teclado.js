pinkColor = function () {
  let div = document.getElementById("key");
  div.style.backgroundColor = "pink";
};
orangeColor = function () {
  let div = document.getElementById("key");
  div.style.backgroundColor = "orange";
};
skyBlueColor = function () {
  let div = document.getElementById("key");
  div.style.backgroundColor = "skyblue";
};
function nuevoDivMorado() {
  let container = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.backgroundColor = "purple";
  container.appendChild(nuevoElemento);
}
function nuevoDivGris() {
  let container = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.backgroundColor = "Gray";
  container.appendChild(nuevoElemento);
}
function nuevoDivCafe() {
  let container = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.backgroundColor = "brown";
  container.appendChild(nuevoElemento);
}
document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "a" || evento.key === "A") {
      pinkColor();
    } else if (evento.key === "s" || evento.key === "S") {
      orangeColor();
    } else if (evento.key === "d" || evento.key === "D") {
      skyBlueColor();
    }
  })
);
document.addEventListener(
  "keydown",
  (seleccionarTecla = function (evento) {
    if (evento.key === "q" || evento.key === "Q") {
      nuevoDivMorado();
    } else if (evento.key === "w" || evento.key === "W") {
      nuevoDivGris();
    } else if (evento.key === "e" || evento.key === "E") {
      nuevoDivCafe();
    }
  })
);
