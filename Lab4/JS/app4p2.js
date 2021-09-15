function setup() {
    createCanvas(1000, 1000);
    frameRate(5);
}

let locationY = []
let y = 2.5;

function draw() {
    background("lightblue");
    locationY.push(y + frameCount);
    for (var i = 0; i < 1000; i += 10) {
        let x = Math.floor(Math.random() * 1000) + 1;
        circle(x, locationY[i], 7.5);
    }
}