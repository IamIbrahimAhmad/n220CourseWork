function setup() {
    createCanvas(800, 600);
    background(150);
}

let color = ["brown", "yellow", "pink"];
let x = 200;
let count = 0;

function draw() {
    while (count <= 2) {
        fill(color[count])
        rect(x, 150, 100, 300);
        x += 100;
        count++;
    }
}