
//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const pricePerKm = 0.21
console.log(pricePerKm)

let kmDistance = document.getElementById('distance')
console.log(kmDistance.value);

let agePassenger = document.getElementById ('age_passenger')
console.log(agePassenger.value)    

let discount = 0 
console.log(discount)

const generateBtnElement = document.getElementById('generate')

const cancelBtnElement = document.getElementById('cancel')

console.log(generateBtnElement, cancelBtnElement)

let passengerName = document.getElementById('passenger-name')
console.log(passengerName)

let offerApplied = document.getElementById('offer-applied')
console.log(offerApplied)

let trainSeat = document.getElementById('train-seat').value
console.log(trainSeat)

let codeRandom = document.getElementById('code-random').value
console.log(codeRandom)

let finalPrice = document.getElementById('final-price')
console.log(finalPrice)

// Al click sul pulsante calcolare il prezzo del biglietto:

generateBtnElement.addEventListener('click', function () {

    console.log('click sul pulsante')

    console.log(kmDistance.value)

    console.log(agePassenger.value)

    let fullNameElement = document.querySelector('.full-name').value
    passengerName.innerHTML= fullNameElement

    // codeRandom = Math.floor(Math.random() * 10) + 1 ??

    const ticketPrice = parseFloat(pricePerKm * kmDistance.value)
    console.log(ticketPrice)

    // va applicato uno sconto del 20% per i minorenni

    if(agePassenger.value === 'minor-age') {

        discount = 0.2; 
        offerApplied.innerHTML= 'Sconto 20% applicato'

        // va applicato uno sconto del 40% per gli over 65
    } else if(agePassenger.value === 'over-age') {

        discount = 0.4;
        offerApplied.innerHTML= 'Sconto 40% applicato'
    }
    
    let discountPrice = (ticketPrice - (ticketPrice * discount)) 

    let roundedPrice = parseFloat(discountPrice.toFixed(2))
    console.log('Il prezzo è:' + roundedPrice)
    finalPrice.innerHTML= roundedPrice

})



   

   