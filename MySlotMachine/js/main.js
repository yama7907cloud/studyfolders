'use strict';
{

class Panel{
  // 初期値の作成
  constructor(){
    const section = document.createElement('section');
    section.classList.add('panel');
    // 他のメソッドから変更するためにthisを付与
    this.img = document.createElement('img');
    this.img.src = this.getRandomImage();

    this.timeoutId = undefined;

    this.stop = document.createElement('div');
    this.stop.textContent = 'STOP';
    this.stop.classList.add('stop','inactive');
    // 押されたときにクリックイベント
    this.stop.addEventListener('click',()=>{
      if(this.stop.classList.contains('inactive')){
        return;
      }
      this.stop.classList.add('inactive');
      clearTimeout(this.timeoutId);
      // 全て止まったときの判定
      panelIsLeft--;
      if(panelIsLeft === 0){
        spin.classList.remove('inactive');
        panelIsLeft = 3;
        checkResult();
      }
    });


    section.appendChild(this.img);
    section.appendChild(this.stop);

    const main =document.querySelector('main');
    main.appendChild(section);
  }

  getRandomImage(){
    const images = [
      'img/seven.png',
      'img/bell.png',
      'img/cherry.png',
    ];
    return images[Math.floor(Math.random() * images.length)];
  }

  い(){
    this.img.src = this.getRandomImage();
    // 一定時間に絵柄を変更する処理
    this.timeoutId = setTimeout(()=>{
      this.spin();
    },50);
  }

  // 絵柄の違いを判定→違っていたらtrue
  isUnmatched(p1,p2){
    if(this.img.src !== p1.img.src &&  this.img.src !== p2.img.src){
      return true;
    }else{
      return false;
    }
  }

  // 違いがあった際の透明度を付与する処理
  unmatch(){
    this.img.classList.add('unmatched');
  }

// 透明度の初期化スピンを押した際の処理
  activate(){
    this.img.classList.remove('unmatched');
    this.stop.classList.remove('inactive');
  }
}

// 違った絵柄の透明度の処理
function checkResult(){
  if(panels[0].isUnmatched(panels[1],panels[2])){
    panels[0].unmatch();
  }
  if(panels[1].isUnmatched(panels[0],panels[2])){
    panels[1].unmatch();
  }
  if(panels[2].isUnmatched(panels[0],panels[1])){
    panels[2].unmatch();
  }
}



const spin = document.getElementById('spin');
// ゲーム開始スピンがクリックされたときの処理
spin.addEventListener('click',()=>{
  if(spin.classList.contains('inactive')){
    return;
  }
  spin.classList.add('inactive');
  // 各インスタンスに対して繰り返し処理を実行
  panels.forEach((panel) => {
    panel.activate();
    panel.spin();
  });
});


// 実行処理　表示作成　インスタンスを作成する。
const panels =[
  new Panel(),
  new Panel(),
  new Panel(),
];

let panelIsLeft = 3;

}