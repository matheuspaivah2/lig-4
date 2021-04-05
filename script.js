let tabuleiro = [
                 [1,0,1,1,0,0,0],
                 [0,1,1,0,0,0,0],
                 [1,1,1,1,0,0,0],
                 [1,0,0,1,0,0,0],
                 [0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0],
                ]
let amountPlayer1 = 0
let amountPlayer2 = 0
let amountMovie = 0

//function start


//function start




//function move



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

            if (tabuleiro[a][b] === tabuleiro[a + i][b] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    for (let i = 1; i <= 5; i++) {

        if(a - i < 0){

            break;
        }
        if (tabuleiro[a - i][b] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a - i][b] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    console.log(count, "vertical");
    return count;
}
const horizontal = (a, b) => {

    let count = 1;

    for (let i = 1; i <= 5; i++) {
        if (b + i > 6) {
            break;
        }

        if (tabuleiro[a][b + i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a][b + i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    for (let i = 1; i <= 5; i++) {
        if (b - i < 0) {
            break;
        }
        if (tabuleiro[a][b - i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a][b - i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    console.log(count, "horizontal");
    return count;
}
const diagonal1 = (a, b) => {

    let count = 1;
    
    for (let i = 1; i <= 5; i++) {

        if (a + i > 5 || b + i > 6) {

            break;
        }
        if (tabuleiro[a + i][b + i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a + i][b + i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    
    for (let i = 1; i <= 5; i++) {

        if(a - i < 0 || b - i < 0){

            break;
        }
        if (tabuleiro[a - i][b - i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a - i][b - i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    console.log(count, "diagonal1");
    return count;
}
const diagonal2 = (a, b) => {

    let count = 1;
    
    for (let i = 1; i <= 5; i++) {

        if (a + i > 5 || b - i < 0) {

            break;
        }
        if (tabuleiro[a + i][b - i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a + i][b - i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    
    for (let i = 1; i <= 5; i++) {

        if(a - i < 0 || b + i > 6){

            break;
        }
        if (tabuleiro[a - i][b + i] !== undefined) {

            if (tabuleiro[a][b] === tabuleiro[a - i][b + i] ) {

                count++;
            }
            else {

                break;
            }
        }
        
    }
    console.log(count, "diagonal2");
    return count;
}

const victory = (a ,b) => {

    let count = 0;
    count = horizontal(a, b);
    if (count > 3 ) {
        console.log('Victory');
        return true;
    }
    else {
        count = 0
    }
    count = vertical(a, b);
    if (count > 3 ) {
        console.log('Victory');
        return true;
    }
    else {
        count = 0
    }
    count = diagonal1(a, b);
    if (count > 3 ) {
        console.log('Victory');
        return true;
    }
    else {
        count = 0
    }
    count = diagonal2(a, b);
    if (count > 3 ) {
        console.log('Victory');
        return true;
    }
    else {
        count = 0
    }

    return false;

    
}

//verifica vitória





//verifica empate


//verifica empate




//reset



//reset




//play again



//play again




let collum1 = document.getElementById("line1")
collum1.addEventListener('click', function(){
    let col = 'line1'
    jogada()
    movi(col)
})

let collum2 = document.getElementById("line2")
collum2.addEventListener('click', function(){
    let col = 'line2'
    jogada()
    movi(col)

})

let collum3 = document.getElementById("line3")
collum2.addEventListener('click', function(){
    let col = 'line3'
    jogada()
    movi(col)

})

let collum4 = document.getElementById("line4")
collum2.addEventListener('click', function(){
    let col = 'line4'
    jogada()
    move(col)

})

let collum5 = document.getElementById("line5")
collum2.addEventListener('click', function(){
    let col = 'line5'
    jogada()
    move(col)
})



let collum6 = document.getElementById("line6")
collum2.addEventListener('click', function(){
    let col = 'line6'
    jogada()
    move(col)

})
let collum7 = document.getElementById("line7")
collum2.addEventListener('click', function(){
    let col = 'line7'
    jogada()
    move(col)

})

function move(collum) {
    
    if (collum === 'line1') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][0] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    }
    if (collum === 'line2') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][1] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    
    }
    if (collum === 'line3') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][2] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    
    }
    if (collum === 'line4') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][3] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    
    }
    if (collum === 'line5') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][4] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    
    }
    if (collum === 'line6') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][5] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    }
    if (collum === 'line7') {
        for(let x = 0 ; x < 6; x++) {
            if (tabuleiro[x][6] === 0) {   
                if (jogador == -1) {
                    let color = 'black'
                    let position = i
                    changeDiv(color, position,collum)
                    
                }
            }
        }
    }
     
}

function isWinner() {

}

function reset() {

}


function jogada() {
   
}

function move_player() {
    

}

function changeDiv (color,position,collum) {
    let strId = collum+'-ceil'+position
    let div = document.getElementById(strId)
    div.style.backgroud = color 
}