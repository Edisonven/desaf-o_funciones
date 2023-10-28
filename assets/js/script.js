pintar = function (color = "green") {
  const ele = document.getElementById("ele1");
  ele.style.backgroundColor = color;
};
pintar("green");

const ele = document.getElementById("ele1");
ele.addEventListener("click", (color) => {
  ele.style.backgroundColor = "yellow";
});
