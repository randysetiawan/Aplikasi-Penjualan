function registerValidation() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmationPassword = document.getElementById("confirmationPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var termsAndCondition = document.getElementById("termsAndCondition").checked;
    var nameNotification = document.getElementById("name");
    var addressNotification = document.getElementById("address");
    var birthdateNotification = document.getElementById("birthdate");
    var emailNotification = document.getElementById("email");
    var passwordNotification = document.getElementById("password");
    var confirmationPasswordNotification = document.getElementById("confirmationPassword");
    var termsAndConditionNotification = document.getElementById("termsAndCondition");
    alert("poppopopopoppop");
    if(password.length() < 8 || password.length() > 10) {
        passwordNotification.setCustomValidity('Password minimal 8 karakter dan maksimal 10 karakter');
        alert("QWEUQWEQWE");
        return false;
    } else {
        alert("aaaaaaaaaaaaaaaaaaa");
        return false;
    }
}