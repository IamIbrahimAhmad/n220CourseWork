function setup() {
    createCanvas(800, 600);
    background(150);
}

let size = 450;

function draw() {
    while (size >= 0) {
        noFill();
        circle(400, 300, size);
        size -= 10;
    }
}