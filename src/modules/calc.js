import { animate } from './helpers';

const calc = (prices = [0, 100, 120, 110]) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = calcBlock.querySelector('#total')

    const animationTotal = (totalValue, time) => {
        if (calcBlock.lastAnimationTotal) calcBlock.lastAnimationTotal = false
        if (totalValue) {
            calcBlock.lastAnimationTotal = true
            animate({
                timingplane: 'easeInOutCubic',
                draw(progress) {
                    total.textContent = Math.floor(totalValue * progress) || 1
                },
                duration: time,
                execute: function () { return calcBlock.lastAnimationTotal }
            });
        } else total.textContent = 0
    };

    const countCalc = () => {
        const price = prices[calcType.selectedIndex]
        const calcTypeValue = +calcType.value
        const calcSquareValue = +calcSquare.value
        const calcCountValue = +calcCount.value > 1 ? 1 + calcCount.value * 0.1 : 1
        const calcDayValue = !+calcDay.value ? 1 : +calcDay.value < 5 ? 2 : +calcDay.value < 10 ? 1.5 : 1

        let totalValue = 0
        if (calcTypeValue && calcSquareValue) {
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        }
        if (totalValue !== +total.textContent) animationTotal(totalValue, 500)
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