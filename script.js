// variaveis fora livres no corpo.
let quantidadeCartas = prompt("Selecionar um valor par entre 4 e 14 cartas")
//let quantidadeCartas;
let deck = `<div class="card" onclick="vira(this)">
<img src="img/front.png" alt=""></div>`
segurança()
//segurança dos numeros
function segurança(){
    if(quantidadeCartas%2 != 0 || quantidadeCartas < 4 || quantidadeCartas >  14 || quantidadeCartas == NaN || quantidadeCartas == null ){
        alert("coloca direito ai irmao")
        teste()
    }else{
        jogar()
    }}
    




//funções de distribuição.
function jogar(){
    for (let i = 0; i < quantidadeCartas/2; i++){
        let j = document.querySelector(".card-game1")
      j.innerHTML += deck

    }
    for(let i = 0; i < quantidadeCartas/2; i++){
        let j = document.querySelector(".card-game2")
      j.innerHTML += deck
    }
}

// viarada da carta
function vira(carta){
    carta.classList.toggle("virar")
}


function  teste(){
    quantidadeCartas = prompt("Selecionar um valor par entre 4 e 14 cartas")
    segurança()
}