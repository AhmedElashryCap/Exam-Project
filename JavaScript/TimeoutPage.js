history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

var corrects = sessionStorage.getItem("corrects");
var para = document.getElementsByTagName("p")[0];
var failImg = document.getElementById("fail");
var successImg = document.getElementById("success");
var Failtext = document.getElementsByClassName("failtext")[0]
var result = (corrects / 5) * 100;


para.innerHTML = `your result is ${result} %`;
if (result > 50) {
  successImg.style.display = "block";
  failImg.style.display = "none";
  Failtext.style.display="none"
} else {
  failImg.style.display = "block";
  successImg.style.display = "none";
  h2.style.display = "block";
}
