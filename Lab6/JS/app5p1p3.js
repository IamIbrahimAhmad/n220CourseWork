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

let playerDef = 0;
let enemyDef = 0;

document.getElementById("hpPlayer").innerHTML = "Player HP: " + player.hp;
document.getElementById("defPlayer").innerHTML = "Player Defense: " + playerDef;
document.getElementById("hpEnemy").innerHTML = "Enemy HP: " + enemy.hp;
document.getElementById("defEnemy").innerHTML = "Enemy Defense: " + enemyDef;
document.getElementById("moves").innerHTML = moves;

if (turn === 1) {
    playerTurn = true;
    enemyTurn = false;
} else if (turn === 2) {
    playerTurn = false;
    enemyTurn = true;
}

function playerAttack() {
    if (playerTurn && !enemyTurn && moves > 0) {
        enemy.hp = enemy.hp - (player.attack - enemyDef);
        if (enemyDef > 0) {
            enemyDef = 0;
            document.getElementById("defEnemy").innerHTML = "Enemy Defense: " + enemyDef;
        }
        document.getElementById("hpEnemy").innerHTML = "Enemy HP: " + enemy.hp;
        moves--;
        document.getElementById("moves").innerHTML = moves;
        if (enemy.hp <= 0) {
            playerTurn = false;
            enemyTurn = false;
        }
        if (moves === 0) {
            playerTurn = !playerTurn;
            enemyTurn = !enemyTurn;
            moves = 2;
            document.getElementById("moves").innerHTML = moves;
        }
    } else if (!playerTurn && enemyTurn && moves > 0) {
        enemyT();
    }
}

function playerDefense() {
    if (playerTurn && !enemyTurn && moves > 0) {
        playerDef = playerDef + player.defense;
        document.getElementById("defPlayer").innerHTML = "Player Defense: " + playerDef;
        moves--;
        document.getElementById("moves").innerHTML = moves;
        if (moves === 0) {
            playerTurn = !playerTurn;
            enemyTurn = !enemyTurn;
            moves = 2;
            document.getElementById("moves").innerHTML = moves;
        }
    } else if (!playerTurn && enemyTurn && moves > 0) {
        enemyT();
    }
}

if (!playerTurn && enemyTurn && moves > 0) {
    enemyT();
}

function enemyT() {
    for (let i = 0; i < 2; i++) {
        var enemyOp = Math.floor(Math.random() * 2) + 1;
        if (enemyOp === 1) {
            if (!playerTurn && enemyTurn && moves > 0) {
                player.hp = player.hp - (enemy.attack - playerDef);
                if (playerDef > 0) {
                    playerDef = 0;
                    document.getElementById("defPlayer").innerHTML = "Player Defense: " + playerDef;
                }
                document.getElementById("hpPlayer").innerHTML = "Player HP: " + player.hp;
                moves--;
                document.getElementById("moves").innerHTML = moves;
                if (enemy.hp <= 0) {
                    playerTurn = false;
                    enemyTurn = false;
                }
                if (moves === 0) {
                    playerTurn = !playerTurn;
                    enemyTurn = !enemyTurn;
                    moves = 2;
                    document.getElementById("moves").innerHTML = moves;
                }
            }
        } else if (enemyOp === 2) {
            if (!playerTurn && enemyTurn && moves > 0) {
                enemyDef = enemyDef + enemy.defense;
                document.getElementById("defEnemy").innerHTML = "Enemy Defense: " + enemyDef;
                moves--;
                document.getElementById("moves").innerHTML = moves;
                if (moves === 0) {
                    playerTurn = !playerTurn;
                    enemyTurn = !enemyTurn;
                    moves = 2;
                    document.getElementById("moves").innerHTML = moves;
                }
            }
        }
    }
}