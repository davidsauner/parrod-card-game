// variaveis fora livres no corpo.


let gifs = ["bob","explo","fiesta","metal","revert","triple","unicor"] 
let quantidadeCartas = prompt("Selecionar um valor par entre 4 e 14 cartas")
//let quantidadeCartas = 4
let contador = 0

resetar()

segurança()


//segurança dos numeros
function segurança(){
    if(quantidadeCartas%2 != 0 || quantidadeCartas < 4 || quantidadeCartas >  14 || quantidadeCartas == NaN || quantidadeCartas == null ){
        alert("coloca direito ai irmao")
        teste()
        
    }else{
        jogar()
    }}
    
    function  teste(){
        quantidadeCartas = prompt("Selecionar um valor par entre 4 e 14 cartas")
        segurança()
        
    }



//funções de distribuição.
function jogar(){
    for (let i = 0; i < quantidadeCartas/2; i++){
        let j = document.querySelector(".card-game1")
      j.innerHTML += `<div class="card" onclick="vira(this)">
      <img class="back none ${gifs[i]}"src="img/${gifs[i]}.gif" alt="">
      <img class="front" src="img/front.png" alt="">`
      let k = document.querySelector(".card-game2")
      k.innerHTML += `<div class="card" onclick="vira(this)">
      <img class="back none ${gifs[i]} "src="img/${gifs[i]}.gif" alt="">
      <img class="front" src="img/front.png" alt="">`

    }
    
}

// viarada da carta´

 
function comparador(){
    return Math.random() - 0.5;
}
gifs.sort(comparador)


let primeiraescolha;
let segundaescolha;


function vira(carta){
    
   
    

    carta.classList.add("virar")
    const opcao1 = document.querySelector(".card");
	const possuiClasse = opcao1.classList.contains("virar"); 
    const opcao2 = document.querySelector('.none')
    const temback = opcao2.classList.contains('none')

    if(possuiClasse == true){
        carta.querySelector(".front").classList.add("none")
    }
    //setTimeout(remove, 450) 
    remove()
    carta.querySelector(".front").classList.add("none")
    function remove(){
        if (temback == true){
            carta.querySelector(".back").classList.remove("none") 
            
        }
    }
    setTimeout(escolha, 1000)
    function escolha(){
    if(primeiraescolha){
        segundaescolha = carta
      
        verificaigualdade(primeiraescolha,segundaescolha)
    }else{
        primeiraescolha = carta
        
        
    }
}


  /* setTimeout(voltaCarta, 5000)
    function voltaCarta(){
        carta.querySelector(".front").classList.remove("none")
        carta.querySelector(".back").classList.add("none")
        carta.classList.remove("virar")
    }*/
    
}

function verificaigualdade(){

    if(primeiraescolha.innerHTML == segundaescolha.innerHTML){
        contador++
        resetar()
        console.log(primeiraescolha)
        console.log(segundaescolha)
        console.log(contador)
        console.log("acertou")

        console.log("desvirar")
    }else{
        setTimeout(voltaCarta(primeiraescolha), 1000)
        setTimeout(voltaCarta(segundaescolha), 1000)
        console.log("errou")
    }

    primeiraescolha = ""
    segundaescolha = ""
    
}
function voltaCarta(carta){
    carta.querySelector(".front").classList.remove("none")
    carta.querySelector(".back").classList.add("none")
    carta.classList.remove("virar")
}
function resetar(){
    if(contador == quantidadeCartas/2){
        let j = document.querySelector(".card-game1")
        j.innerHTML = ""
        let k = document.querySelector(".card-game2")
        k.innerHTML  = ""
        alert(`Muito bem, você ganhou acertou todos os ${contador} pares`)
     
    }
}

