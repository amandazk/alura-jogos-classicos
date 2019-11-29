//código carro

let xCarros = [600, 600, 600, 600, 600, 600]; //posição inicial dos carros
let yCarros = [40, 96, 150, 210, 270, 318]; //carro1, carro2, carro3, carro1, carro2 e carro3
let velocidadeCarros = [2, 3, 2.5, 5, 3.3, 2.3]; //carro1, carro2, carro3, carro1, carro2 e carro3
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){ // x, y, altura e comprimento
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}