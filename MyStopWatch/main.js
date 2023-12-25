'use strict';
{
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

  let startTime;
  let timeOutId;
  let elapsedTime = 0;

function countUp(){
  const d = new Date(Date.now() - startTime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2,'0');
  const s = String(d.getSeconds()).padStart(2,'0');
  const ms = String(d.getMilliseconds()).padStart(3,'0');
  timer.textContent = `${m}:${s}:${ms}`;
    timeOutId = setTimeout(()=>{
      countUp();
    },10);
}

function setButtonStateInitial(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}
function setButtonStateRunning(){
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}
function setButtonStateStopped(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}

setButtonStateInitial();

start.addEventListener('click',()=>{
  if(start.classList.contains('inactive')){
    return;
  }
  setButtonStateRunning();
  startTime = Date.now();
  countUp();
});

stop.addEventListener('click',()=>{
  if(stop.classList.contains('inactive')){
    return;
  }
  setButtonStateStopped();
  clearTimeout(timeOutId);
  elapsedTime += Date.now() - startTime;
});

reset.addEventListener('click',()=>{
  if(reset.classList.contains('inactive')){
    return;
  }
  setButtonStateInitial();
  timer.textContent='00:00.000';
  elapsedTime = 0;
});
}