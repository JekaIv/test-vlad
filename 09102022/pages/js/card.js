const sliderMain = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let swiperNav = new Swiper(sliderNav, {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
})

let swiperMain = new Swiper(sliderMain, {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: swiperNav
    }
})

