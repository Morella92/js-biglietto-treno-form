// inserire in un input il numero di km da percorrere
// selezionare da una select il tipo di sconto da applicare (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)
// Al click sul pulsante calcolare il prezzo del biglietto:
// 




const pricePerKm = 0.21
console.log(pricePerKm)

let kmDistance = document.getElementById('distance')
console.log(kmDistance.value);

let agePassenger = document.getElementById ('age_passenger')
console.log(agePassenger.value)

const normalPrice = document.getElementById('normal-price')
console.log(normalPrice.value)

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
const discountElementMinor = document.getElementById('discount-price-20')
console.log(discountElementMinor)

    // va applicato uno sconto del 40% per gli over 65
const discountElementSenior = document.getElementById('discount-price-40')
console.log(discountElementSenior)

let discount = 0 
console.log(discount)

const generateBtnElement = document.getElementById('generate')

const cancelBtnElement = document.getElementById('cancel')

console.log(generateBtnElement, cancelBtnElement)

generateBtnElement.addEventListener('click', function () {

    console.log(kmDistance.value)

    console.log(agePassenger.value)

    const ticketPrice = parseFloat(pricePerKm * kmDistance.value)
    console.log(ticketPrice)

    if(agePassenger.value === 'minor-age') {

        discount = 0.2; 

    } else if(agePassenger.value === 'over-age') {

        discount = 0.4;
        
    }
    
    let discountPrice = (ticketPrice - (ticketPrice * discount)) 

    let roundedPrice = parseFloat(discountPrice.toFixed(2))
    console.log('Il prezzo è:' + roundedPrice)

})



//     

//     