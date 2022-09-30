function validation(){
    var first = document.getElementById("FirstName").value;
    var last = document.getElementById("LastName").value;
    var mail = document.getElementById("Email").value;
    var pass = document.getElementById("Password").value;
    var zip = document.getElementById("ZipCode").value;

    if(first == ""){
        document.getElementById("name").innerHTML = "First Name Reqiured ";
        return false;
    }
    
    if(last == ""){
        document.getElementById("namee").innerHTML = "Last Name Reqiured ";
        return false;
    }
    if(mail == ""){
        document.getElementById("mail").innerHTML = " Email Reqiured " ;
        return false;
    }
    
    if(pass == ""){
        document.getElementById("pass").innerHTML = "Password Reqiured  ";
        return false;
    }
    
    if(zip == ""){
        document.getElementById("zip").innerHTML = "ZipCode Reqiured ";
        return false;
    }
}