let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let OmarBoom = document.querySelector('.OmarBoom');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
      moon.style.top = value * 4 + 'px'
      mountains3.style.top = value * 2 + 'px'
        mountains4.style.top = value * 1.5 + 'px'
        river.style.top = value  + 'px'
        boat.style.left = value * 3 + 'px'
        OmarBoom.style.fontSize = value + 'px'
        if(scrollY >= 67){
          OmarBoom.style.fontSize = 67 + 'px';
          OmarBoom.style.position = 'fixed';
          if(scrollY >= 414){
            OmarBoom.style.display = 'none';
          }else{
            OmarBoom.style.display = 'block';
          }
          if(scrollY >= 116){
            document.querySelector('.main').style.background = 'rgb(33 101 126)'
          }else{
            document.querySelector('.main').style.background = ' linear-gradient(rgb(44, 0, 22),rgb(30, 0, 34))'

          }
        }
}
