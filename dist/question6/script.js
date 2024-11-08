// Задание 6 Урока 19
"use strict";

const elTimepiece = document.querySelector('.timepiece');

const getTimeRemaining = () => {
  const date = new Date()
  const dayWeek = date.getDay()
  const timeLocale = ('0' + date.toLocaleTimeString('en')).slice(-11)
  const daysNewYear = Math.floor(+(new Date(date.getFullYear() + 1, 0, 1) - +date) / 1000 / 60 / 60 / 24)
  const timeDay = (h =>
    h >= 4 && h < 12 ? 1
      : (h >= 12 && h < 18) ? 2
        : (h >= 18 && h < 22) ? 3
          : 0
  )(+timeLocale.slice(0, 2) + (timeLocale.slice(-2) === "AM" ? 0 : 12))

  return { timeDay, dayWeek, timeLocale, daysNewYear }
}

const outputTimepiece = ({ timeDay, dayWeek, timeLocale, daysNewYear }) => {
  const salutation = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'][timeDay]
  const sDayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота'][dayWeek]
  const wDay = (n => {
    const endN = n % 10

    return ['день', 'дня', 'дней'][(endN === 1 && n !== 11) ? 0
      : (endN > 1 && endN < 5 && ![12, 13, 14].includes(n)) ?
        1 : 2]
  })(daysNewYear)

  elTimepiece.innerHTML = `
    <span>${salutation}!</span>
    <span>Сегодня: ${sDayWeek}</span>
    <span>Текущее время: ${timeLocale}</span>
    <span>До нового года осталось ${daysNewYear} ${wDay}</span>
    `
}

outputTimepiece(getTimeRemaining())
setInterval(() => { outputTimepiece(getTimeRemaining()) }, 1000);




