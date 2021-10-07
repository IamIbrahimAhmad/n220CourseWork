function setup() {
    createCanvas(1000, 1000);
    frameRate(60);
}

let shape = {
    x: 750,
    y: 125,
    size: 50,
    speedX: 15,
    speedY: 10
}

let r = 0;
let g = 0;
let b = 155;

function draw() {
    background(190);
    fill(r, g, b);
    circle(shape.x, shape.y, shape.size);

    shape.x += shape.speedX;
    shape.y += shape.speedY;

    if (shape.x > (width - shape.size) || shape.x < shape.size) {
        shape.speedX = -shape.speedX;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    if (shape.y > (height - shape.size) || shape.y < shape.size) {
        shape.speedY = -shape.speedY;
        r = random(255);
        g = random(255);
        b = random(255);
    }
}