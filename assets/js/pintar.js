function pintar(color) {
  const ele = document.getElementById("ele1");
  ele.style.backgroundColor = color;
}
pintar("green");

const ele = document.getElementById("ele1");
const ChangeBgColorOfAnElement = function (color) {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  ChangeBgColorOfAnElement("yellow");
});
