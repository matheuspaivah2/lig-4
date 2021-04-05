let tabuleiro = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let amountPlayer1 = 0;
let amountPlayer2 = 0;
let amountMovie = 0;
let player = 2;

let collum1 = document.getElementById("line1");
collum1.addEventListener("click", function () {
  let col = "line1";
  move(col);
});

let collum2 = document.getElementById("line2");
collum2.addEventListener("click", function () {
  let col = "line2";
  move(col);
});

let collum3 = document.getElementById("line3");
collum3.addEventListener("click", function () {
  let col = "line3";
  move(col);
});

let collum4 = document.getElementById("line4");
collum4.addEventListener("click", function () {
  let col = "line4";
  move(col);
});

let collum5 = document.getElementById("line5");
collum5.addEventListener("click", function () {
  let col = "line5";
  move(col);
});

let collum6 = document.getElementById("line6");
collum6.addEventListener("click", function () {
  let col = "line6";
  move(col);
});
let collum7 = document.getElementById("line7");
collum7.addEventListener("click", function () {
  let col = "line7";
  move(col);
});

//function start

//function start

//function move
function move(collumm) {
  if (collumm === "line1") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][0] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][0] = player;
        console.log(tabuleiro);
        return "";
      }
    }
  }
  if (collumm === "line2") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][1] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][1] = player;
        return "";
      }
    }
  }
  if (collumm === "line3") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][2] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][2] = player;
        return "";
      }
    }
  }
  if (collumm === "line4") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][3] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][3] = player;
        return "";
      }
    }
  }
  if (collumm === "line5") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][4] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][4] = player;
        return "";
      }
    }
  }
  if (collumm === "line6") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][5] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][5] = player;
        return "";
      }
    }
  }
  if (collumm === "line7") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][6] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][6] = player;
        return "";
      }
    }
  }
}
//function move

//verifica vitória

//verifica vitória

//verifica empate

//verifica empate

//reset

//reset

//play again

//play again

// switchPlayer

function switchPlayer(player) {
  if (player === 2) {
    player = 1;
    return player;
  }
  player = 2;
  return player;
}
// switchPlayer

function isWinner() {}

//reset
function reset() {
  window.location.reload();
}
//reset

// changeDiv
function changeDiv(p, position, collum) {
  let strId = collum + "-cel" + (position + 1);
  let div = document.getElementById(strId);

  if (p === 1) {
    div.classList.add("player1");
    return "";
  } else {
    div.classList.add("player2");
    return "";
  }
}
// changeDiv
