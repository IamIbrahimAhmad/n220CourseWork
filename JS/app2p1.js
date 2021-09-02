function setup() {
    createCanvas(1000, 1000);
}

function draw() {

}

let r;
let g;
let b;
let count = 0;


document.getElementById("count").innerHTML = count.toString();

function mouseClicked() {
    r = random(255);
    g = random(255);
    b = random(255);

    fill(r, g, b);
    circle(mouseX, mouseY, 50);
    color += 25;
    if (color >= 255) {
        color = 0;
    }
    count++;
    document.getElementById("count").innerHTML = count.toString();
    console.log(count);
    return false;
}