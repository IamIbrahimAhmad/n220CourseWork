function setup() {
    createCanvas(1000, 1000);
    frameRate(60);
}

let shape1 = {
    x: 750,
    y: 125,
    size: 25,
    r: 0,
    g: 0,
    b: 155,
    speedX: 15,
    speedY: 10
}

let shape2 = {
    x: 500,
    y: 650,
    size: 25,
    r: 155,
    g: 0,
    b: 0,
    speedX: 15,
    speedY: 20
}

let shape3 = {
    x: 350,
    y: 750,
    size: 25,
    r: 0,
    g: 155,
    b: 0,
    speedX: 5,
    speedY: 10
}

function draw() {
    background(190);
    fill(shape1.r, shape1.g, shape1.b);
    circle(shape1.x, shape1.y, shape1.size);
    fill(shape2.r, shape2.g, shape2.b);
    circle(shape2.x, shape2.y, shape2.size);
    fill(shape3.r, shape3.g, shape3.b);
    circle(shape3.x, shape3.y, shape3.size);

    shape1.x += shape1.speedX;
    shape1.y += shape1.speedY;
    shape2.x += -shape2.speedX;
    shape2.y += -shape2.speedY;
    shape3.x += shape3.speedX;
    shape3.y += shape3.speedY;

    if (shape1.x > (width - shape1.size) || shape1.x < shape1.size) {
        shape1.speedX = -shape1.speedX;
        shape1.r = random(255);
        shape1.g = random(255);
        shape1.b = random(255);
    }
    if (shape1.y > (height - shape1.size) || shape1.y < shape1.size) {
        shape1.speedY = -shape1.speedY;
        shape1.r = random(255);
        shape1.g = random(255);
        shape1.b = random(255);
    }
    if (shape2.x > (width - shape2.size) || shape2.x < shape2.size) {
        shape2.speedX = -shape2.speedX;
        shape2.r = random(255);
        shape2.g = random(255);
        shape2.b = random(255);
    }
    if (shape2.y > (width - shape2.size) || shape2.y < shape2.size) {
        shape2.speedY = -shape2.speedY;
        shape2.r = random(255);
        shape2.g = random(255);
        shape2.b = random(255);
    }
    if (shape3.x > (width - shape3.size) || shape3.x < shape3.size) {
        shape3.speedX = -shape3.speedX;
        shape3.r = random(255);
        shape3.g = random(255);
        shape3.b = random(255);
    }
    if (shape3.y > (height - shape3.size) || shape3.y < shape3.size) {
        shape3.speedY = -shape3.speedY;
        shape3.r = random(255);
        shape3.g = random(255);
        shape3.b = random(255);
    }
}