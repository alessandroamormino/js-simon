// CONSEGNA
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.


// PSEUDOCODE:
/*

- genero 5 numeri casuali e li stampo in pagina
- DOPO 10 SECONDI
    - cancello i numeri dalla pagina
    - creo 5 input nel DOM in cui l'utente dovrà inserire i numeri che sono scomparsi
- Controllo i numeri inseriti con quelli generati
    ? SE ho inserito un numero che era nella lista iniziale 
        °V1 : aumento un contatore
    
    - Stampo in pagina quanti numeri su quanti sono stati indovinati e quali sono.

*/



















































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