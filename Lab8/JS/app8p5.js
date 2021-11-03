let clicked = false;

function changeStyle(x) {
    if (!clicked) {
        document.getElementById("div" + x).style.backgroundColor = "blue";
        document.getElementById("div" + x).style.width = "85px"
        clicked = !clicked;
    } else if (clicked) {
        document.getElementById("div" + x).style.backgroundColor = "red";
        document.getElementById("div" + x).style.width = "100px"
        clicked = !clicked;
    }
}