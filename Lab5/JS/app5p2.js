for (var i = 1; i <= 100; i++) {
    // to creat a div
    var div = document.createElement("div");

    //height and width for div
    div.style.height = "20px";
    div.style.width = "20px";

    //to move it to the left
    div.style.float = "left";

    //to generate differnet color
    div.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";

    document.body.style.backgroundColor = "gold";

    //this is to add the div to body
    document.body.appendChild(div);
}