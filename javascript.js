let attempt = 3;
function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "Maja" && password == "123"){
alert ("Login successfully");
window.location = "stranica3.html";
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

function check() {
    let msg, x, y;
    msg = document.getElementById("msg");
    msg.innerHTML = "";
    x = document.getElementById("username").value;
	y = document.getElementById("password").value;
    try {
        if(x == "" || y == "")  throw "You must insert something!";   
        if(x.length < 5 || y.length < 5)    throw "Username or password is too small!";
        if(x.length > 10 || y.length > 10)   throw "Username or password is too big";
    }
    catch(err) {
        alert("Check: " + err);
    }
}