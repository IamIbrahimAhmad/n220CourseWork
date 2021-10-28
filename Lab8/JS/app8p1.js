let h1 = document.getElementById("h1");

function Check() {
    isTrue();
}

function isTrue() {
    let num = document.getElementById("num").value;
    if (num % 7 === 0) {
        return h1.innerHTML = "True";
    } else if (num % 7 !== 0) {
        return h1.innerHTML = "False";
    }
}