let tabuleiro = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let anterior1 = '';
let anterior2 = '';
let buttonStart = true;
//
let player = 2;
let point = [0,0]
//
//imgplayer
let imgplayer = [0,1]
//imgplayer

let collum1 = document.getElementById("line1");
collum1.addEventListener("click", function () {
  move("line1");
  
});

let collum2 = document.getElementById("line2");
collum2.addEventListener("click", function () {
  move("line2");
});

let collum3 = document.getElementById("line3");
collum3.addEventListener("click", function () {
  move("line3");

});

let collum4 = document.getElementById("line4");
collum4.addEventListener("click", function () {
  move("line4");
 
});

let collum5 = document.getElementById("line5");
collum5.addEventListener("click", function () {
  move("line5");

});

let collum6 = document.getElementById("line6");
collum6.addEventListener("click", function () {
  move("line6");

});
let collum7 = document.getElementById("line7");
collum7.addEventListener("click", function () { 
  move("line7");

});

//function start

//function start

//function move
function move(collumm) {
    songs(); 
  if (collumm === "line1") {
    for (let x = 5; x >= 0; x--) {
      if (tabuleiro[x][0] === 0) {
        player = switchPlayer(player);
        let position = x;
        changeDiv(player, position, collumm);
        tabuleiro[x][0] = player;
        if (victory(x,0) === true) {
            printWinner(player)
            scorepoints(player)
        }
        if (checkTie() === true) {
          printTie();
        }
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
            scorepoints(player)
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
            scorepoints(player)
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
            scorepoints(player)
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
            scorepoints(player)
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
            scorepoints(player)
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
            scorepoints(player)
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
  return count;
};

const victory = (a, b) => {
  let count = 0;
  count = horizontal(a, b);
  if (count > 3) {
    return true;
  } else {
    count = 0;
  }
  count = vertical(a, b);
  if (count > 3) {
    return true;
  } else {
    count = 0;
  }
  count = diagonal1(a, b);
  if (count > 3) {
    return true;
  } else {
    count = 0;
  }
  count = diagonal2(a, b);
  if (count > 3) {
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
  return tie;
}

//verifica empate


//reset
//clear tabuleiro
const clearTabuleiro = () => {
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 6; j++) {
      let id = `line${i}-cel${j}`;
      let removeClass = document.getElementById(id);
      removeClass.classList.remove('player1');
      removeClass.classList.remove('player2');
      removeClass.classList.remove('avatar-1');
      removeClass.classList.remove('avatar-2');
      removeClass.classList.remove('avatar-3');
      removeClass.classList.remove('avatar-4');
      removeClass.classList.remove('avatar-5');
      removeClass.classList.remove('avatar-6');
      removeClass.classList.remove('avatar-7');
      removeClass.classList.remove('avatar-8');
      removeClass.classList.remove('avatar-9');
      removeClass.classList.remove('avatar-10');
    }
  }
  tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  return tabuleiro;
}

//clear tabuleiro
//play again

const playAgain = document.getElementById('bt-playAgain');
playAgain.addEventListener("click", function () {
    songs()
  clearTabuleiro();
  let addClass = document.getElementById('victory');
  addClass.classList.add('hidden');
  addClass = document.getElementById('black-blackground');
  addClass.classList.add('hidden');
});

const playAgainDraw = document.getElementById('bt-playAgain-draw');
playAgainDraw.addEventListener("click", function () {
    songs()
  clearTabuleiro();
  let addClass = document.getElementById('draw');
  addClass.classList.add('hidden');
  addClass = document.getElementById('black-blackground');
  addClass.classList.add('hidden');
});
//play again

//printWinner 
function printWinner() {
    songWinner() 
    let bg_back = document.getElementById("black-blackground")
    bg_back.classList.remove("hidden")

    let victory = document.getElementById('victory')
    victory.classList.remove("hidden")

    let span = document.getElementById("span")
    span.innerText = `${player}` 

    let img_winner = document.getElementById('moldura-winner')
    if ( player === 1 ) {

        let win = document.getElementById('fig-avatar-player1')
        let temp = win.className.split(' ')
        let newC = temp[0]
        img_winner.classList.add(`${newC}`)
    }
    if ( player === 2 ) {
        let win = document.getElementById('fig-avatar-player2')
        let temp = win.className.split(' ')
        let newC = temp[0]
        img_winner.classList.add(`${newC}`)
        

    }
}
//printWinner 




// switchPlayer
function switchPlayer(player) {
    songs()
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
  songs()
  window.location.reload();
}
//reset
let changePic = true;
// START 
const startGame = document.getElementById('bt-start');
startGame.addEventListener("click", function () {
  if (buttonStart === true) {
    songs()
    let enableTabuleiro = document.getElementsByClassName('disable');
    enableTabuleiro[0].classList.add('hidden');
    changePic = false;
    let pulsarPlayer = document.getElementById('fig-avatar-player1');
    pulsarPlayer.classList.add('pulsar');
    buttonStart = false;
    let neonStart = document.getElementById('bt-start');
    neonStart.classList.remove('neon');
  }

  
});
// START

// changeDiv
function changeDiv(p, position, collum) {
    songs()
    let strId = collum + "-cel" + (position + 1);
    let div = document.getElementById(strId);
  
    if (p === 1) {
      let a1 = document.getElementById('fig-avatar-player1')
      div.classList.add("player1");
      div.classList.add("transition");
      div.classList.add(a1.classList[0]);
      let pulsarPlayer = document.getElementById('fig-avatar-player1');
      pulsarPlayer.classList.remove('pulsar');
      pulsarPlayer = document.getElementById('fig-avatar-player2');
      pulsarPlayer.classList.add('pulsar');
      return "";
    } else {
      let a2 = document.getElementById('fig-avatar-player2')
      div.classList.add( a2.classList[0]);
      div.classList.add("transition");
      div.classList.add("player2");
      let pulsarPlayer = document.getElementById('fig-avatar-player2');
      pulsarPlayer.classList.remove('pulsar');
      pulsarPlayer = document.getElementById('fig-avatar-player1');
      pulsarPlayer.classList.add('pulsar');
      return "";
    }
}
 
// changeDiv

// changePic

let avatar1 = document.getElementById('status-player1')
let avatar2 = document.getElementById('status-player2')
let avatares = document.getElementById('choose-person')
let status = document.getElementById("status")
let controlPlayer = 0



avatar1.addEventListener('click',function(){
    songs()
  if (changePic === true) {
    avatares = document.getElementById('choose-person')
    status = document.getElementById("status")

    avatares.classList.remove("hidden")
    avatares.classList.add("container-avatar")
    controlPlayer = 1
    let classNeon = document.getElementById('fig-avatar-player1');
    classNeon.classList.remove('neon');
  }
});

avatar2.addEventListener('click',function(){
    songs()
  if (changePic === true) {
    
    avatares = document.getElementById('choose-person')
    status = document.getElementById("status")

    avatares.classList.remove("hidden")
    avatares.classList.add("container-avatar")
    controlPlayer = 0
    let classNeon = document.getElementById('fig-avatar-player2');
    classNeon.classList.remove('neon');
  }

})


let img = ''
let img1 =  document.getElementsByClassName('avatar-1')[0]
img1.addEventListener("click",function(){   
    changePicture('avatar-1')
    songs()
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img2 =  document.getElementsByClassName('avatar-2')[0]
img2.addEventListener("click",function(){
    changePicture('avatar-2')
    songs()
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img3 =  document.getElementsByClassName('avatar-3')[0]
img3.addEventListener("click",function(){
    songs()
    changePicture('avatar-3')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img4 =  document.getElementsByClassName('avatar-4')[0]
img4.addEventListener("click",function(){
    songs()
    changePicture('avatar-4')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img5 =  document.getElementsByClassName('avatar-5')[0]
img5.addEventListener("click",function(){
    songs()
    changePicture('avatar-5')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img6 =  document.getElementsByClassName('avatar-6')[0]
img6.addEventListener("click",function(){
    songs()
    changePicture('avatar-6')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img7 =  document.getElementsByClassName('avatar-7')[0]
img7.addEventListener("click",function(){
    songs()
    changePicture('avatar-7')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})
let img8 =  document.getElementsByClassName('avatar-8')[0]
img8.addEventListener("click",function(){
    songs()
    changePicture('avatar-8')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img9 =  document.getElementsByClassName('avatar-9')[0]
img9.addEventListener("click",function(){
    songs()
    changePicture('avatar-9')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})

let img10 =  document.getElementsByClassName('avatar-10')[0]
img10.addEventListener("click",function(){
    songs()
    changePicture('avatar-10')
    if (anterior1 !== '' && anterior2 !== '') {
      let disableButton = document.getElementsByClassName('disable');
      disableButton[1].classList.add('hidden');
      let neonStart = document.getElementById('bt-start');
      neonStart.classList.add('neon');
    }
})
 

function changePicture(classImg) {
    songs()
    let disableAvatar = document.getElementsByClassName(`${classImg}`);
  
    if( controlPlayer === 1 ) {
        if (anterior1 !== '') {
          let enableAvatar = document.getElementsByClassName(anterior1);
          enableAvatar[0].classList.add('avatar');
        }
        anterior1 = classImg;
        let a1 = document.getElementById('fig-avatar-player1')
        a1.textContent = ''
        a1.className = ""
        a1.classList.add(`${classImg}`)
        a1.classList.add(`fig-avatar`)
       

        avatares.classList.remove("container-avatar")
        avatares.classList.add("hidden")
        
        disableAvatar[0].classList.remove('avatar');
        imagem_do_pĺayer_1 = 0
        imgplayer[0] = classImg
        songs()
        return ''
        
     }

    if (controlPlayer === 0 ) {
        if (anterior2 !== '') {
          let enableAvatar = document.getElementsByClassName(anterior2);
         enableAvatar[0].classList.add('avatar');
        }
        anterior2 = `${classImg}`
        let a2 = document.getElementById('fig-avatar-player2')
        a2.textContent = ''
        a2.className = ""
        a2.classList.add(`${classImg}`)
        a2.classList.add(`fig-avatar`)
        

        avatares.classList.remove("container-avatar")
        avatares.classList.add("hidden")
        
        disableAvatar[0].classList.remove('avatar');
        imagem_do_pĺayer_2 = 0
        imgplayer[1] = classImg
        songs()
        return ''
    }
    
}
// changePic  

//printTie 
function printTie() {
  const imgDrawP1 = document.getElementById('draw-moldura-p1');
  const imgDrawP2 = document.getElementById('draw-moldura-p2');
  let tie = document.getElementById('draw');
  tie.classList.remove('hidden');
  imgDrawP1.classList.add(`${imgplayer[0]}`);
  imgDrawP2.classList.add(`${imgplayer[1]}`);
  
}
//printTie 

// REGRAS DP JOGO 
let rules = document.getElementById("bt-regras");
rules.addEventListener("click", function () {
    songs()
  let divRules = document.getElementById("gameRules");
  divRules.classList.remove("hidden");
  let blackBlackground = document.getElementById("black-blackground");
  blackBlackground.classList.remove('hidden');
});
let closeRules = document.getElementById("bt-closeRules");
closeRules.addEventListener("click", function () {
    songs()
  let divRules = document.getElementById("gameRules");
  divRules.classList.add("hidden");
  let blackBlackground = document.getElementById("black-blackground");
  blackBlackground.classList.add('hidden');
});

// REGRAS DO JOGO

//TUTORIAL

let btTutorial = document.getElementById("bt-tutorial");
btTutorial.addEventListener("click", function () {
    songs()
  let divTutorial = document.getElementById("tutorial");
  divTutorial.classList.remove("hidden");
  let blackBlackground = document.getElementById("black-blackground");
  blackBlackground.classList.remove('hidden');
});
let closeTutorial = document.getElementById("bt-closeTutorial");
closeTutorial.addEventListener("click", function () {
    songs()
  let divTutorial = document.getElementById("tutorial");
  divTutorial.classList.add("hidden");
  let blackBlackground = document.getElementById("black-blackground");
  blackBlackground.classList.add('hidden');
});

//TUTORIAL


//scorepoints
function scorepoints(player) {
    songs()
    if (player === 1 ){
        point[0] += 1
        let p1 = document.getElementById("placar-player1")
        p1.innerText = `${point[0]}`  
        return ''
    }
    if (player === 2) {
        point[1] += 1
        let p2 = document.getElementById("placar-player2")
        p2.innerText = `${point[1]}`
        return ''
    }
}


//scorepoints 

// TELA FINAL



const resultadoFinal = (pontos) =>{
  const imgP1 = document.getElementById('moldura-final-p1')
  const imgP2 = document.getElementById('moldura-final-p2')
  const txtEmpate = document.getElementById('final-text')
  const nameWinner = document.getElementById('player-winner')
  const pontosP1 = document.getElementById('placar-final-player1')
  const pontosP2 = document.getElementById('placar-final-player2')
  const telaFinal = document.getElementById('final-screen')
  
  telaFinal.classList.remove('hidden')

  

  imgP1.classList.add(`${imgplayer[0]}`);

  
  imgP2.classList.add(`${imgplayer[1]}`);

  pontosP1.textContent = `${pontos[0]}`
  pontosP2.textContent = `${pontos[1]}`

  if(pontos[0] > pontos[1]){
    nameWinner.textContent = '1'
  }
  if(pontos[0] < pontos[1]){
    nameWinner.textContent = '2'
  }
  if(pontos[0] === pontos[1]){
    txtEmpate.textContent = 'THE GAME TIED'
  }
}

const btEnd = document.getElementById('bt-end')
btEnd.addEventListener('click', ()=>{
  resultadoFinal(point)
})


const btFinish = document.getElementById('bt-finish')
btFinish.addEventListener('click', () =>{
  reset();
  songs()
})
// TELA FINAL


//button reset

const btReset = document.getElementById('bt-reset')
btReset.addEventListener('click', ()=>{
  reset();
  songs()
})

//button reset


//bt end tela empate

const btEndEmpate = document.getElementById('bt-end-draw')
btEndEmpate.addEventListener('click', ()=>{
  const telaEmpate = document.getElementById('draw')
  telaEmpate.classList.add('hidden')

  resultadoFinal(point)

})


//bt end tela empate
//PLAYSONG

function songs() {
    let audio1 = document.getElementById("click")
    audio1.play()
}

function songWinner() {
    let audio = document.getElementById("click2")
    audio.play()
}


//PLAYSONG
