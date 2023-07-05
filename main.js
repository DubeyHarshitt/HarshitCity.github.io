let moon = document.getElementById('moon');
let cityLeft = document.getElementById('city-left');
let cityRight = document.getElementById('city-right');
let heroText = document.querySelector('.hero p')

window.addEventListener("scroll" , function(){
    let scrollValue = window.scrollY;
    // console.log(scrollValue);
    moon.style.top = scrollValue * 0.8 + 'px';
    heroText.style.marginTop = scrollValue * 1 + 'px';
    cityLeft.style.right = scrollValue * 1.2 + 'px';
    cityRight.style.left = scrollValue * 1.2 + 'px';

})
