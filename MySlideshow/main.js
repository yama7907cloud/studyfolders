'use strict';
{
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let activeIndex = 0;


next.addEventListener('click',()=>{
  activeIndex++;
  if(activeIndex > thumbnails.length-1){
    activeIndex=0;
  }
  mainImage.src = thumbnails[activeIndex].src;
    thumbnails.forEach((act)=>{
      act.classList.remove('active');
    });
  thumbnails[activeIndex].classList.add('active');
});

prev.addEventListener('click',()=>{
  activeIndex--;
  if(activeIndex < 0){
    activeIndex = 2;
  }
  mainImage.src = thumbnails[activeIndex].src;
    thumbnails.forEach((act)=>{
      act.classList.remove('active');
    });
  thumbnails[activeIndex].classList.add('active');
});

thumbnails.forEach((element,index)=>{
  thumbnails[index].addEventListener('click', ()=> {
    mainImage.src = thumbnails[index].src;
    activeIndex = index;
      thumbnails.forEach((el,index) => {
          if(el === element){
            thumbnails[index].classList.add('active');
          }else{
            thumbnails[index].classList.remove('active');
          } 
      });
  })
});

}