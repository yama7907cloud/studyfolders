'use strict';
{
  let loc;
  let word;
  let startTime;
  let isPlaying = false;

  const words = [
  'red',
  'blue',
  'pink'
  ];

function setWord(){
  word = words.splice(Math.floor(Math.random()*words.length),1)[0];
    target.textContent = word;
    loc = 0;
}

const target = document.getElementById('target');



document.addEventListener('keydown',(yama)=>{
  // 早期リターンで処理を終わらせる
  if(yama.key !== word[loc]){
    return; 
  }
  loc++;
  target.textContent = '_'.repeat(loc) + word.substring(loc);

  if(loc === word.length){
    if(words.length === 0){
      const elapsedTime = ((Date.now() - startTime) /1000).toFixed(2);
      const result = document.getElementById('result');
      result.textContent = `Finished! ${elapsedTime} seconds!! `;
      return;
    }
    setWord();
  }


});

document.addEventListener('click',()=>{
  if(isPlaying === true){
    return;
  }
  isPlaying = true;
  startTime = Date.now();
  setWord();
})





}