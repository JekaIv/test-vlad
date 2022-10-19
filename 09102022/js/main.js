// variables
const inputs = document.querySelectorAll('.input-wrapper input');
const slider = document.querySelector('.materials__list');
const success = document.querySelector('.success');
const youtube = document.querySelector('.youtube');
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

//inputs
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

//submit form
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
                    form.reset();
                    success.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                    document.querySelector("form button")
                        .setAttribute('disabled', 'disabled')
                })
                .catch((err) => console.error(err))
        });
    });
}


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


