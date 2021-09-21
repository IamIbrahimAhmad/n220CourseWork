function setup() {
    createCanvas(1000, 1000);
}

let locationY = [];
let locationX = [];

let r;
let g;
let b;

function draw() {
    background(50);
    noStroke();

    for (var i = 0; i < locationY.length; i++) {
        r = random(255);
        g = random(255);
        b = random(255);

        fill(r, g, b);
        rect(locationX[i], locationY[i], 50, 25);

        locationY[i] += 1;
    }
}

function mousePressed() {
    locationY.push(mouseY);
    locationX.push(mouseX);
    rect(mouseX, mouseY, 50, 25);
}