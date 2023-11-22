'use strict'
// 스크롤 되었을 때 헤더의 높이보다 내려오면 헤더를 검은색으로 강조해주기
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => { //setEventListener가 아니라 괜찮
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});


// 스크롤 되었을 때 메인 화면이 불투명해짐(opacity = 1) 0은 완전 투명 ~ 1은 완전 불투명
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});


// 스크롤 되었을 때 Arrow up이 투명해짐(opacity = 0)
const homeHalfHeight = home.offsetHeight / 2;
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHalfHeight){
        arrowUp.style.opacity = 1;
    }else{
        arrowUp.style.opacity = 0;
    }
});

//반응형 -- 토글 클릭
const navMenu = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__toggle');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// navbar 메뉴 선택시 자동으로 닫아줌
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
});