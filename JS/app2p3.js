function setup() {
    createCanvas(800, 600);
}

let x = 27;
let y = 300;

let r = 0;
let g = 0;
let b = 155;

function draw() {
    background(200);
    fill(r, g, b)
    circle(x, y, 50);

    if (x > 780) {
        x = 27;
        r = random(255);
        g = random(255);
        b = random(255);
    } else {
        if (x < 780) {
            x += 5;
        }
    }
}