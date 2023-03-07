// CONSEGNA
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.


// PSEUDOCODE:
/*

- mi creo un array di 5 numeri casuali e li memorizzo
- genero 5 elementi da stampare in pagina
- stampo i numeri generati in pagina
- DOPO 10 SECONDI
    - cancello i numeri dalla pagina
    - creo 5 input nel DOM in cui l'utente dovrà inserire i numeri che sono scomparsi
- Controllo i numeri inseriti con quelli generati
    ? SE ho inserito un numero che era nella lista iniziale 
        °V1 : aumento un contatore
    
    - Stampo in pagina quanti numeri su quanti sono stati indovinati e quali sono.

*/

// - mi creo un array di 5 numeri casuali e li memorizzo
const numbers = [];

generateNumbers(numbers);

// - genero 5 elementi da stampare in pagina
generateCards(document.getElementById('container'), 5);

// - stampo i numeri generati in pagina

const cards = document.querySelectorAll('.card');
for(let i=0; i<cards.length; i++){
    cards[i].innerText = numbers[i];
}











































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
    console.log(array);
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