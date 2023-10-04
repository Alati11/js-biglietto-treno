// ### Calcolo del prezzo del biglietto del treno

// - chiedere di inserire il numero di km da percorrere
//     - dichiara una variabile
//     - assegnare alla variabile il valore restituito da un prompt
let numKm;
numKm = prompt('Quanti km vuoi percorrere?');
console.log(parseInt(numKm))

// - inserire l'età del passeggero
//     - dichiara una variabile
//     - assegnare alla variabile il valore restituito da un prompt
let etaUser;
etaUser = prompt('inserire età');
console.log(parseInt(etaUser));


// - calcolare il prezzo totale del viaggio
//     - calcolare prezzo base (0.21 € al km)
let price 
price = (parseFloat(0.21));  
let priceBase = numKm * price;
// priceBase = priceBase.toFixed      
console.log(parseFloat(priceBase));

//     - va applicato uno sconto del 20% per i minorenni
if (etaUser < 18) {
    let offUnder = (priceBase * (20 / 100));
    let priceUnder = (priceBase - offUnder);
        console.log(priceUnder);    
}
if (etaUser > 65) {
    
}

//     - va applicato uno sconto del 40% per gli over 65.
// - stampare il prezzo finale    
//     - Modificare l'innerHTML del h1 con il prezzo finale del biglietto 