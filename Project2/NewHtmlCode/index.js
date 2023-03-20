function IsValidEmail(email) {
    
    
    if (email.indexOf("@") == -1) {
        return false;
    }
    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;
    
    if (dot == -1 || dot < 2 || dotCount > 2) {
        return false;
    }
    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }
    return true;
};
function ValidateEmail() {
    var email = document.getElementById("email").value;


    if (!IsValidEmail(email)) {
        alert("Invalid email address");
        return false;
    }
}


function validatephn() {
    no = document.getElementById('phone').value
    if (no.length != 10) {
        alert("Enter a valid phn no")
        return false;
    } else {
        return true;
    }
}

function validatepass() {
    pass1 = document.getElementById('pwd').value
    pass2 = document.getElementById('pwd-repeat').value
    var errors = []
    if (pass1 != pass2) {
        errors.push("Password does not match")
        
    }
    if (pass1.length < 8) {
        errors.push("Password length should not be less than 8")
        
    }
    if (pass1.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one lowercase letter.")
        
    }
    if (pass1.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one uppercase letter.")
        
    }
    if (pass1.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.")
        
    }
    if (pass1.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        errors.push("Your password must contain at least one special character.")
        
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
      }
    else {
        return true;
    }
}



