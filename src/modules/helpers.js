/* всякие ползности */
"use strict";


// универсальный аниматор
export const animate = ({ draw, duration = 1000, timingplane = 'linear' }) => {

  const timing = {
    linear: (x) => x,

    // Кубические функции Безье (в т.ч. ease, ease-in, ease-out и ease-in-out)
    easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),        // для вертикального скролла
    easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    easeOutQuart: (x) => 1 - Math.pow(1 - x, 5),
    aseOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),  // для выезжающих модальных окон
  };
  if (!(timingplane in timing)) { timingplane = 'linear'; }

  // максимальное количество анимаций
  const maxCountAnimation = Math.max(Math.round(duration / 16.7), 1);
  // счетчик анимаций, максимальное количество анимаций
  let countAnimation = 0;

  requestAnimationFrame(function animation() {
    // вычисление текущего состояния анимации
    // число от 0 до 1 с учетом указанной линейности, заданной в настроку timing
    let progress = countAnimation === 0 ? 0 :
      countAnimation > maxCountAnimation - 1 ? 1 :
        timing[timingplane](countAnimation / maxCountAnimation);

    draw(progress); // отрисовать

    if (countAnimation < maxCountAnimation) {
      countAnimation++;
      requestAnimationFrame(animation);
    }
  });

};

// плавный скролл по a.href
export const smoothScroll = (selectors, duration = 1000) => {

  // счетчик прокрученных строк и целевое кол-во строк к прокрутке всё за 1 сек
  const scrollY = window.scrollY;

  // необходимо докрутить до начала элемента перехода
  const transitionHeight = document.querySelector(selectors).getBoundingClientRect().top;

  animate({
    duration: duration,
    timingplane: 'easeOutCubic',
    draw(progress) {
      // вертикальный скролл документа
      window.scrollTo(0, scrollY + transitionHeight * progress);
    }
  });
};
