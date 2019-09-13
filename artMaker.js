window.onload = function(){
    let canvas = document.querySelector('#canvas');
    for(let i = 0; i < 400; i++){
        let box = document.createElement('span')
        box.style.border = '1px solid black';
        box.style.width = '8px';
        box.style.height = '8px';

        canvas.appendChild(box);
    }

    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let pallet = document.querySelector('#pallet');
    for(let color of colorChoices) {
        let colorBox = document.createElement('span')
        colorBox.setAttribute("class", "palletColor");
        colorBox.style.border = '1px solid black';
        colorBox.style.width = '30px';
        colorBox.style.height = '30px';
        colorBox.style.background = color;

        pallet.appendChild(colorBox);
    }
    
    let palletSpan = document.getElementsByClassName('palletColor');
    let color;
        for (let i = 0; i < colorChoices.length; i++) {
         palletSpan[i].addEventListener("click", function(event){
            color = palletSpan[i].style.background;
        }, false); 
    }

    let colorSpan = document.getElementsByTagName('span');
    
    for (let i = 0; i < 400; i++){
     colorSpan[i].addEventListener("click", function(event){
        colorSpan[i].style.background = color;
    }, false); 
} 
  }