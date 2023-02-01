// inserire in un input il numero di km da percorrere
// selezionare da una select il tipo di sconto da applicare (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)
// Al click sul pulsante calcolare il prezzo del biglietto:
// 




const pricePerKm = 0.21

const kmDistance = document.querySelector('.distance')

let ticketPrice = parseFloat(pricePerKm * kmDistance)

console.log(pricePerKm, kmDistance, ticketPrice)

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
const discountElementMinor = document.getElementById('discount-price-20')

    // va applicato uno sconto del 40% per gli over 65
const discountElementSenior = document.getElementById('discount-price-40')

let discount = 0 

console.log(discountElementMinor, discountElementSenior, discount)

const generateBtnElement = document.querySelector ('.generate')

const cancelBtnElement = document.querySelector ('.cancel')

console.log(generateBtnElement, cancelBtnElement)

// let discountedPrice = parseFloat (ticketPrice - discount)

generateBtnElement.addEventListener('click', function () {

    if(discountElementMinor) {

        discount = parseFloat(ticketPrice * 0.2);

        console.log('sconto applicato')
        
    } else if (discountElementSenior) {

        discount = parseFloat(ticketPrice * 0.4);
        console.log('sconto applicato')
        
    }
})