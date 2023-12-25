'use strict';
{

function render(quiz){
  const main = document.querySelector('main');
  const section=document.createElement('section');
  const h2 =document.createElement('h2');
  const ul = document.createElement('ul');

  h2.textContent = quiz[0];
  main.appendChild(section);
  section.appendChild(h2);
  section.appendChild(ul);
    
      for(let i=1;i<quiz.length-1;i++){
        const li = document.createElement('li');
        li.textContent = quiz[i];
            li.addEventListener('click',()=>{
              if(quiz[quiz.length-1] === i-1){
                li.classList.add('correct');
              }else{
                li.classList.add('wrong');
              }
            });
        ul.appendChild(li);
      }
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