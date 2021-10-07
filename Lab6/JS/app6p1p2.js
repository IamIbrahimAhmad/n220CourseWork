let pet = {
    name: "",
    age: 0,
    health: 0,
    energy: 0,
}

var d = new Date();
var sec = d.getSeconds();

let names = ["Lisa", "Bailey", "Bella", "Max", "Lucy", "Charlie", "Daisy", "Rocky", "Cody", "Lola", "Zoe"];

let nameIndex = Math.floor(Math.random() * 11);
pet.age = Math.floor(Math.random() * 25) + 1;
pet.health = Math.floor(Math.random() * 100);
pet.energy = Math.floor(Math.random() * 100);

pet.name = names[nameIndex];

document.getElementById("name").innerHTML = "Name: " + pet.name;
document.getElementById("age").innerHTML = "Age: " + pet.age;
document.getElementById("health").innerHTML = "Health: " + pet.health;
document.getElementById("energy").innerHTML = "Energy: " + pet.energy;


function energy() {
    pet.energy += 5;
    document.getElementById("energy").innerHTML = "Energy: " + pet.energy;
}

function health() {
    pet.health += 5;
    document.getElementById("health").innerHTML = "Health: " + pet.health;
}