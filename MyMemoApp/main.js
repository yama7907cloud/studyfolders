'use strict';
{

  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const massage = document.getElementById('message');
  const clear = document.getElementById('clear');
  const massageUp = document.getElementById('messageUp');

if(localStorage.getItem('memo') === null){
  text.value = '';
}else{
  text.value = localStorage.getItem('memo');
}




  save.addEventListener('click',()=>{
    if(localStorage.getItem('memo') === null){
      if(text.value !== ''){
        localStorage.setItem('memo',text.value);
        massage.classList.add('appear');
          setTimeout(()=>{
            massage.classList.remove('appear');
          },1000);
      }
    }else {
      if(text.value !== localStorage.getItem('memo')){
        if(confirm('上書きしますか？')){
          localStorage.setItem('memo',text.value);
          massageUp.classList.add('appearUp');
            setTimeout(()=>{
              massageUp.classList.remove('appearUp');
            },1000);
        }
      }
    }
  });

  clear.addEventListener('click',()=>{
    if(text.value !== ''){
      if(confirm('本当に削除しますか？')){
        localStorage.removeItem('memo');
        text.value = '';
      }
    }
  });





}