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
                timingplane: 'easeInExpo',
                draw(progress) {
                    total.textContent = progress < 0.005 ? totalValue : Math.floor(totalValue * progress)
                },
                duration: time,
                execute: function () { return calcBlock.lastAnimationTotal }
            });
        };
    };

    const countCalc = () => {
        const price = prices[calcType.selectedIndex]
        console.log('price: ', price);
        const calcTypeValue = +calcType.value
        console.log('calcTypeValue: ', calcTypeValue);
        const calcSquareValue = +calcSquare.value
        console.log('calcSquareValue: ', calcSquareValue);
        const calcCountValue = +calcCount.value > 1 ? 1 + calcCount.value * 0.1 : 1
        console.log('calcCountValue: ', calcCountValue);
        const calcDayValue = !+calcDay.value ? 1 : +calcDay.value < 5 ? 2 : +calcDay.value < 10 ? 1.5 : 1
        console.log('calcDayValue: ', calcDayValue);

        let totalValue = total.textContent
        if (calcTypeValue && calcSquareValue) {
            total.textContent = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        } else total.textContent = 0
        if (totalValue !== total.textContent) animationTotal(+total.textContent, 1500)
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