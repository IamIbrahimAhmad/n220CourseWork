let dev = document.getElementById('square');
let divHeight = 100;
let divWidth = 100;

//this is to change the div height and width
dev.style.height = divHeight.toString() + "px";
dev.style.width = divWidth.toString() + "px";
dev.style.cursor = 'pointer';
dev.style.backgroundColor = "darkgreen";
document.body.style.backgroundColor = "gold";

function increaseSquare() {
    //to increase the height and width
    divHeight = divHeight + (divHeight * 0.1);
    divWidth = divWidth + (divWidth * 0.1);

    dev.style.height = divHeight.toString() + "px";
    dev.style.width = divWidth.toString() + "px";
}