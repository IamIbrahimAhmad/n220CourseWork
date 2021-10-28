let txt = document.getElementById("txt");
let h1 = document.getElementById("h1");

function Clean() {
    removing();
}

function removing() {
    txt = txt.value;
    h1.innerHTML = txt.replace(/#/gi, "");
}