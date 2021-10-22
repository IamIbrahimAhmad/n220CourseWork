//getting bill and tip
let bill = document.getElementById("bill");
let tip = document.getElementById("tip");

//function for calculating the total
function Calculate() {
    let total = parseFloat(bill.value) + parseFloat(tip.value);
    document.getElementById("h1").innerHTML = "Tip: $" + tip.value + ". " + "Total: $" + total + ".";
    console.log("Tip: $" + tip.value + ". " + "Total: $" + total + ".");
}