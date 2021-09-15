function setup() {
    createCanvas(400, 400);
}

let midX = 175;
let midY = 200;

function draw() {
    background(220);
    fill("black");
    rect(75, 100, 100, 200);
    fill("darkblue");
    rect(175, 100, 100, 200);
    fill("red");
    circle(midX, midY, 175);
    fill("white");
    circle(midX, midY, 125);
    fill("darkgreen");
    circle(midX, midY, 75);
    fill("gold");
}