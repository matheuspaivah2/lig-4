let tabuleiro = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

//
let avatar = [1,2,3,4,5,6,7,8,9,10]

//
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

//choose person 


//


//function move
function move(collumm) {
  if (collumm === "line1") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][0] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][0] = player;
        victory(x,0);
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
        victory(x, 1);
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
        victory(x, 2);
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
        victory(x, 3);
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
        victory(x, 4);
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
        victory(x, 5);
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
        victory(x, 6);
        return "";
      }
    }
  }
}
//function move

//verifica vitória

console.log(tabuleiro);

const vertical = (a, b) => {
  let count = 1;

  for (let i = 1; i <= 5; i++) {
    if (a + i > 5) {
      break;
    }
    if (tabuleiro[a + i][b] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a + i][b]) {
        count++;
      } else {
        break;
      }
    }
  }
  for (let i = 1; i <= 5; i++) {
    if (a - i < 0) {
      break;
    }
    if (tabuleiro[a - i][b] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a - i][b]) {
        count++;
      } else {
        break;
      }
    }
  }
  console.log(count, "vertical");
  return count;
};
const horizontal = (a, b) => {
  let count = 1;

  for (let i = 1; i <= 5; i++) {
    if (b + i > 6) {
      break;
    }

    if (tabuleiro[a][b + i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a][b + i]) {
        count++;
      } else {
        break;
      }
    }
  }
  for (let i = 1; i <= 5; i++) {
    if (b - i < 0) {
      break;
    }
    if (tabuleiro[a][b - i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a][b - i]) {
        count++;
      } else {
        break;
      }
    }
  }
  console.log(count, "horizontal");
  return count;
};
const diagonal1 = (a, b) => {
  let count = 1;

  for (let i = 1; i <= 5; i++) {
    if (a + i > 5 || b + i > 6) {
      break;
    }
    if (tabuleiro[a + i][b + i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a + i][b + i]) {
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i <= 5; i++) {
    if (a - i < 0 || b - i < 0) {
      break;
    }
    if (tabuleiro[a - i][b - i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a - i][b - i]) {
        count++;
      } else {
        break;
      }
    }
  }
  console.log(count, "diagonal1");
  return count;
};
const diagonal2 = (a, b) => {
  let count = 1;

  for (let i = 1; i <= 5; i++) {
    if (a + i > 5 || b - i < 0) {
      break;
    }
    if (tabuleiro[a + i][b - i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a + i][b - i]) {
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i <= 5; i++) {
    if (a - i < 0 || b + i > 6) {
      break;
    }
    if (tabuleiro[a - i][b + i] !== undefined) {
      if (tabuleiro[a][b] === tabuleiro[a - i][b + i]) {
        count++;
      } else {
        break;
      }
    }
  }
  console.log(count, "diagonal2");
  return count;
};

const victory = (a, b) => {
  let count = 0;
  count = horizontal(a, b);
  if (count > 3) {
    console.log("Victory");
    return true;
  } else {
    count = 0;
  }
  count = vertical(a, b);
  if (count > 3) {
    console.log("Victory");
    return true;
  } else {
    count = 0;
  }
  count = diagonal1(a, b);
  if (count > 3) {
    console.log("Victory");
    return true;
  } else {
    count = 0;
  }
  count = diagonal2(a, b);
  if (count > 3) {
    console.log("Victory");
    return true;
  } else {
    count = 0;
  }

  return false;
};

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
  console.log(strId);
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
