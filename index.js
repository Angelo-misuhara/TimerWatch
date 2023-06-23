
let btnstartStop = document.querySelector('#btnStart');
let btnReset = document.querySelector('#btnReset');

let second = 0;
let minute = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingminute = 0;
let leadingHours = 0;

let timerInterval = null;
let timerstatus = "stopped";

let Istop = true;

function timer() {
  second++;

  if (second / 60 === 1) {
    minute++;
    second = 0

      if (minute/60 === 1) {
      hours = 1;
      minute = 0;
    }
  }
  if (second < 10) {
    leadingSeconds = '0' + second.toString();
  } else {
    leadingSeconds = second;
  }
  if (minute < 10) {
    leadingminute = '0' + minute.toString();
  } else {
    leadingminute = minute;
  }
  if (hours < 10) {
    leadingHours = '0' + hours.toString();
  } else {
    leadingHours = hours;
  }
  
  let displayTimer = document.querySelector('#timerDisplay').innerText = leadingHours + ':' + leadingminute + ':' + leadingSeconds;
}





btnReset.addEventListener('click', function() {
  let resetTimer = document.querySelector('#timerDisplay').innerText = '00:00:00';
  window.clearInterval(timerInterval);
  second = 0;
  minute = 0;
  hours = 0;
  
  timerstatus = 'stopped'
    btnstartStop.innerText = 'start';
});

btnstartStop.addEventListener('click', function () {
  if (timerstatus==="stopped") {
    timerInterval = window.setInterval(timer, 1000);
    btnstartStop.innerText = 'Stop';
    timerstatus = 'started';
  } else {
    btnstartStop.innerText = 'start';
    window.clearInterval(timerInterval);
    timerstatus = 'stopped'
  }
});