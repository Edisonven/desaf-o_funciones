// función reutilizable

function cambiarColorFondo(divId) {
  const ele = document.querySelector("#" + divId);
  ele.style.backgroundColor = "black";
}
let div1 = document.getElementById("div_1");
div1.addEventListener("click", () => cambiarColorFondo("div_1"));

let div2 = document.getElementById("div_2");
div2.addEventListener("click", () => cambiarColorFondo("div_2"));

let div3 = document.getElementById("div_3");
div3.addEventListener("click", () => cambiarColorFondo("div_3"));

let div4 = document.getElementById("div_4");
div4.addEventListener("click", () => cambiarColorFondo("div_4"));

//función no reutilizable

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
