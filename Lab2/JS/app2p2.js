function setup() {
    createCanvas(400, 300);
}

let color = "black";

function draw() {
    background(150);
    if (mouseX < 200) {
        color = "blue"
        fill(color);
        circle(mouseX, mouseY, 25)
    } else {
        color = "red"
        fill(color);
        circle(mouseX, mouseY, 25)
    }
}