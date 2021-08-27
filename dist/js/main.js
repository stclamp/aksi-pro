//smooth scroll

const smoothScrollElems = document.querySelectorAll('a[href^="#"]');
smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {

        event.preventDefault();
        const id = link.getAttribute('href').substring(1);


        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//swiper js

const swiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    scrollbar: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4
});

const swiperServices = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    scrollbar: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3
});