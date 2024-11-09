import { smoothScroll } from './helpers';

const menu = () => {
    const menuBtm = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const goServiceBlock = document.querySelector('menu a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtm.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))

    goServiceBlock.addEventListener('click', (e) => {
        console.dir(e.target.closest('menu a'))
        smoothScroll(goServiceBlock.getAttribute("href"))
    })

}
export default menu