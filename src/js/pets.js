const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.close');

hamburger.addEventListener('click',() =>{
    menu.classList.add('menu_active');
});
closeBtn.addEventListener('click',() =>{
    menu.classList.remove('menu_active');
});