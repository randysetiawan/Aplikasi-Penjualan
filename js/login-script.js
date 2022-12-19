function loginValidation() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "admin@email.com") {
        if(password == "admin") {
            return true;
        } else{
            alert("Email atau password anda salah");
            return false;
        }
    } else{
        alert("Email atau password anda salah");
        return false;
    }
}