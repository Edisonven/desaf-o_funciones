function cambiarColorFondo(divId) {
  ele = document.querySelector("#" + divId);
  ele.style.backgroundColor = "black";
}
ele = document.getElementById("div_1");
ele.addEventListener("click", () => cambiarColorFondo("div_1"));

ele = document.getElementById("div_2");
ele.addEventListener("click", () => cambiarColorFondo("div_2"));

ele = document.getElementById("div_3");
ele.addEventListener("click", () => cambiarColorFondo("div_3"));

ele = document.getElementById("div_4");
ele.addEventListener("click", () => cambiarColorFondo("div_4"));

/* const div_1 = document.querySelector("#div_1");
div_1.addEventListener("click", () => {
  div_1.style.backgroundColor = "black";
});

const div_2 = document.querySelector("#div_2");
div_2.addEventListener("click", () => {
  div_2.style.backgroundColor = "black";
});

const div_3 = document.querySelector("#div_3");
div_3.addEventListener("click", () => {
  div_3.style.backgroundColor = "black";
});

const div_4 = document.querySelector("#div_4");
div_4.addEventListener("click", () => {
  div_4.style.backgroundColor = "black";
}); */
