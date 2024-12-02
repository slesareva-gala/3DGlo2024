import timer from './modules/timer'
import menu from './modules/menu'
import popup from './modules/popup'
import calc from './modules/calc'
import form from './modules/form'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sliderSwipper from './modules/sliderSwiper'
import sendForm from './modules/sendForm'

timer('31 december 2024')
menu()
popup()
calc([0, 100, 100, 100])
form()
sendForm({
    url: 'https://jsonplaceholder.typicode.com/posts',
    formsId: ['form1', 'form2', 'form3'],
    someElem: [
        {
            id: 'total',
            type: 'block'
        }
    ]
})

tabs()

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

