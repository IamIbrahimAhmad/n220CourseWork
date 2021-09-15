function setup() {
    createCanvas(800, 600);
    background(150);
}

let count = 1;
let x = 20;

function draw() {
    while (count <= 25) {
        if (count % 3 == 0 && count % 5 != 0) {
            fill("purple")
            circle(x, 300, 25);
            x += 30;
            count++;
        } else if (count % 5 == 0 && count % 3 != 0) {
            fill("green")
            square(x - 12, 287, 25);
            x += 30;
            count++;
        } else if (count % 3 == 0 && count % 5 == 0) {
            fill("blue")
            square(x - 12, 287, 25);
            x += 30;
            count++;
        } else {
            fill("black")
            circle(x, 300, 25);
            x += 30;
            count++;
        }
    }
}