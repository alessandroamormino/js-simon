// CONSEGNA
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.


// PSEUDOCODE:
/*

x mi creo un array di 5 numeri casuali e li memorizzo
x genero 5 elementi da stampare in pagina
x stampo i numeri generati in pagina
x DOPO 10 SECONDI
    x cancello i numeri dalla pagina
    x mostro i 5 input nel DOM in cui l'utente dovrà inserire i numeri che sono scomparsi
- AL CLICK DEL BOTTONE
    - Controllo i numeri inseriti con quelli generati
    ? SE ho inserito un numero che era nella lista iniziale 
        °V1 : aumento un contatore
    
    - Stampo in pagina quanti numeri su quanti sono stati indovinati e quali sono.

*/

// - mi creo un array di 5 numeri casuali e li memorizzo
const numbers = [];
// bersaglio gli input
const inputsEl = document.querySelectorAll('#controls input');
// bersaglio il bottone
const btnCheckEl = document.getElementById('check');
// creo una variabile punteggio
let points = 0;
// creo un array dei numeri indovinati
const guessedNumbers = [];
// creo una stringa vuota che popolerò con i numeri indovinati
let guessedString;
// bersaglio il div message in cui stamperò il risultato
const messageEl = document.getElementById('message');


// al click del bottone gioca:

document.getElementById('play').addEventListener('click', function(){

    // - genero 5 elementi da stampare in pagina
    // generateCards(document.getElementById('container'), 5);
    generateNumbers(numbers);

    // - stampo i numeri generati in pagina
    const cards = document.querySelectorAll('.card');
    for(let i=0; i<cards.length; i++){
        // cards[i].innerText = numbers[i];
        cards[i].value = numbers[i];
    }

    // - DOPO 10 SECONDI
    setTimeout(function(){
        // per ogni elemento restituito gli cancello il valore
        for(let i=0; i<cards.length; i++){
            // cards[i].innerText = '';
            cards[i].value = '';
        }

        // - mostro i 5 input nel DOM in cui l'utente dovrà inserire i numeri che sono scomparsi
        // document.getElementById('controls').style.display='block';

        // mostro il bottone di check nel DOM
        btnCheckEl.style.display='block';


    }, 10000);
});





// - AL CLICK DEL BOTTONE
btnCheckEl.addEventListener('click', function(){
    // - Controllo i numeri inseriti con quelli generati
    for(let i=0; i<inputsEl.length; i++){
        if(numbers.includes(Number(inputsEl[i].value))){
            points++;
            guessedNumbers.push(Number(inputsEl[i].value));
        }
    }

    // leggo i numeri indovinati e li traduco in una stringa leggibile
    guessedString = guessedNumbers.join(' - ');

    // Stampo nel DOM il risultato
    if(points>0){
        if(points==numbers.length){
            messageEl.innerText = `Hai indovinato tutti i numeri: ${guessedString}, facendo un punteggio di ${points}, il massimo!`;
        }else if(points>1){
            messageEl.innerText = `Hai indovinato i numeri: ${guessedString}, facendo un punteggio di ${points}`;
        } else {
            messageEl.innerText = `Hai indovinato solo il numero: ${guessedString}, facendo un punteggio di ${points}`;
        }
    }else{
        messageEl.innerText = `Non hai indovinato neanche un numero, sei scarso..`;
    }
});













//******************************************
//                FUNCTIONS
//******************************************

// NUMERO CASUALE DA min A max
/**
 * Genera un numero random da 1 a 5
 * @returns {number}
 */
function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}


//GENERO 5 NUM
/**
 * Genera un array di 5 numeri casuali univoci
 * @param {array} array
 * @returns {array}
 */
function generateNumbers(array){
    
    while(array.length<5){

        let random = randomNumber(1, 100);

        if(!array.includes(random)){
            array.push(random);
        }
    }
    return array;
}


function generateCards(parent, num){

    for(let i=0; i<num; i++){
        // creo un elemento div
        let newEl = document.createElement('div');
    
        // gli assegno la classe card
        newEl.classList.add('card');
        
        // lo appendo al contenitore
        parent.append(newEl);

    }

}
