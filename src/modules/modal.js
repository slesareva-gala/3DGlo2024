import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    const showModal = (time = 1000) => {
        modal.style.display = 'block';

        if (window.innerWidth < 768) {
            popupContent.style.left = `50%`;
            popupContent.style.transform = `translateX(-20rem )`;

        } else {
            animate({
                timingplane: 'aseOutExpo',
                draw(progress) {
                    popupContent.style.left = `${100 - progress * 50}%`;
                    popupContent.style.transform = `translateX( ${-20 * progress}rem )`;
                },
                duration: time
            });
        }
    };

    const hideModal = (time = 300) => {

        if (window.innerWidth < 768) {
            popupContent.style.left = ``;
            popupContent.style.transform = ``;
            modal.style.display = ''

        } else {
            animate({
                draw(progress) {
                    if (progress === 1) {
                        modal.style.opacity = '';
                        popupContent.style.left = ``;
                        popupContent.style.transform = ``;
                        modal.style.display = ''
                    } else modal.style.opacity = `${1 - progress}`;
                },
                duration: time
            });
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => showModal());
    });
    closeBtn.addEventListener('click', () => hideModal());
};

export default modal;
