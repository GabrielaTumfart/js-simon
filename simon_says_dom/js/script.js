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
    const li = document.createElement("li");
    li.innerText = randomNumbers[i];
    listaNumeri.append(li);
}

let tempoRimanente= 30;

const elementoCountdown = document.getElementById("countdown");

elementoCountdown.innerText = tempoRimanente;

const timer = setInterval(function (){
    tempoRimanente--;

    elementoCountdown.innerText = tempoRimanente;

    if (tempoRimanente <= 0) {
        clearInterval(timer);
        listaNumeri.classList.add(d-none);

        const instruzioni = document.getElementById("instructions");
        const formRisposte = document.getElementById("answers-form"); 
        console.log("Finito il timer! Mostro il form.");
         
    }
}, 1000);

const form = document.getElementById("answers-form"); 

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const inputUtente = form.querySelectorAll("input");
    const numeriUtente = [];

    for (let i = 0; i < inputUtente.length; i++) {
        const valore = parseInt(inputUtente[i].value);
        numeriUtente.push(valore);
    }
    console.log("Numeri inseriti", numeriUtente);
});

const numeriIndovinati = [];

for (let i = 0; i < numeriUtente.length; i++) {
    const numeroCorrente = numeriUtente[i];

    if (randomNumbers.includes(numeroCorrente)) {
        numeriIndovinati.push(numeroCorrente);
    }
}
console.log("Numeri indovinati:", numeriIndovinati);

const messaggio =document.getElementById("message");
const quanti = numeriIndovinati.length;

if(quanti === 0) {
    messaggio.innerText = "Non hai indovinato nessun numero.";
        
    } else {
        messaggio.innerText = "Hai indovinato i numeri:" ${quanti};
        
    }


