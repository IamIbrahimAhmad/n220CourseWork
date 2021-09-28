for (var i = 1; i <= 15; i++) {
    // to creat a div
    var div = document.createElement("div");

    //height and width for div
    div.style.height = "100px";
    div.style.width = "100px";

    if (i === 6) {
        div.style.clear = "both";
        div.style.float = "left";
    } else if (i === 11) {
        div.style.clear = "both";
        div.style.float = "left";
    } else {
        div.style.float = "left";
    }

    if (i % 2 !== 0) {
        div.style.backgroundColor = "blue";
    } else if (i % 2 === 0) {
        div.style.backgroundColor = "red";
    }

    document.body.style.backgroundColor = "gold";

    document.body.appendChild(div);
}