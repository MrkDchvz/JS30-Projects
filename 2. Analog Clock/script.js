
function convertTo12HoursFormat(hour) {
    // Transform 24-hour format hour into 12-hour format
    let hour12Format = hour % 12;
    // If hour is at 0 (midnight or noon) make it 12 
    return hour12Format ? hour12Format : 12
}


function rotateHands() {
       // Get the current time
       let currentTime = new Date();
       // Break down time into three seperate variables (hours, minutes, seconds)
       let currentHour = convertTo12HoursFormat(currentTime.getHours());
       let currentMinute = currentTime.getMinutes();
       let currentSecond = currentTime.getSeconds();
   
   
   
       // Calculate the angle(in degrees) of the hourHand based on the current hour
       hourAngle = 0.5 * (60 * currentHour + currentMinute);
       // Calculate the angle(in degrees) of the minuteHand based on the current minute
       minuteAngle = 6 * currentMinute;
       // Calculate the angle(in degrees) of the secondHand based on the current minute
       secondAngle = 6 * currentSecond;
       // Transform the rotation of the clock hands based on their respective angles
       const hourHand = document.querySelector(".clock-hand--hour");
       hourHand.style.transform = `rotate(${hourAngle}deg)`;
   
       const minuteHand = document.querySelector(".clock-hand--minute");
       minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
   
       const secondHand = document.querySelector(".clock-hand--second");
       secondHand.style.transform = `rotate(${secondAngle}deg)`;
       console.log(secondAngle);
}

setInterval(rotateHands, 1050)
     


