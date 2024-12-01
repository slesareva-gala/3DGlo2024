const sendForm = ({ url, formsId = [], someElem = [] }) => {
    const statusBlock = document.createElement('div')
    statusBlock.style.color = "white"
    const progress = document.getElementById('preloader')
    const addProgress = (block) => {
        block.querySelector('button[type="submit"]').append(progress)
        progress.style.display = "block"
        progress.style.borderRadius = '5rem';
    }
    const delProgress = () => {
        progress.style.display = ''
        document.body.append(progress)
    }
    const status = {
        error: 'Произошла ошибка, попробуйте позже.',
        success: 'Спасибо! Наш менеджер с вами свяжется!',
        invalid: `Для отправки зявки, введите корректные данные`
    }
    const delStatus = () => {
        setTimeout(() => { statusBlock.textContent = "" }, 5000)
    }

    const regValid = {
        "user_phone": /[\d()\-+]/g,
        "user_name": /[а-яё\s]/gi,
        "user_message": /[а-яё\s\d.,;!?:()"—–]/gi // длиное тире 0151, короткое 0150
    }
    const isValid = (name, value) => (name in regValid) ? value.replace(regValid[name], '').length === 0 : true

    const sendData = (data) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = (form) => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = { form: form.id }

        const validate = (list) => {
            let success = true

            list.forEach(input => {
                if (!isValid(input.name, input.value) || !input.value.trim().length) {
                    input.parentNode.classList.add('no-valid')
                    success = false
                }
            })
            return success
        }

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        form.append(statusBlock)
        if (validate(formElements)) {
            addProgress(form)

            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = status.success
                    formElements.forEach((input) => {
                        input.value = ''
                    })
                    delProgress()
                    delStatus()
                })
                .catch(() => {
                    delProgress()
                    statusBlock.textContent = status.error
                })
        } else {
            statusBlock.textContent = status.invalid
        }
    }

    document.body.addEventListener('submit', (e) => {
        const form = e.target.closest('form')
        e.preventDefault()

        if (form && formsId.includes(form.id)) {
            submitForm(e.target)
        }
    })
}

export default sendForm