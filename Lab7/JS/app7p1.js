//getting first and last name 
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");

//print function
function Print() {
    document.getElementById("h1").innerHTML = "Hello, " + fName.value + " " + lName.value + "."
    console.log("Hello, " + fName.value + " " + lName.value + ".")
}