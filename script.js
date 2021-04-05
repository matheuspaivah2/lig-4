let tabuleiro = ['0,0,0,0,0,0,0',
                 '0,0,0,0,0,0,0',
                 '0,0,0,0,0,0,0',
                 '0,0,0,0,0,0,0',
                 '0,0,0,0,0,0,0',
                 '0,0,0,0,0,0,0',
            ]
let amountPlayer1 = 0
let amountPlayer2 = 0
let amountMovie = 0


//function start


//function start




//function move



//function move





//verifica vitória


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