const form = () => {

    document.body.addEventListener('input', e => {
        const el = e.target

        if (el.closest('form input')) {
            el.parentNode.classList.remove('no-valid')

            switch (`${el.type}${el.type === "text" ? "_" + el.name : ""}`) {
                case 'text_user_name':
                    el.value = el.value.replace(/[^а-яё\-\s]/gi, '')
                    break
                case 'text_user_message':
                    el.value = el.value.replace(/[^а-яё\s\d.,;!?:()"—–]/gi, '')
                    break
                case 'tel':
                    el.value = el.value.replace(/[^\d()\-+]/g, '')
                    break
                case 'email':
                    el.value = el.value.replace(/[^a-z\d@_.!~*']/gi, '')
                    break
            }
        }
    })

    document.body.addEventListener('blur', e => {
        const el = e.target

        if (el.closest('form input')) {

            el.value = el.value.replace(/(^[\s-]+)|([\s-]+$)/g, '')
                .replace(/(-{2,})|(\s{2,})/g, (_, dash) => dash ? '-' : ' ')

            if (el.type === 'text' && el.name === 'user_name')
                el.value = el.value.replace(/((?:^|\s|-)[а-яё])([а-яё]*)/gi,
                    (_, first, next) => first.toUpperCase() + next.toLowerCase())
        }
    }, true)

}
export default form