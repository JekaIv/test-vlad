//inputs
const inputs = document.querySelectorAll('.input-wrapper input');
const inputPhone = document.querySelectorAll('input[name=phone]');
const success = document.querySelector('.success');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        Object.assign(input.previousElementSibling.style, {
            transform: 'translateY(-100%)',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)'
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

//submit form
const ajaxSend = async (formData) => {
    const url = 'https://listdekor.ru/send.php'
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.text();
};

if (document.querySelector('.name-hidden')) {
    document.querySelector('.name-hidden').value = document.title;
}

inputPhone.forEach(phone => {
    phone.addEventListener('input', () => phone.value = phone.value = phone.value.replace(/\D/g,''));
})

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
                    if(document.querySelector('.card-modal')) {
                        document.querySelector('.card-modal').style.display = 'none';
                    }
                })
                .catch((err) => console.error(err))
        });
    });
}

const successClose = () => {
    document.addEventListener('click', (event) => {
        if (!success.firstElementChild.contains(event.target)){
            success.style.display = 'none'
            document.body.style.overflow = 'auto';
        }
    });
}
successClose();