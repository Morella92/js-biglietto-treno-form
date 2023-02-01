// inserire in un input il numero di km da percorrere
// selezionare da una select il tipo di sconto da applicare (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)
// Al click sul pulsante calcolare il prezzo del biglietto:
// 




const pricePerKm = 0.21
console.log(pricePerKm)

const kmDistance = document.getElementById('distance')
console.log(kmDistance.value)

let agePassenger = document.getElementById ('age_passenger')
console.log(agePassenger)

const normalPrice = document.getElementById('normal-price')
console.log(normalPrice)

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
const discountElementMinor = document.getElementById('discount-price-20')
console.log(discountElementMinor.value)

    // va applicato uno sconto del 40% per gli over 65
const discountElementSenior = document.getElementById('discount-price-40')
console.log(discountElementSenior.value)

let discount = 0 
console.log(discount)

const generateBtnElement = document.querySelector ('.generate')

const cancelBtnElement = document.querySelector ('.cancel')

console.log(generateBtnElement, cancelBtnElement)

generateBtnElement.addEventListener('click', function () {

    console.log(kmDistance.value)

    // console.log(agePassenger.value)

    console.log(discountElementMinor)

    console.log(discountElementSenior)

    let ticketPrice = parseFloat(pricePerKm * kmDistance.value)
    console.log(ticketPrice)

    if(discountElementMinor) 
    {
        discount = 0.2;

        let discountedPrice = ticketPrice * discount;
        console.log(discountedPrice)

        console.log('sconto applicato:' + (ticketPrice - discountedPrice))  

    } else if(discountElementSenior) {

        discount = 0.4;
        
        let discountedPrice = ticketPrice * discount;
        console.log(discountedPrice)

        console.log('sconto applicato:' + (ticketPrice - discountedPrice))  
    }

    
})