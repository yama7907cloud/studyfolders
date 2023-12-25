'use strict';
console.clear();

{
  const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

// 前月
function getCalendarHead(){
const dates=[];
const d =new Date(year,month,0).getDate();
const n =new Date(year,month,1).getDay();
for(let i=0;i<n;i++){
  dates.unshift({
    date:d-i,
    isToday:false,
    isDisabled:true,
  });
}
return dates;
}

// 当月
function getCalendarBox(){
  const dates = [];
  const lastDate = new Date(year,month+1,0).getDate();
    for(let i=1;i<=lastDate;i++){
      dates.push({
        date:i,
        isToday:false,
        isDisabled:false,
      });
    }
    if(year === today.getFullYear() && month === today.getMonth()){
      dates[today.getDate()-1].isToday=true; //今日の日を太字にする
    }
    return dates;
}

// 翌月
function getCalendarTail(){
  const dates=[];
  const lastDay = new Date(year,month+1,0).getDay();
  for(let i=1;i<7-lastDay;i++){
    dates.push({
      date:i,
      isToday:false,
      isDisabled:true,
    });
  }
  return dates;
}


function clearCalendar(){
  // カレンダー作成時に1度中身をクリアーにする
  const tbody = document.querySelector('tbody');
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
  
}

function renderTitle(){
  // 見出しの年月を記述する
  const title = `${year}/${String(month+1).padStart(2,'0')}`;
  document.getElementById('title').textContent = title;
}


function renderWeeks(){

  const dates = [
    ...getCalendarHead(),
    ...getCalendarBox(),
    ...getCalendarTail(),
  ];
  const weeks = [];
  const weeksCount = dates.length / 7;

  for(let i=0;i<weeksCount;i++){
    weeks.push(dates.splice(0,7));
  }

  weeks.forEach((week) =>{
    const tr =document.createElement('tr');
      week.forEach((date)=>{
        const td = document.createElement('td');
        td.textContent= date.date;
        if(date.isToday){
          td.classList.add('today');
        }
        if(date.isDisabled){
          td.classList.add('disabled');
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
  });
}



// 統合→描画
function createCalendar(){
  clearCalendar();
  renderTitle();
  renderWeeks();
}

document.getElementById('prev').addEventListener('click',()=>{
  month--;
  if(month<0){
    year--;
    month=11;
  }
  createCalendar();
});


document.getElementById('next').addEventListener('click',()=>{
  month++;
  if(month>11){
    year++;
    month=0;
  }
  createCalendar();
});


document.getElementById('today').addEventListener('click',()=>{
  year = today.getFullYear();
  month = today.getMonth();
  createCalendar();
});







createCalendar();
}