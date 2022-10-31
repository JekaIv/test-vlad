const sliderMain = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');
const price = document.querySelector('.price__text');

const options = {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
};

let numberFormat = new Intl.NumberFormat('ru-RU', options);
price.textContent = numberFormat.format(+price.textContent);

let swiperNav = new Swiper(sliderNav, {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
})

let swiperMain = new Swiper(sliderMain, {
    spaceBetween: 10,
    loop: true,
    autoHeight: true,
    thumbs: {
        swiper: swiperNav
    }
})

