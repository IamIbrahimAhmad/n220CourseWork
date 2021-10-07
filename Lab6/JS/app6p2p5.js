function setup() {
    createCanvas(1000, 1000);
    frameRate(60);
}

let shape = {
    x: 15,
    y: 15,
    size: 25,
    r: 0,
    g: 0,
    b: 155,
    speedX: 20
}

let shape0 = {
    x: 985,
    y: 985,
    size: 25,
    r: 155,
    g: 0,
    b: 0,
    speedX: 20
}

let shape1 = {
    x: 250,
    y: 500,
    size: 25,
    r: 0,
    g: 0,
    b: 155,
    speedX: 10,
    speedY: 10
}

let shape2 = {
    x: 500,
    y: 250,
    size: 25,
    r: 155,
    g: 0,
    b: 0,
    speedX: 10,
    speedY: 10
}

function draw() {
    background(190);
    fill(shape.r, shape.g, shape.b);
    circle(shape.x, shape.y, shape.size);
    fill(shape0.r, shape0.g, shape0.b);
    circle(shape0.x, shape0.y, shape0.size);
    fill(shape1.r, shape1.g, shape1.b);
    circle(shape1.x, shape1.y, shape1.size);
    fill(shape2.r, shape2.g, shape2.b);
    circle(shape2.x, shape2.y, shape2.size);

    shape.x += shape.speedX;
    shape.y += shape.speedX;
    shape0.x += -shape0.speedX;
    shape0.y += -shape0.speedX;
    shape1.x += shape1.speedX;
    shape1.y += shape1.speedY;
    shape2.x += shape2.speedX;
    shape2.y += shape2.speedY;

    if (shape.x > (width - shape.size) || shape.x < shape.size) {
        shape.speedX = -shape.speedX;
        shape.r = random(255);
        shape.g = random(255);
        shape.b = random(255);
    }

    if (shape0.x > (width - shape0.size) || shape0.x < shape0.size) {
        shape0.speedX = -shape0.speedX;
        shape0.r = random(255);
        shape0.g = random(255);
        shape0.b = random(255);
    }

    if (shape1.y >= 1000 || shape1.y < shape1.size) {
        shape1.speedY = -shape1.speedY
        shape1.r = random(255);
        shape1.g = random(255);
        shape1.b = random(255);
    } else if (shape1.x >= 1000 || shape1.x < shape1.size) {
        shape1.speedX = -shape1.speedX
        shape1.r = random(255);
        shape1.g = random(255);
        shape1.b = random(255);
    }

    if (shape2.y >= 1000 || shape2.y < shape2.size) {
        shape2.speedY = -shape2.speedY
        shape2.r = random(255);
        shape2.g = random(255);
        shape2.b = random(255);
    } else if (shape2.x >= 1000 || shape2.x < shape2.size) {
        shape2.speedX = -shape2.speedX
        shape2.r = random(255);
        shape2.g = random(255);
        shape2.b = random(255);
    }
}