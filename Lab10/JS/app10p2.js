let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);

let div = document.getElementById("color");
let rgb = document.getElementById("rgb");

div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
rgb.innerHTML = "Current color: rgb(" + r + "," + g + "," + b + ")";

function change(event) {
    let color = event.target.getAttribute("data-color");
    let val = event.target.getAttribute("data-value")
    val = parseInt(val);

    if (r < 255 && color === "red") {
        r += val;
        if (r > 255) {
            r = 255;
        }
    } else if (g < 255 && color === "green") {
        g += val;
        if (g > 255) {
            g = 255;
        }
    } else if (b < 255 && color === "blue") {
        b += val;
        if (b > 255) {
            b = 255;
        }
    }

    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    rgb.innerHTML = "Current color: rgb(" + r + "," + g + "," + b + ")";
}