const inputs = document.querySelectorAll('.input-wrapper input');
const slider = document.querySelector('.materials__list');
let materialsSwiper;
let flag = 0;
AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-quad',
    delay: 100,
});

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

const initMaterialSlider = () => {
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
}

if (window.innerWidth <= 767 && flag === 0) {
    flag = 1;
    initMaterialSlider();
}
window.addEventListener('resize', (event) => {
    if (event.target.innerWidth <= 767 && flag === 0) {
        flag = 1;
        initMaterialSlider();

    } else if (event.target.innerWidth > 767 && flag === 1) {
        flag = 0;
        materialsSwiper.destroy();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && flag === false) {
        console.log(slider)
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


const ajaxSend = async (formData) => {
    const url = 'send.php'
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.text();
};

if (document.querySelector("form")) {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset(); // очищаем поля формы
                    formInfo.style.display = 'none';
                    success.style.display = 'block';
                    document.querySelector("form button").setAttribute('disabled', 'disabled')
                })
                .catch((err) => console.error(err))
        });
    });
}

