document.onkeydown=function(event){
  if(event.keyCode==116){
      event.preventDefault();

  }
}
// this function validate the name and check if it is not number(character) or empty
function validteName(username) {
  if (isFinite(username) || username == "") {
    return false;
  } else return true;
}
// this function validate the age(not empty, is number and in between 10 and 60)
function validateAge(age) {
  if (isNaN(age) || age == "" || age > 60 || age < 10) {
    return false;
  } else return true;
}
// validate email function (reg ex is used)

function ValidateEmail(email) {
  var regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (regex.test(email)) {
    return true;
  }
  return false;
}


function validatePassword() {
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");
  if (
    pass1.value == pass2.value &&
    pass1.value >= 4 &&
    pass1.value != "" &&
    pass2.value >= 8 &&
    pass2.value != ""
  )
    return true;
  else alert("pass do not match or not match form ");
}

var username;
var age;
var email;
document.getElementById("form").addEventListener("submit", function (e) {
  if (!validteName(document.getElementById("firstname").value)) {
    e.preventDefault();
    document.getElementById("nameError1").style.display = "inline";
  } else if (!validteName(document.getElementById("lastname").value)) {
    e.preventDefault();
    document.getElementById("nameError2").style.display = "inline";
    document.getElementById("nameError1").style.display = "none";
  } else if (!validateAge(document.getElementById("age").value)) {
    e.preventDefault();
    document.getElementById("ageError").style.display = "inline";
    document.getElementById("nameError1").style.display = "none";
    document.getElementById("nameError2").style.display = "none";
  } else if (!ValidateEmail(document.getElementById("email").value)) {
    e.preventDefault();
    document.getElementById("emailError").style.display = "inline";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("nameError1").style.display = "none";
    document.getElementById("nameError2").style.display = "none";
  } else if (!validatePassword(document.getElementById("pass1").value)) {
    e.preventDefault();
    document.getElementById("Error1").style.display = "inline";
    document.getElementById("Error2").style.display = "none";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("nameError1").style.display = "none";
    document.getElementById("nameError2").style.display = "none";
  } else if (!validatePassword(document.getElementById("pass2").value)) {
    e.preventDefault();
    document.getElementById("Error2").style.display = "inline";
    document.getElementById("Error1").style.display = "none";
    document.getElementById("ageError").style.display = "none";
    document.getElementById("nameError1").style.display = "none";
    document.getElementById("nameError2").style.display = "none";
  }
  else{
    localStorage.setItem("email",document.getElementById("email").value)
    localStorage.setItem("password",document.getElementById("pass1").value)
    localStorage.setItem("Fname",document.getElementById("firstname").value)
    localStorage.setItem("Lname",document.getElementById("lastname").value)


  }
});


