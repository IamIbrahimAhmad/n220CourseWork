function setup() {
    createCanvas(1000, 1000);
    frameRate(60);
}

let shape = {
    x: 750,
    y: 500,
    size: 100,
    r: 0,
    g: 0,
    b: 155,
    speedX: 10
}

function draw() {
    background(190);
    fill(shape.r, shape.g, shape.b);
    circle(shape.x, shape.y, shape.size);

    shape.x += shape.speedX;

    if (shape.x > (width - shape.size) || shape.x < shape.size) {
        shape.speedX = -shape.speedX;
        shape.r = random(255);
        shape.g = random(255);
        shape.b = random(255);
    }
}