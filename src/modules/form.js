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

}
export default form