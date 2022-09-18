const price = document.querySelector('.price');
const form = document.querySelector('#form');
const close = document.querySelector('.close');
const success = document.querySelector('.success');
const formActive = document.querySelector('.button-form');
const modalForm = document.querySelector('.modal-form');
const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true
});

let options = { style: 'currency', currency: 'RUB' };
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

document.addEventListener('click', function(event) {
    if (!form.contains(event.target)
        && !formActive.contains(event.target)) closeModal();
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let form_data = form.serialize();
    $.ajax({
        type: 'POST',
        url: 'send.php',
        data: form_data,
        success: function(data) {
            success.style.display = 'block';
        }
    });
})

