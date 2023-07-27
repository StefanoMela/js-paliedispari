// ESERCIZIO 1
// TRACCIA: 
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// SVOLGIMENTO:

const userWord = prompt("Dimmi una parola");
const printer = document.getElementById("first-printer");

if (isPalindormo(userWord)){
    
    printer.innerText = userWord;
    
} else {
    
    printer.innerText = ("Non è palindroma");
};


// FUNZIONI 

function isPalindormo(parola) {
    
    let sameWord = false;
    let reverseWord = "";
    
    for (let i = parola.length - 1; i >= 0; i--) {
        const letter = parola[i];
        reverseWord += letter;
    };
    
    sameWord = (userWord == reverseWord);

    return sameWord;
}