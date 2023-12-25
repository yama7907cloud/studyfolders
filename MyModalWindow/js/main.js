'use strict';

{

const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');

open.addEventListener('click',()=>{
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

close.addEventListener('click',()=>{
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

mask.addEventListener('click',()=> {
  close.click();
});

}