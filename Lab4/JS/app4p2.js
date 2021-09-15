function setup() {
    createCanvas(1000, 1000);
    frameRate(5);
}

let x = [];

for (let i = 0; i < 1000; i++) {
    x[i] = Math.floor(Math.random() * 1000) + 1;
}

let locationY = [];

function draw() {
    background("lightgrey");

    for (let i = 0; i < locationY.length; i++) {
        circle(x[i], locationY[i], 7.5);
        locationY[i] = locationY[i] + 5;
    }
    //when it reach 10 it repeats 
    if (frameCount === 10) {
        frameCount = 0;
        //and it push y 0
        locationY.push(0);
        if (locationY.length > 150) {
            locationY.shift();
        }
    }
}