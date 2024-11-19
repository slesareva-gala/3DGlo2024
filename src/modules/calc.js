const calc = (prices = [0, 100, 120, 110]) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = calcBlock.querySelector('#total')

    const animationTotal = (totalValue, delay, duration) => {
        if (calcBlock.lastCallTimer) clearInterval(calcBlock.lastCallTimer)
        if (totalValue)
            calcBlock.lastCallTimer = setTimeout((n) => {
                let i = 1
                calcBlock.lastCallTimer = setInterval(() => {
                    total.textContent = i === 1 ? 1 :
                        i > n - 1 ? totalValue : Math.floor(totalValue * i / n)
                    if (++i > n) clearInterval(calcBlock.lastCallTimer)
                }, 60)
            }, delay, Math.max(Math.round(duration / 60), 1));
    };

    const countCalc = () => {
        const price = prices[calcType.selectedIndex]
        const calcTypeValue = +calcType.value
        const calcSquareValue = +calcSquare.value
        const calcCountValue = +calcCount.value > 1 ? 1 + calcCount.value * 0.1 : 1
        const calcDayValue = !+calcDay.value ? 1 : +calcDay.value < 5 ? 2 : +calcDay.value < 10 ? 1.5 : 1

        let totalValue = total.textContent
        if (calcTypeValue && calcSquareValue) {
            total.textContent = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        } else total.textContent = 0
        if (totalValue !== total.textContent) animationTotal(+total.textContent, 1440, 1560)
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