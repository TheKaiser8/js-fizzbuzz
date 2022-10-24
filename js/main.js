"use strict";
// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1. Creo un ciclo for che mi generi i numeri da 1 a 100
// 2. Stampo in console i numeri del ciclo for (come debug)
// 3. Determino con un'istruzione condizionale all'interno del ciclo for i numeri multipli di 3,5 e di entrambi
//    3a. SE multipli sia di 3 che di 5 stampare "FizzBuzz in console"
//        ALTRIMENTI SE SOLO multipli di 3 stampare "Fizz" in console
//        ALTRIMENTI SE SOLO multipli di 5 stampare "Buzz" in console
//        ALTRIMENTI stampare numero in console

for( let i = 1; i <= 100; i++ ) {
    if( i % 15 === 0 ) {
        console.log("FizzBuzz");
    } else if( i % 3 === 0 ) {
        console.log("Fizz");
    } else if( i % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}