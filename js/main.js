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


form.submit(function(e) { //СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЃРѕР±С‹С‚РёРµ РѕС‚РїСЂР°РІРєРё РґР»СЏ С„РѕСЂРјС‹ СЃ id=form
    e.preventDefault();

    $.ajax({
        type: 'POST', //РњРµС‚РѕРґ РѕС‚РїСЂР°РІРєРё
        url: 'send.php', //РїСѓС‚СЊ РґРѕ php С„Р°РёР»Р° РѕС‚РїСЂР°РІРёС‚РµР»СЏ
        data: {
            name: form.name,
            phone: form.phone
        },
        success: function(data) { // СЃoР±С‹С‚Рёe РїoСЃР»e СѓРґaС‡РЅoРіo oР±СЂaС‰eРЅРёСЏ Рє СЃeСЂРІeСЂСѓ Рё РїoР»СѓС‡eРЅРёСЏ oС‚РІeС‚a
            console.log(1)
            success.style.display = 'block';
        }
    });
});

