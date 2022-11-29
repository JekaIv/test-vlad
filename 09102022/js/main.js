// variables
const slider = document.querySelector('.materials__list');
const advantagesSlider = document.querySelector('.advantages .materials__list');
const success = document.querySelector('.success');
const youtube = document.querySelector('.youtube');
const modal = document.querySelector('.modal');
const play = document.querySelector('.play');
const scrollForm = document.querySelector('.scroll_form');
const advantagesVideo = document.querySelectorAll('.advantages-img');

let materialsSwiper;
let advantagesSwiper;


const preloader = document.querySelector('.preloader');

document.body.style.overflow = 'auto';
preloader.style.display = 'none';

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

const initSlider = (slider) => {
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
const initSliderAdvantages = (slider) => {
    if (window.innerWidth <= 767 && slider.dataset.mobile === 'false') {
        advantagesSwiper = new Swiper(slider, {
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
            advantagesSwiper.destroy()
    }
}

initSlider(slider);
initSliderAdvantages(advantagesSlider);

window.addEventListener('resize', () => {
    initSlider(slider);
    initSliderAdvantages(advantagesSlider);
})

advantagesVideo.forEach(img => {
    const n = 3;
    let src = img.firstElementChild.src;

    img.onclick = () => {
        src = src.replace(src.substring(src.length - n), 'gif');
        img.firstElementChild.setAttribute('src', src);
        img.firstElementChild.nextElementSibling.style.display = 'none';
    }
})

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




