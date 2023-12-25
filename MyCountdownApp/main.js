'use strict';
{
function check(){
  
  // 残り時間を調べる
let countDown = endTime - new Date().getTime();
// 終了させる処理
  if (countDown < 0){
    clearInterval(intervalId);
    countDown = 3*1000;
    btn.disabled = false;
    btn.classList.remove('inactive');
  }

  const totalSeconds = Math.floor(countDown/1000);
  const minutes = Math.floor(totalSeconds/60);
  const seconds = totalSeconds % 60;
  const minutesFormat = String(minutes).padStart(2,'0');
  const secondesFormat = String(seconds).padStart(2,'0');

  timer.textContent = `${minutesFormat}:${secondesFormat}`;
}

const timer = document.getElementById('timer');
const btn = document.getElementById('btn');

let endTime;
let intervalId;

// 終了時刻を求める
btn.addEventListener('click',()=>{
  btn.disabled = true;
  btn.classList.add('inactive');
  endTime = new Date().getTime() + 3 * 1000;
  // 残り時間を調べる
  intervalId = setInterval(check,100);
});


}