// Creamos variables y les asignamos un numero aleatorio.
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

// Elegimos la imagen en base al numero aleatorio.
let imag1 = 'images/dice'+randomNumber1+'.png';
let imag2 = 'images/dice'+randomNumber2+'.png';

let nuevaimg1 = document.querySelectorAll('img')[0];
let nuevaimg2 = document.querySelectorAll('img')[1];
// Asignas la imagen aleatoria a su posicion.
nuevaimg1.setAttribute('src',imag1);
nuevaimg2.setAttribute('src',imag2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML='GANADOR: JUGADOR 1!'; 
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML='GANADOR: JUGADOR 2!';
}
else if(randomNumber1 === randomNumber2){
    ganador = 'EMPATE!';
    document.querySelector("h1").innerHTML='EMAPTE!';  
}