function setup() {
    createCanvas(800, 600);
    background(150);
}

let size = [];
let x = 100;
let count = 0;
let r;
let g;
let b;

//size will get 5 random numbers
for (let i = 0; i < 5; i++) {
    size[i] = Math.floor(Math.random() * 70) + 70;
    console.log(size[i]);
}

function draw() {
    //it will draw a circle for each amount in the size array
    while (count < 5) {
        r = random(255);
        g = random(255);
        b = random(255);
        fill(r, g, b);
        circle(x, 300, size[count]);
        x += 150;
        count++;
    }
}