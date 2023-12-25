'use strict';
{
function showPassword(){
  const numbersCheckbox = document.getElementById('numbers-checkbox');
  const symbolsCheckbox = document.getElementById('symbols-checkbox');
  const result = document.getElementById('result');

  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers ='0123456789';
  const symbols ='!?#%&()';
  let seed = letters + letters.toUpperCase();
  let password='';
  
  
  if(numbersCheckbox.checked){
    seed += numbers;
  }
  
  if(symbolsCheckbox.checked){
    seed += symbols;
  }
  
  for(let i=0;i < slider.value;i++){
    password += seed[Math.floor(Math.random() * seed.length)];
  }
  

  result.textContent = password;
}
const slider = document.getElementById('slider');
const passwordLength = document.getElementById('password-length');
const btn = document.getElementById('btn');

slider.addEventListener('input',()=>{
  passwordLength.textContent=slider.value;
});


btn.addEventListener('click',()=>{
  showPassword();
});

showPassword();


}