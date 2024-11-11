const form = () => {

    document.body.addEventListener('input', e => {
        const el = e.target

        if (el.closest('form input')) {
            switch (el.type) {
                case 'text':
                    el.value = el.value.replace(/[^а-я-\s]/gi, '')
                    break
                case 'tel':
                    el.value = el.value.replace(/[^\d()-]/g, '')
                    break
                case 'email':
                    el.value = el.value.replace(/[^a-z\d@\-_.!~*']/gi, '')
                    break
            }
        }
    })

    document.body.addEventListener('blur', e => {
        const el = e.target

        if (el.closest('form input')) {
            //  пробелы или дефисы в начале и конце удаляются
            el.value = el.value.replace(/(^[\s-]+)|([\s-]+$)/g, '')
                // повторяющиеся подряд пробелы|дефисы заменяются на одиночные
                .replace(/(-{2,})|(\s{2,})/g, (_, dash) => dash ? '-' : ' ')

            // первая буква слова большая, остальные маленькие  
            if (el.type === 'text')
                el.value = el.value.replace(/((?:^|\s|-)[а-яё])([а-яё]*)/gi,
                    (_, first, next) => first.toUpperCase() + next.toLowerCase())
        }
    }, true)

}
export default form