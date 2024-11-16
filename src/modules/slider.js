const slider = (selectors = {}, timeInterval = 1500) => {
    const test = (selector, all = false) => selector ? document['querySelector' + (all ? 'All' : '')](selector) : null

    const sliderBlock = test(selectors.slidesWrapper)
    const slides = test(selectors.slides, true)

    if (!sliderBlock || !slides || !slides.length) return

    let elNavigation = (selectors.navigation && typeof (selectors.navigation) === 'object') ? {
        next: test(selectors.navigation.nextEl),
        prev: test(selectors.navigation.prevEl)
    } : null
    if (elNavigation && (!elNavigation.next || !elNavigation.prev)) elNavigation = null

    let elDots = test(selectors.pagination)

    const elClass = (selectors.class && typeof (selectors.class) === 'object') ? {
        slideActive: selectors.class.slideActive || 'sld-slide-active',
        dot: selectors.class.dot || 'sld-dot',
        dotActive: selectors.class.dotActive || 'sld-dot-active'
    } : { slideActive: 'sld-slide-active', dot: 'sld-dot', dotActive: 'sld-dot-active' }

    const dots = []
    const selectNavigation = `.${elClass.dot}` + (elNavigation ? `, ${selectors.navigation.nextEl}, ${selectors.navigation.prevEl}` : ``)

    let currentSlide = 0
    let interval

    const addElementsDots = (qty) => {
        const li = document.createElement("li")
        li.className = elClass.dot

        elDots.innerHTML = ''
        for (let i = 0; i < qty; i++) {
            dots.push(li.cloneNode())
            elDots.appendChild(dots[i])
        }
        dots[0].classList.add(elClass.dotActive)
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, elClass.slideActive)
        if (elDots) prevSlide(dots, currentSlide, elClass.dotActive)
        currentSlide++
        if (currentSlide > slides.length - 1) currentSlide = 0
        if (elClass.slideActive) nextSlide(slides, currentSlide, elClass.slideActive)
        if (elDots) nextSlide(dots, currentSlide, elClass.dotActive)
    }

    const startSlide = (timer = 1500) => {
        if (timer) interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        if (interval) clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches(selectNavigation)) return

        prevSlide(slides, currentSlide, elClass.slideActive)
        if (elDots) prevSlide(dots, currentSlide, elClass.dotActive)

        if (elNavigation && e.target.matches(selectors.navigation.nextEl)) {
            currentSlide++
        } else if (elNavigation && e.target.matches(selectors.navigation.prevEl)) {
            currentSlide--
        } else if (elDots && e.target.classList.contains(elClass.dot)) {
            currentSlide = dots.indexOf(e.target)
        }

        if (currentSlide > slides.length - 1) currentSlide = 0
        if (currentSlide < 0) currentSlide = slides.length - 1

        nextSlide(slides, currentSlide, elClass.slideActive)
        if (elDots) nextSlide(dots, currentSlide, elClass.dotActive)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(selectNavigation)) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches(selectNavigation)) {
            startSlide(timeInterval)
        }
    }, true)

    if (elNavigation) {
        elNavigation.next.style.display = "unset"
        elNavigation.prev.style.display = "unset"
    }
    if (elDots) addElementsDots(slides.length)

    startSlide(timeInterval)
}

export default slider