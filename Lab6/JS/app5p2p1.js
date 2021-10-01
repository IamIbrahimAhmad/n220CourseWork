function setup() {
    createCanvas(1000, 1000);
    frameRate(60);
}

let shape = {
    width: 100,
    height: 100,
    color: "blue",
    x: 500,
    y: 500
}

function draw() {
    background(190);
    fill(shape.color);
    circle(shape.x, shape.y, shape.width);
}