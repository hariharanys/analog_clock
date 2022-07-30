const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
function setDate(){
    const con = new Date()
    const Seconds = con.getSeconds()
    const secondDegrees = ((Seconds/60)*360)+90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   
    const minutes = con.getMinutes()
    const minuteDegrees = ((minutes/60)*360)+90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    const hours = con.hours()
    const hourDegrees = ((hours/60)*360)+90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate,1000);