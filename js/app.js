// inserire in un input il numero di km da percorrere
// selezionare da una select il tipo di sconto da applicare (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)
// Al click sul pulsante calcolare il prezzo del biglietto:
// 




const pricePerKm = 0.21

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
const discountElementMinor = document.getElementById('discount-price-20')

    // va applicato uno sconto del 40% per gli over 65
const discountElementSenior = document.getElementById('discount-price-40')

let discount = 0 

console.log(pricePerKm, discountElementMinor, discountElementSenior, discount)