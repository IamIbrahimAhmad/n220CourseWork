let player = {
    hp: 250,
    attack: 25,
    defense: 15
}

let enemy = {
    hp: 250,
    attack: 25,
    defense: 15
}

let turn = Math.floor(Math.random() * 2) + 1;

let moves = 2;
let playerTurn = false;
let enemyTurn = false;

document.getElementById("hpPlayer").innerHTML = "Player HP: " + player.hp;
document.getElementById("hpEnemy").innerHTML = "Enemy HP: " + enemy.hp;
document.getElementById("moves").innerHTML = moves;

if (turn === 1) {
    playerTurn = true;
    enemyTurn = false;
} else if (turn === 2) {
    playerTurn = false;
    enemyTurn = true;
}