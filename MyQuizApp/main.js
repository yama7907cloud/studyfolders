'use strict';
{

function render(yama){
  const main = document.querySelector('main');
  const section=document.createElement('section');
  const h2 =document.createElement('h2');
  const ul = document.createElement('ul');
  h2.textContent = yama[0];
  const li0 = document.createElement('li');

  li0.textContent=yama[1];
  li0.addEventListener('click',()=>{
    if(yama[4] === 0){
      li0.classList.add('correct');
    }else{
      li0.classList.add('wrong');
    }
  });
  const li1 = document.createElement('li');
  li1.textContent=yama[2];
  li1.addEventListener('click',()=>{
    if(yama[4] === 1){
      li1.classList.add('correct');
    }else{
      li1.classList.add('wrong');
    }
  });
  const li2 = document.createElement('li');
  li2.textContent=yama[3];
  li2.addEventListener('click',()=>{
    if(yama[4] === 2){
      li2.classList.add('correct');
    }else{
      li2.classList.add('wrong');
    }
  });

  main.appendChild(section);
  section.appendChild(h2);
  section.appendChild(ul);
      

      // for(let i=1;i<yama.length-1;i++){
      //   val = i;
      //   val--;
      //   li = document.createElement('li');
      //   li.textContent = yama[i];
      //   li.addEventListener('click',()=>{
      //     if(yama[yama.length-1] === val){
      //       li.classList.add('correct');
      //     }else{
      //       li.classList.add('wrong');
      //     }
      //     console.log(val);
      //   });
      //   ul.appendChild(li);
      // }







  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);
}

  const quizzes = [
    ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0],
    ['2の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 1],
    ['3の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 2],
  ];

quizzes.forEach((quiz)=>{
  render(quiz);
});









}