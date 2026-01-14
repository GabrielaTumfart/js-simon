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
    const numero = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(numero);
}

console.log("Numeri generati:", randomNumbers);

const listaNumeri = document.getElementById("numbers-list");

for (let i = 0; i < randomNumbers.length; i++) {
    const list = document.createElement("list");
    list.innerText = randomNumbers[i];
    listaNumeri.append(list);
}

let tempoRimanente= 30;

const elementoCountdown = document.getElementById("countdown");

elementoCountdown.innerText = tempoRimanente;

const timer = setInterval(function (){
    tempoRimanente--;

    elementoCountdown.innerText = tempoRimanente;

    if (tempoRimanente <= 0) {
        clearInterval(timer);
        numbersListElement.classList.add(d-done);
        instruzioni.classList.add("d-none");
        formRisposte.classList.remove("d-none");
        console.log("Finito il timer!");
         
    }
}, 1000);




