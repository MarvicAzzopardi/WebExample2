function validateForm(){

    // This is a single line comment

    /*
        This is 
        a multiline
        comment
    */

    var errors = "";

    // Get value off element and storing it in variable
    var fullName = document.getElementById('fullName').value; 
    // Check if fullName variable is empty
    if(fullName==""){
        //alert("Please enter Full Name.");
        // Block action from getting executed
        //return false; 
        errors += "<li>Please enter Full Name.</li>";
        document.getElementById('fullName').classList.add('inputError');
    }
    else{
        document.getElementById('fullName').classList.remove('inputError');
    }

    var username = document.getElementById ('username').value;
    if(username==""){
        //alert("Please enter Username.");
        //return false;
        errors += "<li>Please enter Username.</li>";
        document.getElementById('username').classList.add('inputError');
    }
    else{
        document.getElementById('username').classList.remove('inputError');
    }

    var password = document.getElementById ('password').value;
    if (password==""){
        //alert("Please enter Password.");
        //return false;
        errors += "<li>Please enter Password.</li>";
        document.getElementById('password').classList.add('inputError');
    }
    else{
        document.getElementById('password').classList.remove('inputError');
    }

    var nationality = document.getElementById('nationality').value;
    if(nationality=="0"){
        //alert("Please select nationality.");
        //return false; 
        errors += "<li>Please enter Nationality.</li>";
        document.getElementById('nationality').classList.add('inputError');
    }
    else{
        document.getElementById('nationality').classList.remove('inputError');
    }

    if(errors!=""){
        document.getElementById('errorList').innerHTML = errors;
        return false;
    }
    else{
        document.getElementById('errorList').innerHTML = "";
        return true;
    }


}

function resetForm(){
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('fullName').classList.remove('inputError');
    document.getElementById('username').classList.remove('inputError');
    document.getElementById('password').classList.remove('inputError');
    document.getElementById('nationality').classList.remove('inputError');
}

