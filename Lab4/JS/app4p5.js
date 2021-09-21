function setup() {
    createCanvas(1000, 1000);
}

let locationX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let locationY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let snakeBody1 = locationX + 2;
let snakeBody2 = locationY + 2;

let color = "darkblue";
let backColor = "red";

function draw() {
    background(backColor);

    fill(color);
    if (locationX.length > 10 && locationY.length < 10) {
        locationX.shift();
        count = Math.floor(Math.random() * 2);
    } else if (locationX.length < 10 && locationY.length > 10) {
        locationY.shift();
    } else if (locationX.length > 10 && locationY.length > 10) {
        locationX.shift();
        locationY.shift();
    }
    if (mouseX <= 500 && mouseY <= 500) {
        color = "darkblue";
        backColor = "red";
    } else if (mouseX >= 500 && mouseY >= 500) {
        color = "darkgreen";
        backColor = "yellow";
    } else if (mouseX >= 500 && mouseY <= 500) {
        color = "darkred";
        backColor = "blue";
    } else if (mouseX <= 500 && mouseY >= 500) {
        color = "yellow";
        backColor = "green";
    }
    locationX.push(mouseX);
    locationY.push(mouseY);
    for (var i = 0; i < locationX.length; i++) {
        circle(locationX[i], locationY[i], i * 5);
    }
}