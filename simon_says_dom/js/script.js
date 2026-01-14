//*Struttura esercizio
/*
Bisogna generare 5 numeri casuali, faccio da 1 a 50
devo mostrare nella lista
Faccio partire un timer da 30s
mostrare il form con 5 input
click di conferma
mostrare quanti e quali numeri sono stati inserit

*/ 

//creo un array

const randomNumbers = [];

for (let i=0; i < 5; i++) {
    const numero = Math.random() + 50;
    randomNumbers.push(numero);
}

console.log("Numeri generati": , randomNumbers);

