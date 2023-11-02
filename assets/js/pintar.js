function pintar(color) {
  const ele = document.getElementById("ele1");
  ele.style.backgroundColor = color;
}

pintar("green");

ChangeBgColorOfAnElement = function (elementId, color) {
  const ele = document.getElementById(elementId);
  ele.style.backgroundColor = color;
};

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => {
  ChangeBgColorOfAnElement("ele1", "yellow");
});
