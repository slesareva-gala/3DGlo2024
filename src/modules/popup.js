import { modal } from './helpers';

const popup = () => {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => modal({
            modal: popup,
            modalContent: popupContent,
            states: 'show',
            time: window.innerWidth < 768 ? 0 : 1000,
        }));
    });

    popup.addEventListener('mousedown', e => {
        if (!e.target.closest('.popup-content')
            || e.target.classList.contains('popup-close'))
            modal({
                modal: popup,
                modalContent: popupContent,
                states: 'hide',
                time: window.innerWidth < 768 ? 0 : 300,
            })
    })
};

export default popup;
