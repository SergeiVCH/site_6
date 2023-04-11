const tabItem = document.querySelectorAll('.tabs__btn__item');
const tabContent = document.querySelectorAll('.tabs__content__item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  
  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn__item--active');
  })
  
  tabTarget.classList.add('tabs__btn__item--active');
};



const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});