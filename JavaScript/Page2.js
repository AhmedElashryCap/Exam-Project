document.onkeydown=function(event){
  if(event.keyCode==116){
      event.preventDefault();

  }
}
var password = localStorage.getItem("password");

var email = localStorage.getItem("email");

document.getElementById("form").addEventListener("submit", function (e) {
  var email_inp = document.getElementById("email");
  var pass_inp = document.getElementById("pass");

  if (email_inp.value === email) {
    if (pass_inp.value === password) {
    } else {
      alert("Password not match");
      e.preventDefault();
    }
  } else {
    alert("Email not match");
    e.preventDefault();
  }

  
});
