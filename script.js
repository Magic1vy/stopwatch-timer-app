const time = document.querySelector(".time-display");
const btnStart = document.querySelector("#start");
// const btnStop = document.querySelector("#stop");
const btnReset = document.querySelector("#reset");

let numberOfClick = 0;
let minutes = 0;
let hours = 0;

btnStart.addEventListener("click", init);



function init() {
    seconds = 0;
    numberOfClick++;
    if (numberOfClick%2 != 0) {
        btnStart.textContent = 'stop';
        timerID = setInterval(tick, 1000);
    }

    else {
        btnStart.style.display = "none";
        clearInterval(timerID);
    }
}

function tick(){

    
    seconds++;
    if (seconds >= 60) { 
        minutes++;
        seconds = seconds - 60;
    }
    if (minutes >= 60) {
        hours++;
        minutes = minutes - 60;
    }
    if (seconds < 10) {
        if (minutes < 10) {
            if (hours < 10) {
                time.innerHTML ='0' + hours + ':0' + minutes + ':0' + seconds;
            } else {
                time.innerHTML = hours + ':0' + minutes + ':0' + seconds;
            }
        } else {
            if (hours < 10) {
                time.innerHTML = '0' + hours + ':' + minutes + ':0' + seconds;
            } else {
                time.innerHTML = hours + ':' + minutes + ':0' + seconds;
            }
        }
    }
    else {
        if (minutes < 10) {
            if (hours < 10) {
                time.innerHTML = '0' + hours + ':0' + minutes + ':' + seconds;
            } else {
                time.innerHTML = hours + ':0' + minutes + ':' + seconds;
            }
        } else {
            if (hours < 10) {
                time.innerHTML = '0' + hours + ':' + minutes + ':' + seconds;
            } else {
                time.innerHTML = hours + ':' + minutes + ':' + seconds;
            }
        }
    }
}

function stopTimer(){
    clearInterval(timerId);
}
btnReset.addEventListener("click", ()=>{
    btnStart.textContent = 'start';
    btnStart.style.display = "block";

    time.innerHTML = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
})


// timer
let numberOfClicks = 0;
const button = document.querySelector('#begin');
const timeReset = document.querySelector("#timerReset");


const song = document.querySelector("#song");

button.addEventListener('click', ()=>{
    timer();

    button.style.display = "none";
});


function timer(){
    
    const minute = Number( document.querySelector('#minute').value);
    const second = Number(document.querySelector('#second').value);
    const hour = Number(document.querySelector('#hour').value);
        
    let amountTime = ((hour * 60 * 60) + (minute * 60) + second);

function calculate() {

    const countDown = document.querySelector('.timer-display');
        let displayHour = Math.floor(amountTime/3600%60);
        let displayMinute = Math.floor(amountTime/60%60);
        let displaySecond = amountTime%60;

        if (displaySecond < 10){ 
            displaySecond = '0' + displaySecond;}

        if (displayMinute < 10) {
            displayMinute = '0' + displayMinute;
        }
        if (displayHour < 10) {
            displayHour = '0' + displayHour;
        }
        countDown.textContent = `${displayHour} : ${displayMinute} : ${displaySecond}`;
        amountTime--;

        if (amountTime < 0) {
            clearTimer();
            amountTime = 0;
            song.src = "timer.mp4";
        }
        function clearTimer () {
            clearInterval(timesID);
        }

        timeReset.addEventListener ("click", ()=>{
            clearTimer();
        
            button.textContent = 'start';
            button.style.display = "block";
            countDown.textContent = "00:00:00";
            location.reload();
        });
        
    }
    timesID = setInterval(calculate, 1000);
    
}