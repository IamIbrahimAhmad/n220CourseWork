//getting username and password
let userName = document.getElementById("userName");
let password = document.getElementById("password");

//function for log in
function logIn() {
    if (userName.value === "Username" && password.value === "Password") {
        document.getElementById("h1").innerHTML = "Success";
        console.log("Success")
    } else {
        document.getElementById("h1").innerHTML = "Wrong information";
        console.log("Wrong information")
    }
}