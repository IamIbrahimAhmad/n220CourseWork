let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");

function Calculate() {
    let xDiffs = parseFloat(x2.value) - parseFloat(x1.value);
    let yDiffs = parseFloat(y2.value) - parseFloat(y1.value);
    let distance = Math.sqrt(xDiffs * xDiffs + yDiffs * yDiffs);
    document.getElementById("h1").innerHTML = "The distance between the point (" + x1.value + ", " + y1.value + ")" + " and the point (" + x2.value + ", " + y2.value + ") is: " + distance + ".";
    console.log("The distance between the point (" + x1.value + ", " + y1.value + ")" + " and the point (" + x2.value + ", " + y2.value + ") is: " + distance + ".");
}