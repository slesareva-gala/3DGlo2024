import { smoothScroll } from './helpers';

const menu = () => {
    const menuBtm = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const goServiceBlock = document.querySelector('main a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtm.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)
    menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {
        handleMenu()
        smoothScroll(e.target.getAttribute("href"))
    }))

    goServiceBlock.addEventListener('click', (e) => {
        const el = e.target.closest('main a')
        smoothScroll(el.getAttribute("href"))
    })

}
export default menu