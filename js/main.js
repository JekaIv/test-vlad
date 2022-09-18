const price = document.querySelector('.price');
const form = document.querySelector('#form');
const close = document.querySelector('.close');
const success = document.querySelector('.success');
const formInfo = document.querySelector('.form_wrapper');
const formActive = document.querySelector('.button-form');
const modalForm = document.querySelector('.modal-form');
const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true
});

let options = {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
};

let numberFormat = new Intl.NumberFormat('ru-RU', options);

price.textContent = numberFormat.format(+price.textContent);

function closeModal() {
    modalForm.style.display = 'none';
    body.style.overflow = 'auto';
}

formActive.addEventListener('click', () => {
    modalForm.style.display = 'flex';
    body.style.overflow = 'hidden';
});

close.addEventListener('click', () => closeModal())

document.addEventListener('click', function (event) {
    if (!form.contains(event.target)
        && !formActive.contains(event.target)) closeModal();
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

