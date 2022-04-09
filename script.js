const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setTime(){
    const now = new Date();
    const second = now.getSeconds();
    const secondsDegree = 6*(second);
   // secondHand.style.transform = rotate(deg);
    secondHand.style.transform = `rotate(${secondsDegree+90}deg)`;

    const mins = now.getMinutes();
    const minsDegree = (6*(mins) + ((second/60)*6))  ;
    minsHand.style.transform = `rotate(${minsDegree+90}deg)`;
   
    const hour =  now.getHours();
    const hoursDegree = ((hour / 12) * 360) + ((mins/60)*30);
    hourHand.style.transform = `rotate(${hoursDegree+90}deg)`;
}
setInterval(setTime, 1000);
setTime();