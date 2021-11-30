let moves = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
]

let h1 = document.getElementById("h1");

let playerTurn = 0;

let done = false;

let move = 0;

function play(event) {
    let y = parseInt(event.target.getAttribute("data-y"));
    let x = parseInt(event.target.getAttribute("data-x"));

    if (playerTurn === 0 && !done && (moves[y][x] === -1)) {
        moves[y][x] = 0;
        event.target.style.backgroundColor = "blue";
        if (moves[0][0] === 0 && moves[0][1] === 0 && moves[0][2] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[1][0] === 0 && moves[1][1] === 0 && moves[1][2] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[2][0] === 0 && moves[2][1] === 0 && moves[2][2] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[0][0] === 0 && moves[1][0] === 0 && moves[2][0] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[0][1] === 0 && moves[1][1] === 0 && moves[2][1] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[0][2] === 0 && moves[1][2] === 0 && moves[2][2] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[0][0] === 0 && moves[1][1] === 0 && moves[2][2] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        } else if (moves[0][2] === 0 && moves[1][1] === 0 && moves[2][0] === 0) {
            h1.innerHTML = "Player1 is the winner!!!"
            done = true
        }
        playerTurn = 1;
        move++;
    } else if (playerTurn === 1 && !done && (moves[y][x] === -1)) {
        moves[y][x] = 1;
        event.target.style.backgroundColor = "red";
        if (moves[0][0] === 1 && moves[0][1] === 1 && moves[0][2] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[1][0] === 1 && moves[1][1] === 1 && moves[1][2] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[2][0] === 1 && moves[2][1] === 1 && moves[2][2] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[0][0] === 1 && moves[1][0] === 1 && moves[2][0] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[0][1] === 1 && moves[1][1] === 1 && moves[2][1] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[0][2] === 1 && moves[1][2] === 1 && moves[2][2] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[0][0] === 1 && moves[1][1] === 1 && moves[2][2] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        } else if (moves[0][2] === 1 && moves[1][1] === 1 && moves[2][0] === 1) {
            h1.innerHTML = "Player2 is the winner!!!"
            done = true
        }
        playerTurn = 0;
        move++;
    }
    if (move === 9 && !done) {
        h1.innerHTML = "Draw";
        done = true
    }
}