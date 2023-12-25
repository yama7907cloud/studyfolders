'use strict';
{
function createColumn(col){
  const source = [];
    for(let i = 0;i<15; i++){
      source[i]=i+1+15*col;
    }
    console.log(source);
  const column =[];
    for(let i=0;i<5; i++){
      column[i] = source.splice(Math.floor(Math.random()*source.length),1)[0];
    }
    console.log(column);
    return column;
}

function createColumns(){
  const columns =[];
  for(let i=0;i<5;i++){
    columns[i] = createColumn(i);
  }
  columns[2][2]='FREE';
  return columns;
}

//動的処理↓↓↓
function renderBingo(columns){
  for(let row=0;row<5;row++){
    const tr = document.createElement('tr');
    for(let col=0;col<5;col++){
      const td=document.createElement('td');
      td.textContent=columns[col][row];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
}

//実行処理
const columns = createColumns();
renderBingo(columns);
}


// function createBingo(columns){
//   const bingo=[];
//   for(let row=0;row<5;row++){
//     bingo[row]=[];
//     for(let col=0;col<5;col++){
//       bingo[row][col]=columns[col][row];
//     }
//   }
//   return bingo;
//   // console.table(bingo);
// }