import { smoothScroll } from './helpers';

const menu = () => {
    const menu = document.querySelector('menu')

    const handleMenu = (opening) => {
        menu.classList[opening ? 'add' : 'remove']('active-menu')
        if (!opening) {
            menu.classList.add('active-menu-hide')
            setTimeout(() => menu.classList.remove('active-menu-hide'), 300)
        }
    }

    const toggleMenu = (el) => {
        const selected = (selectors) => el.closest(selectors) !== null

        switch (true) {
            case selected('main .menu'):
                handleMenu(true)
                break
            case selected('main a'):
                smoothScroll(el.closest('main a').getAttribute("href"))
                break
            case selected('menu li>a'):
                handleMenu(false)
                smoothScroll(el.getAttribute("href"))
                break
            case selected('menu .close-btn')
                || selected('body:has(menu.active-menu)') && !selected('menu'):
                handleMenu(false)
                break
        }
    }

    document.body.addEventListener('click', (e) => toggleMenu(e.target))
}
export default menu