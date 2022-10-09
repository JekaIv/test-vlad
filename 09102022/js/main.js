const inputs = document.querySelectorAll('.input-wrapper input');
const slider = document.querySelector('.materials__list');
let materialsSwiper;
let flag = false;

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        Object.assign(input.previousElementSibling.style, {
            transform: 'translateY(-100%)',
            fontSize: '12px'
        })
    })

    input.addEventListener('blur', () => {
        if (input.value.length === 0) {
            Object.assign(input.previousElementSibling.style, {
                transform: 'translateY(0)',
                fontSize: '14px'
            })
        }
    })
})

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

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && flag === false) {
        materialsSwiper = new Swiper(slider, {
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

        flag = true;
    }

    if (window.innerWidth > 768) {
        flag = false;
        materialsSwiper.destroy();
    }
});

