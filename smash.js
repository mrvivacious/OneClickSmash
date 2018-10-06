// var btns = document.getElementsByTagName("button");
var btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    alert(this);
  });
}
