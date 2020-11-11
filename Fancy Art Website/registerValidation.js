var errorMsg = document.getElementById("errorMsg");


function validateName(){
    var name = document.getElementById("fullName").value;

    if(name.length == 0){
        errorMsg.innerHTML = "Full name must be filled";
        return true;
    }
    else if(name.length < 5){
        errorMsg.innerHTML = "Full name must be at least 5 characters"
    }
    else{
        for(var i=0;i<name.length;i++){
            if(name.charAt(i)!= ' ' && !(name.charAt(i) >= 'a' && name.charAt(i) <= 'z') && !(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') ){
                errorMsg.innerHTML = "Full name must be alphabets only";
                return true;
            }
        }
    }
    return false;
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var count = 0;
    var j = email.length-4;
    var k = email.length-3;
    var l = email.length-2;
    var p = email.length-1;
    count=0;
    for(var i=0;i<email.length;i++){
        if(email.charAt(i)=='@'){
            count++;
        }
    }
    if(email.length == 0){
        errorMsg.innerHTML = "E-mail must be filled";
        return true;
    }
    else if(count==0){
        errorMsg.innerHTML = "E-mail must contain '@'";
        return true;
    }
    else if(email.charAt(j)!='.' && email.charAt(k)!='c' && email.charAt(l)!='o' && email.charAt(p)!='m'){
        errorMsg.innerHTML = "E-mail must ends with '.com'"
        return true;
    }

    
    return false;
  
}

function validatePass(){
    var pas = document.getElementById("formpass").value;
    if(pas.length==0){
        errorMsg.innerHTML = "Password must be filled";
        return true;
    }
    else if(pas.length<8){
        errorMsg.innerHTML = "Password must be at least 8 characters."
        return true;
    }
    return false;
}

function validateCPass(){
    var cPass = document.getElementById("cPassword").value;
    var pas = document.getElementById("formpass").value;
    var f = 0;
    for(var i=0;i<pas.length;i++){
        if(pas.charAt(i)!=cPass.charAt(i)){
            f++;
        }
    }
    if(cPass.length==0){
        errorMsg.innerHTML = "Confirm password must be filled"
        return true;
    }
    else if(f>0){
        errorMsg.innerHTML = "Confirm password is not the same as password."
        return true;
    }
    return false;
}

function validateCountry(){
    var co = document.getElementById("countryList").value;
    if(co == "o0"){
        errorMsg.innerHTML = "Please choose your country";
        return true;
    }
    return false;

}

function validateAddress(){
    var addr = document.getElementById("formaddress").value;
    var space = 0;

    for(var i=0;i<addr.length;i++){
        if(addr.charAt(i)==' '){
            space++;
        }
    }

    if(addr.length==0){
        errorMsg.innerHTML = "Address must be filled";
        return true;
    }
    else if(space<2){
        errorMsg.innerHTML = "Address must be minimal 3 words";
        return true;
    }
    return false;
}

function validateArtPref(){
    var abstract = document.getElementById("abstract").checked;
    var pop = document.getElementById("pop").checked;
    var modern = document.getElementById("modern").checked;
    var surr = document.getElementById("surr").checked;
    var other = document.getElementById("other").checked;

    if(!abstract && !pop && !modern && !surr && !other){
        errorMsg.innerHTML = "You must choose your art preferences";
        return true;
    }
    return false;
}

function validateAll(){
    if(validateName()){
        return;
    }
    else if(validateEmail()){
        return;
    }
    else if(validatePass()){
        return;
    }
    else if(validateCPass()){
        return;
    }
    else if(validateCountry()){
        return;
    }
    else if(validateAddress()){
        return;
    }
    else if(validateArtPref()){
        return;
    }
    else{
        errorMsg.innerHTML = "";
        alert("Thankyou! You have succesfully registered.");
    }
}

function resetForm(){
    alert("Form has been resetted.");
    errorMsg.innerHTML = "";
    
}