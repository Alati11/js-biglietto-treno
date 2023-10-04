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
console.log(parseFloat(priceBase));
let priceFinal
priceFinal = priceBase;

//     - va applicato uno sconto del 20% per i minorenni
if (etaUser < 18) {
    let offUnder = (priceBase * (20 / 100));
    let priceUnder = (priceBase - offUnder);
    priceFinal = priceUnder;
    console.log(parseFloat(priceUnder)); 
}

//     - va applicato uno sconto del 40% per gli over 65.
if (etaUser > 65) {
    let offOver = (priceBase * (40 / 100));
    let priceOver = (priceBase - offOver);
    priceFinal = priceOver;
    console.log(parseFloat(priceOver));
}

// - stampare il prezzo finale
priceFinal = priceFinal.toFixed(2)

let messageDomElement = document.getElementById('price');
console.dir(messageDomElement);

//     - Modificare l'innerHTML dello span con il prezzo finale del biglietto 
messageDomElement.innerHTML = priceFinal;