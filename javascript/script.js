function validateName(){
    var name = document.getElementById("name").value;
    var identifier = document.getElementById("form-validation-name");
    if (name==""){
        identifier.style.display = "block";
        return false;
    }
    identifier.style.display = "none";
    return true;
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var identifier = document.getElementById("form-validation-email");
    if (email==""){
        identifier.style.display = "block";
        return false;
    }
    identifier.style.display = "none";
    return true;
}

function verifyEmail(){
    var email = document.getElementById("email").value;
    var identifier = document.getElementById("form-verify-email");
    var parts = email.split("@");
    if (parts.length != 2){
        identifier.style.display = "block";
        return false;
    }
    var domain = parts[1].split(".");
    if (domain.length >= 2 && domain[0].length > 0 && domain[1].length > 0){
        identifier.style.display = "none";
        return true;
    }
    identifier.style.display = "block";
    return false;
}

function validateForm(){
    var validName = validateName();
    var validEmail = validateEmail();
    if (validEmail){
        var emailCheck = verifyEmail();
    }
    else{
        var emailCheck = false;
    }
    return validateName && validateEmail && emailCheck;
}