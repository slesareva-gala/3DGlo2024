const calc = () => {
    const elCalc = document.querySelector('.calc-block')

    elCalc.addEventListener('input', e => {
        const el = e.target

        if (el.closest('input[type="text"]')) {
            el.value = el.value.replace(/\D/g, '')
        }
    })
}
export default calc