function setup() {
    createCanvas(1000, 1000);
    fill(r, g, b);
}

let locationX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let locationY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let snakeBody1 = locationX + 2;
let snakeBody2 = locationY + 2;

let r;
let g;
let b;

function draw() {
    background("black");
    if (locationX.length > 10 && locationY.length < 10) {
        locationX.shift();
        fill(r, g, b);
    } else if (locationX.length < 10 && locationY.length > 10) {
        locationY.shift();
        fill(r, g, b);
    } else if (locationX.length > 10 && locationY.length > 10) {
        locationX.shift();
        locationY.shift();
        fill(r, g, b);
    }
    locationX.push(mouseX);
    locationY.push(mouseY);
    for (var i = 0; i < locationX.length; i++) {
        circle(locationX[i], locationY[i], i * 5);

        r = random(255);
        g = random(255);
        b = random(255);
    }
}