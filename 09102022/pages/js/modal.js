const cardModal = document.querySelector('.card-modal');
const orderPhone = document.querySelector('.order-phone');

orderPhone.onclick = () => {
    cardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}


const modalClose = (modal) => {
    document.addEventListener('click', (event) => {
        if (!modal.firstElementChild.contains(event.target) && !orderPhone.contains(event.target)){
            modal.style.display = 'none'
            document.body.style.overflow = 'auto';
        }
    });
}

modalClose(cardModal)