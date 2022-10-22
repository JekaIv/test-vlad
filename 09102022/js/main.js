// variables
const slider = document.querySelector('.materials__list');
const success = document.querySelector('.success');
const youtube = document.querySelector('.youtube');
const modal = document.querySelector('.modal');
const play = document.querySelector('.play');
const scrollForm = document.querySelector('.scroll_form');
let materialsSwiper;

// animation
AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-quad',
    delay: 100,
    disable: function () {
        let maxWidth = 767;
        return window.innerWidth < maxWidth;
    }
});

//sliders
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const initMaterialSlider = () => {
    if (window.innerWidth <= 767 && slider.dataset.mobile === 'false') {
        materialsSwiper = new Swiper(slider, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        slider.dataset.mobile = 'true'
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false'

        if (slider.classList.contains('swiper-initialized'))
            materialsSwiper.destroy()
    }
}

initMaterialSlider();

window.addEventListener('resize', () => initMaterialSlider())

//modals
play.onclick = () => {
    youtube.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

const modalClose = (modal) => {
    document.addEventListener('click', (event) => {
        if (!modal.firstElementChild.contains(event.target) && !play.contains(event.target)){
            modal.style.display = 'none'
            document.body.style.overflow = 'auto';
        }
    });
}

scrollForm.onclick = () => {
    const form = document.getElementById('form');
    youtube.style.display = 'none'
    document.body.style.overflow = 'auto';
    form.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
    });
}


modalClose(success)
modalClose(youtube)

//cart-slider
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




