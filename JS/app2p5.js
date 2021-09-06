function setup() {
    createCanvas(800, 600);
    frameRate(60);
}

let r = 0;
let g = 0;
let b = 155;

let size = 1;

function draw() {
    background(190);
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    circle(350, 270, size);
    size = frameCount;
    if (size >= 200) {
        size = 1;
    }
}