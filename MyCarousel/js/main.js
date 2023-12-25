'use strict';
{
const next = document.querySelector('#next');
const ulres = document.querySelector('ul');
const aaa = ulres.children;
const prev = document.querySelector('#prev');
const dots =[];
let index = 0;

function updateButtons(){
  prev.classList.remove('hidden');
  next.classList.remove('hidden');
  if (index === 0){
    prev.classList.add('hidden');
  }
  if (index === aaa.length-1){
    next.classList.add('hidden');
  }
}

function gugug(){
  const wid = aaa[0].getBoundingClientRect().width;
  ulres.style.transform = `translateX(${-1 * wid * index}px)`;
}

function setupDots(){
  for (let i=0;i<aaa.length;i++){
    const button = document.createElement('button');
    button.addEventListener('click',()=>{
      index= i;
      upDateDots()
      updateButtons();
      gugug();
    });
        dots.push(button);
        document.querySelector('nav').appendChild(button);
  }
  dots[0].classList.add('current');
}

function upDateDots(){
  dots.forEach((dot) => {
    dot.classList.remove('current');
  });
  dots[index].classList.add('current');
}

updateButtons();
setupDots()

next.addEventListener('click',()=>{
  index++;
  upDateDots()
  updateButtons();
  gugug();
});

prev.addEventListener('click',()=>{
  index--;
  upDateDots()
  updateButtons();
  gugug();
});

}