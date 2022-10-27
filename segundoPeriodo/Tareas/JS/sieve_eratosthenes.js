/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/
var sieve = function (){
    "use strict";

    let array=[];
    let primes=[]

    let x = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resultado");

    let j = 2;
    for (let a=2; a<x+1;a++){
        array.push(a)
    }
    array.forEach(element => {
        if (element!= 0){
            j = element
        }
        for (let y = j; y< x+1;y++){
            if(array[y] % j ===0){
                array[y]=0
            }
        }
    });
    array.forEach(element=>{
        if (element!=0){
            primes.push(element);
        }
    });
    console.log(array)
    resultado.innerHTML = primes
    return primes;
}
