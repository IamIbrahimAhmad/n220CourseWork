let h1 = document.getElementById("h1");

function Gen() {
    getNumber();
}

function getNumber() {
    h1.innerHTML = "Your number is: " + Math.round(Math.random() * 10)
}