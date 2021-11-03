let numbers;
let sum;
let average;
let h1 = document.getElementById("h1");

function Calculate() {
    let num = document.getElementById("txt").value;
    numbers = num.split(",");
    console.log(numbers);
    Sum();
}

function Sum() {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
        sum = sum + numbers[i];
    }
    console.log(sum);
    Average();
}

function Average() {
    average = 0;
    average = sum / numbers.length;
    console.log(average);
    h1.innerHTML = "The sum is: " + sum + " and the average is: " + average;
}