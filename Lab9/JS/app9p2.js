let txt;
let words;
let count;
let found;

let h1 = document.getElementById('h1');

function Check() {
    txt = document.getElementById("txt").value;
    words = [];
    count = 0;
    found = false;
    words = txt.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if (words[i] === "clear" || words[i] === "water" || words[i] === "tires") {
            found = true;
            count++;
        }
    }

    if (found && count === 1) {
        h1.innerHTML = count + " bad word was found."
    } else if (found && count > 1) {
        h1.innerHTML = count + " bad words were found."
    } else if (!found) {
        h1.innerHTML = "No bad word was found."
    }

    document.getElementById("txt").value = "";
}