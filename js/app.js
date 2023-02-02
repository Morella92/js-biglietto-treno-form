
//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const pricePerKm = 0.21
console.log(pricePerKm)

let kmDistance = document.getElementById('distance')
console.log(kmDistance.value);

let agePassenger = document.getElementById ('age_passenger')
console.log(agePassenger.value)

const normalPrice = document.getElementById('normal-price')
console.log(normalPrice.value)
    

let discount = 0 
console.log(discount)

const generateBtnElement = document.getElementById('generate')

const cancelBtnElement = document.getElementById('cancel')

console.log(generateBtnElement, cancelBtnElement)

// Al click sul pulsante calcolare il prezzo del biglietto:

generateBtnElement.addEventListener('click', function () {

    console.log(kmDistance.value)

    console.log(agePassenger.value)

    const ticketPrice = parseFloat(pricePerKm * kmDistance.value)
    console.log(ticketPrice)

        // va applicato uno sconto del 20% per i minorenni

    if(agePassenger.value === 'minor-age') {

        discount = 0.2; 

        // va applicato uno sconto del 40% per gli over 65
    } else if(agePassenger.value === 'over-age') {

        discount = 0.4;
        
    }
    
    let discountPrice = (ticketPrice - (ticketPrice * discount)) 

    let roundedPrice = parseFloat(discountPrice.toFixed(2))
    console.log('Il prezzo è:' + roundedPrice)

})



   

   