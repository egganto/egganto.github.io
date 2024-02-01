function openingCountdown () {
    const openingDate = new Date ('February 14, 2024 00:00');
    const now = new Date ();

    const diff = openingDate - now;

    const mInSecond = 1000;
    const mInMinute = 60*1000;
    const mInHour = 60*60*1000;
    const mInDay = 24*60*60*1000;

const displayDay = Math.floor (diff/mInDay);
const displayHour = Math.floor ((diff%mInDay)/mInHour);
const displayMinute = Math.floor ((diff%mInHour)/mInMinute);
const displaySecond = Math.floor ((diff%mInMinute)/mInSecond);

document.querySelector('.days').textContent = displayDay;
document.querySelector('.hours').textContent = displayHour;
document.querySelector('.minutes').textContent = displayMinute;
document.querySelector('.seconds').textContent = displaySecond;

if (diff<=0) {
    document.querySelector ('.days'). textContent = 0;
    document.querySelector ('.hours').textContent = 0;
    document.querySelector ('.minutes').textContent = 0;
    document.querySelector ('.seconds').textContent = 0;

    clearInterval(timerID); 
    reveal();
}

}

let timerID = setInterval (openingCountdown,1000);

openingCountdown ();

function reveal(){

};
