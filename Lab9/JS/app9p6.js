let numbers;
let inRow;
let done;
let h1 = document.getElementById("h1");

function Check() {
    let num = document.getElementById("num").value;
    numbers = [];
    inRow = 0;
    done = false;
    numbers = num.split(",");

    checkNumbers();
}

function checkNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
        if (numbers[i] === 1 && inRow === 0) {
            inRow++;
        } else if (numbers[i] === 1 && inRow > 0) {
            inRow++;
        } else if (numbers[i] !== 1) {
            inRow = 0;
        }
        if (inRow === 3) {
            done = true;
            break;
        }
    }
    if (done) {
        Done();
    } else {
        h1.innerHTML = "You lost."
    }
    document.getElementById("num").value = "";
}

function Done() {
    return h1.innerHTML = "You won."
}