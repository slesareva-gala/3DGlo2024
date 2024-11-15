const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = sliderBlock.querySelectorAll('.portfolio-item')
    const elDots = sliderBlock.querySelector('ul.portfolio-dots')
    const dots = []

    const timeInterval = 2000
    const qtySlides = slides.length
    if (!qtySlides) return

    let currentSlide = 0
    let interval

    const addElementsDots = (qty) => {
        const li = document.createElement("li")
        li.className = "dot"

        elDots.innerHTML = ''
        for (let i = 0; i < qty; i++) {
            dots.push(li.cloneNode())
            elDots.appendChild(dots[i])
        }
        dots[0].classList.add('dot-active')
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++
        if (currentSlide > slides.length - 1) currentSlide = 0
        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) return

        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            currentSlide = dots.indexOf(e.target)
        }

        if (currentSlide > slides.length - 1) currentSlide = 0
        if (currentSlide < 0) currentSlide = slides.length - 1

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {

        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)

    addElementsDots(qtySlides)
    startSlide(timeInterval)
}

export default slider