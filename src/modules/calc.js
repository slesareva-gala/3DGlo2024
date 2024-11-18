const calc = (prices = [0, 100, 120, 110]) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = calcBlock.querySelector('#total')

    const countCalc = () => {
        const price = prices[calcType.selectedIndex]
        const calcTypeValue = +calcType.value
        const calcSquareValue = +calcSquare.value
        const calcCountValue = +calcCount.value > 1 ? 1 + calcCount.value * 0.1 : 1
        const calcDayValue = !+calcDay.value ? 1 : +calcDay.value < 5 ? 2 : +calcDay.value < 10 ? 1.5 : 1

        let totalValue = 0

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        }
        total.textContent = totalValue
    }

    calcBlock.addEventListener('input', e => {
        const el = e.target

        if (el.closest('input[type="text"]')) {
            el.value = +el.value.replace(/\D/g, '') || ''
        }
        countCalc()
    })
}
export default calc