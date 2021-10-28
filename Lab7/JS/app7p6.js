let rNum = Math.round(Math.random() * 20);
let h1 = document.getElementById("h1");

function check() {
    let num = parseInt(document.getElementById("num").value);
    if (num > 20 || num <= 0) {
        return h1.innerHTML = "Please enter a number between 1 and 20.";
    } else if (num === rNum) {
        return h1.innerHTML = "Right.";
    } else if (num !== rNum) {
        if (num > rNum) {
            return h1.innerHTML = "Wrong, your number is greater. Guess again.";
        } else if (num < rNum) {
            return h1.innerHTML = "Wrong, your number is smaller. Guess again.";
        }
    }
}