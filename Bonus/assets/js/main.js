/* Istruzioni
Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

//? km da percorrere
const travelKm = Number(prompt('Quanti km devi percorrere?'));
console.log(travelKm);

//? età del passeggero
const passengerAge = Number(prompt('Quanti anni hai?'));
console.log(passengerAge);

// * Prezzo del biglietto
let ticketPrice = 0.21 * travelKm;
let ticketPrice2Digits;
// * Coupon età
let discount;

if (passengerAge < 18){
    discount = (ticketPrice / 100) * 20;
    console.log(discount);
    ticketPrice = ticketPrice - discount;
    ticketPrice2Digits = ticketPrice.toFixed(2)
    console.log(ticketPrice2Digits);
    
} else if (passengerAge > 65){
    discount = (ticketPrice / 100) * 40;
    console.log(discount);
    ticketPrice = ticketPrice - discount;
    ticketPrice2Digits = ticketPrice.toFixed(2)
    console.log(ticketPrice2Digits);
    
} else {
    ticketPrice2Digits = ticketPrice.toFixed(2)
    console.log(ticketPrice2Digits);
}

// * Costo Biglietto
document.getElementById("ticket_price").innerHTML =`Il prezzo del biglietto è di ${ticketPrice2Digits}€`;

