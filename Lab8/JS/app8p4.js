let translate = document.getElementById("translate");
let letters;
let vowel;
let indextVowel;
let fixedLetters;
let txtFinal;

let found = false;

function Translate() {
    getLetters();
}

function getLetters() {
    let letter = [];
    let txt = document.getElementById("txt").value;
    letters = [];
    for (let i = 0; i < txt.length; i++) {
        letter.push(txt.split("")[i]);
        letters[i] = letter[i];
        console.log(letter[i]);
    }
    getVowel();
}

function getVowel() {
    console.log(letters);
    fixedLetters = [];
    vowel = "";
    indextVowel = 0;
    found = false;
    for (let i = 0; i < letters.length; i++) {
        if ((letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u" || letters[i] === "A" || letters[i] === "E" || letters[i] === "I" || letters[i] === "O" || letters[i] === "U") && !found) {
            vowel = letters[i];
            indextVowel = letters.indexOf(vowel);
            found = true;
        }
    }
    final();
    console.log(vowel, indextVowel);
}

function final() {
    txtFinal = "";
    if (indextVowel === 0) {
        for (let i = 0; i < letters.length; i++) {
            txtFinal = txtFinal + letters[i];
        }
        txtFinal = txtFinal + "yay";
    } else if (indextVowel > 0) {
        for (let i = indextVowel; i < letters.length; i++) {
            txtFinal = txtFinal + letters[i];
        }
        for (let i = 0; i < indextVowel; i++) {
            txtFinal = txtFinal + letters[i];
        }
        txtFinal = txtFinal + "ay";
    }
    translate.value = txtFinal.toString();
}