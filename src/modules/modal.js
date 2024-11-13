import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    const showModal = (time = 1000) => {
        modal.style.display = 'block';

        if (window.innerWidth < 768) {
            modalContent.style.left = `50%`;
            modalContent.style.transform = `translateX(-20rem )`;

        } else {
            animate({
                timingplane: 'aseOutExpo',
                draw(progress) {
                    modalContent.style.left = `${100 - progress * 50}%`;
                    modalContent.style.transform = `translateX( ${-20 * progress}rem )`;
                },
                duration: time
            });
        }
    };

    const hideModal = (time = 300) => {

        if (window.innerWidth < 768) {
            modalContent.style.left = ``;
            modalContent.style.transform = ``;
            modal.style.display = ''

        } else {
            animate({
                draw(progress) {
                    if (progress === 1) {
                        modal.style.opacity = '';
                        modalContent.style.left = ``;
                        modalContent.style.transform = ``;
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

    modal.addEventListener('click', e => {
        if (!e.target.closest('.popup-content')
            || e.target.classList.contains('popup-close'))
            hideModal()
    })
};

export default modal;
