

function validateUsername() {
    var myUsername = document.getElementById('Username').value;
    var regex  = /^(?=.*[a-z])(?=.*[0-9])(?=.*[_-]){8,12}.+$/;
    console.log(myUsername);
    if(myUsername.length <=7 , >=12 ){
        alert("minimal jumlah Username adalah 8-12 karakter"); 
        return false;
    }else if(!regex.test(myUsername)) {
        alert("Username tidak boleh memiliki huruf besar,simbol selain - dan _ ");
        return false;
    }else{
        alert("username valid");
    }
}
function showUsername() {
  var x = document.getElementById("Username");
  if (x.type === "Username") {
    x.type = "text";
  } else {
    x.type = "Username";
  }
}

function validatePassword() {
    var myPassword = document.getElementById('Password').value;
    var regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-]){9,}.+$/;
    console.log(myPassword);
    if(myPassword.length <=7 , >=12 ){
        alert("minimal jumlah Password adalah 9 Karakter"); 
        return false;
    }else if(!regex.test(myPassword)) {
        alert("Password merupakan kombinasi antara karakter dan juga 1 simbol dengan 1 angka");
        return false;
    }else{
        alert("Password valid");
    }
}
function showPassword() {
  var x = document.getElementById("Password");
  if (x.type === "Password") {
    x.type = "text";
  } else {
    x.type = "Password";
  }
}
