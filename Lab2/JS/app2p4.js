function setup() {
    createCanvas(800, 600);
}

let x = 150;
let y = 150;

let speedX = 6;
let speedY = 2;

let size = 25;

let r = 0;
let g = 0;
let b = 155;

function draw() {
    background(200);
    fill(r, g, b)
    circle(x, y, size * 2);
    x += speedX;
    y += speedY;
    if (x > (width - size) || x < size) {
        speedX = -speedX;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    if (y > (height - size) || y < size) {
        speedY = -speedY;
        r = random(255);
        g = random(255);
        b = random(255);
    }
}