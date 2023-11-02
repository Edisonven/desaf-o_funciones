const ele = document.getElementById("ele1");
function pintar(color) {
  ele.style.backgroundColor = color;
}
pintar("green");

const ChangeBgColorOfAnElement = function (color) {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  ChangeBgColorOfAnElement("yellow");
});
