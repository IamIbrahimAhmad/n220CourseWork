function setup() {
    createCanvas(800, 600);
    background(150);
}


function draw() {
    let x = 15;
    let y = 15;
    for (i = 0; i < 4; i++) {
        for (j = 0; j <= i; j++) {
            fill("red")
            square(x, y, 50);
            x += 55;
        }
        x = 15;
        y += 55;
    }
}