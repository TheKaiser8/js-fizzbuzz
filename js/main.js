"use strict";
// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1. Creo un ciclo for che mi generi i numeri da 1 a 100
// 2. Stampo in console i numeri del ciclo for (come debug)
// 3. Determino, con un'istruzione condizionale all'interno del ciclo for, i numeri multipli di 3,5 e di entrambi
//    3a. SE multipli sia di 3 che di 5 stampare "FizzBuzz in console"
//        ALTRIMENTI SE SOLO multipli di 3 stampare "Fizz" in console
//        ALTRIMENTI SE SOLO multipli di 5 stampare "Buzz" in console
//        ALTRIMENTI stampare numero in console

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

const scoreboard = document.querySelector('.scoreboard')

for( let i = 1; i <= 100; i++ ) {
    const scoreboardItem = document.createElement('div');
    scoreboardItem.classList.add('scoreboard__item');
    scoreboardItem.innerHTML = i;
    scoreboard.append(scoreboardItem);

    if( i % 15 === 0 ) {
        scoreboardItem.innerHTML = "FizzBuzz";
        console.log("FizzBuzz");
    } else if( i % 3 === 0 ) {
        scoreboardItem.innerHTML = "Fizz";
        console.log("Fizz");
    } else if( i % 5 === 0 ) {
        scoreboardItem.innerHTML = "Buzz";
        console.log("Buzz");
    } else {
        console.log(i);
    }
}