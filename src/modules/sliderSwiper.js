import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const sliderSwipper = () => {
    new Swiper('.swiper', {
        modules: [Navigation], // добавляет стили по умол. для элемнетов навигации div.swiper-button* в  HTML
        loop: true,  // карусель
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });
}

export default sliderSwipper