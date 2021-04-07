let tabuleiro = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

//
let amountPlayer1 = 0;
let amountPlayer2 = 0;
let amountMovie = 0;
let player = 2;
//
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
        if (victory(x,0) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 1) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 2) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 3) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 4) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 5) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
        if (victory(x, 6) === true) {
            printWinner(player)
        }
        if (checkTie() === true) {
          printTie();
        }
        return "";
      }
    }
  }
  
}
//function move

//verifica vitória

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
const checkTie = () => {
  let tie = !(tabuleiro[0].includes(0));
  console.log(tie);
  return tie;
}

//verifica empate

//reset

//reset

//play again

//play again

//printWinner 
function printWinner() {
    console.log('aqui')
    let bg_back = document.getElementById("black-blackground")
    bg_back.classList.remove("hidden")

    let victory = document.getElementById('victory')
    victory.classList.remove("hidden")

    let span = document.getElementById("span")
    span.innerText = player
}
//printWinner 

//printTie 
function printTie(player) {
  let tie = document.getElementById('draw');
  tie.classList.remove('hidden');
}
//printTie 


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


let avatar1 = document.getElementById('status-player1')
let avatar2 = document.getElementById('status-player2')
let avatares = document.getElementById('choose-person')
let status = document.getElementById("status")

let imagem_do_pĺayer_1 = 0
let imagem_do_pĺayer_2 = 0
let controlPlayer = 0
avatar1.addEventListener('click',function(){
    avatares = document.getElementById('choose-person')
    status = document.getElementById("status")

    avatares.classList.remove("hidden")
    avatares.classList.add("container-avatar")
    controlPlayer = 1
    // status.classList.add("hidden")
    imagem_do_pĺayer_1 = 1
    console.log(1)
    // console.log("aqui")
})

avatar2.addEventListener('click',function(){
    avatares = document.getElementById('choose-person')
    status = document.getElementById("status")

    avatares.classList.remove("hidden")
    avatares.classList.add("container-avatar")
controlPlayer = 0
    // status.classList.add("hidden")
    imagem_do_pĺayer_2 = 2
    console.log(2)
    // console.log("aqui")
})

let img = ''
let img1 =  document.getElementsByClassName('avatar-1')[0]
img1.addEventListener("click",function(){   
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-1')
})

let img2 =  document.getElementsByClassName('avatar-2')[0]
img2.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-2')
})

let img3 =  document.getElementsByClassName('avatar-3')[0]
img3.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-3')
})

let img4 =  document.getElementsByClassName('avatar-4')[0]
img4.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-4')
})

let img5 =  document.getElementsByClassName('avatar-5')[0]
img5.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-5')
})

let img6 =  document.getElementsByClassName('avatar-6')[0]
img6.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-6')
})

let img7 =  document.getElementsByClassName('avatar-7')[0]
img7.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-7')
})
let img8 =  document.getElementsByClassName('avatar-8')[0]
img8.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-8')
})

let img9 =  document.getElementsByClassName('avatar-9')[0]
img9.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-9')
})

let img10 =  document.getElementsByClassName('avatar-10')[0]
img10.addEventListener("click",function(){
    changePicture(img,imagem_do_pĺayer_1,imagem_do_pĺayer_2,'avatar-10')
})
 

function changePicture(imagem_do_pĺayer_1,imagem_do_pĺayer_2,classImg) {
    
    if( controlPlayer === 1 ) {
        
        let a1 = document.getElementById('fig-avatar-player1')
        a1.className = ""
        a1.classList.add(`${classImg}`)
        a1.classList.add(`fig-avatar`)
       

        avatares.classList.remove("container-avatar")
        avatares.classList.add("hidden")
        
        imagem_do_pĺayer_1 = 0
        console.log(imagem_do_pĺayer_1)
        return ''
        
     }

    if (controlPlayer === 0 ) {

        let a2 = document.getElementById('fig-avatar-player2')
        a2.className = ""
        a2.classList.add(`${classImg}`)
        a2.classList.add(`fig-avatar`)
        

        avatares.classList.remove("container-avatar")
        avatares.classList.add("hidden")
        
        imagem_do_pĺayer_2 = 0
        console.log(imagem_do_pĺayer_2)
        return ''
    }
    
}
// changePic  

// REGRAS DP JOGO 
let rules = document.getElementById("bt-regras");
rules.addEventListener("click", function () {
  let divRules = document.getElementById("gameRules");
  divRules.classList.remove("hidden");
});
let closeRules = document.getElementById("bt-closeRules");
closeRules.addEventListener("click", function () {
  let divRules = document.getElementById("gameRules");
  divRules.classList.add("hidden");
});

// REGRAS DO JOGO

//TUTORIAL

let btTutorial = document.getElementById("bt-tutorial");
btTutorial.addEventListener("click", function () {
  let divTutorial = document.getElementById("tutorial");
  divTutorial.classList.remove("hidden");
});
let closeTutorial = document.getElementById("bt-closeTutorial");
closeTutorial.addEventListener("click", function () {
  let divTutorial = document.getElementById("tutorial");
  divTutorial.classList.add("hidden");
});

//TUTORIAL