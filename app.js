document.write("<h1>REGISTRATION FORM</h1>")

var userName = prompt("please enter your name");
var userEmail = prompt("please enter your email address");
var userPassword = prompt("please enter your password");
userConfirmPassword = prompt("please enter your confirm password");
if(userName!==""&&userEmail!==""&&userPassword!==""&&userConfirmPassword!==""){
    if(userPassword!==userConfirmPassword){
        alert("wrong password please try again")
    }
    else{
        alert("you are successfully registered")
    }
    
}
else{
    alert("please fill the input")

}
