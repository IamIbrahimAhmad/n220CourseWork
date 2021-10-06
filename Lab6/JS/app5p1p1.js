let movie = [{
    Name: "Justice League Snyder cut",
    Year: 2021,
    Time: "4 hours and 2 minutes"
}, {
    Name: "Man of Steel",
    Year: 2013,
    Time: "2 hours and 23 minutes"
}, {
    Name: "Batman V Superman: Dawn Of Justice",
    Year: 2016,
    Time: "2 hours and 31 minutes"
}]

document.body.style.backgroundColor = "gold";

for (let i = 0; i <= 2; i++) {
    document.getElementById("movie" + i).style.color = "blue";
    document.getElementById("movie" + i).style.fontSize = "45px";
    document.getElementById("movie" + i).style.fontFamily = "Brush Script MT, cursive";
    document.getElementById("movie" + i).innerHTML = "Movie Name: " + movie[i].Name + ", Year: " + movie[i].Year.toString() + ", Time: " + movie[i].Time;
    if (i === 1) {
        document.getElementById("movie" + i).style.color = "red";
        document.getElementById("movie" + i).style.fontSize = "35px";
        document.getElementById("movie" + i).style.fontFamily = "OCR A Std, monospace";
    }
}