// ESERCIZIO 2
// TRACCIA: 
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// generare random Numb fra due dati math.floor(math.random() * (max - min)) + min;

// SVOLGIMENTO: 


function askNumber() {
    let userNumber = parseInt(prompt("Dimmi un numero da 1 a 5", "3"));
    
    while (isNaN(userNumber) || userNumber > 5) {
        alert("Dati non validi");
        userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
    }
    
    return userNumber;
};

function randomNumber(min = 1, max = 5, lastIncluded = true) {
    
    if (lastIncluded) max++;
    
    return Math.floor(Math.random() * (max - min)) + min;
    
};

function isSumEven(num1, num2 ) {
    
    return ((num1 + num2) % 2 == 0)
    
};

const userChoice = prompt("Pari o dispari?", "Pari");
let userRandomNumber = askNumber();
let computerRandomNumber = randomNumber();
let sumEven = isSumEven(userRandomNumber, computerRandomNumber);
const userPrint = document.getElementById("user-number-printer");
const choicePrint = document.getElementById("user-choice-printer");
const computerPrint = document.getElementById("computer-number-printer");
const winnerPrint = document.getElementById("winner-printer");

userPrint.innerText = userRandomNumber;
computerPrint.innerText = computerRandomNumber;
choicePrint.innerText = userChoice;

if (sumEven && userChoice !== "Pari") {

    winnerPrint.innerText = "Ha vinto il pc!";

} else if (sumEven && userChoice == "Pari") {

    winnerPrint.innerText = "Hai vinto tu";
} else if (!sumEven && userChoice !== "Pari") {

    winnerPrint.innerText = "Hai vinto tu";
} else {
    winnerPrint.innerText = "Ha vinto il pc!";
};

// console.log(userRandomNumber);
// console.log(computerRandomNumber);