const ele = document.getElementById("ele1");
function pintar(color) {
  ele.style.backgroundColor = color;
}
pintar("green");

const bgColor = function (color) {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  bgColor("yellow");
});
