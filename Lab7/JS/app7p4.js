let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");

function Calculate() {
    let xDiffs = x2.value - x1.value;
    let yDiffs = y2.value - y1.value;
    let distance = Math.sqrt(xDiffs * xDiffs + yDiffs * yDiffs);
    document.getElementById("h1").innerHTML = "The distance between the point (" + x1.value + ", " + y1.value + ")" + " and the point (" + x2.value + ", " + y2.value + ") is: " + distance + ".";
    console.log("The distance between the point (" + x1.value + ", " + y1.value + ")" + " and the point (" + x2.value + ", " + y2.value + ") is: " + distance + ".");
}