"use strict";

const modal = () => {
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');


    // выезд справа, по центру за time в ms, из расчета  60 кадров в 1s, растояния в %
    const time = 500
    const animationPopupContent = (show = true) => {
        const path = (1 + popupContent.getBoundingClientRect().width / modal.clientWidth) * 50
        const maxCount = Math.floor(0.06 * time)
        const step = path / maxCount * (show ? -1 : 1)
        const leftStart = show ? 100 : 100 - path
        const leftEnd = show ? 100 - path : 100

        let count = 0;

        (function animation() {
            if (count < maxCount) {
                requestAnimationFrame(animation);
                popupContent.style.left = `${leftStart + count * step}%`;
                count++;
            } else {
                popupContent.style.left = `${leftEnd}%`;
            }
        })();
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            popupContent.style.transform = `none`;
            if (window.innerWidth > 767) {
                modal.style.display = 'block';
                animationPopupContent();
            } else {
                popupContent.style.left = `unset`;
                modal.style.display = 'flex';
                modal.style.justifyContent = "center";
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        if (window.innerWidth > 767) { animationPopupContent(false); }
        setTimeout(() => {
            popupContent.style.transform = ``;
            modal.style.display = ''
        }, time)
    });
};

export default modal;
