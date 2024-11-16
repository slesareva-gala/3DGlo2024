import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import form from './modules/form'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sliderSwipper from './modules/sliderSwiper'

document.addEventListener("DOMContentLoaded", () => {
    timer('30 november 2024')
});
menu()
modal()
calc()
form()
tabs()

/**
 * не обязательно указывать значения свойстам параметра селекторов (первый параметр), кроме slidesWrapper и slides 
 * при указани времен в ms равным 0 (воторой параметр), авто-показ слайдов не выполняется
 */

slider({
    slidesWrapper: '.portfolio-content',
    slides: '.portfolio-item',
    navigation: {
        nextEl: '#arrow-right',
        prevEl: '#arrow-left',
    },
    pagination: 'ul.portfolio-dots',
    class: {
        slideActive: 'portfolio-item-active',
        dot: 'dot',
        dotActive: 'dot-active'
    }
}, 2000)
sliderSwipper()

