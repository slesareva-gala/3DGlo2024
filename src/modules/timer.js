const timer = (deadline) => {

    const timerHours = document.getElementById("timer-hours")
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
        const timeRemaining = Math.max(0, (dateStop - dateNow) / 1000)
        const hours = Math.floor(timeRemaining / 3600)
        const minutes = Math.floor((timeRemaining / 60) % 60)
        const seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    const showClock = () => {
        const getTime = getTimeRemaining();
        const picture = (n) => (n < 10) ? ('0' + n).slice(-2) : n;

        timerHours.textContent = picture(getTime.hours)
        timerHours.nextElementSibling.textContent = ":"
        timerMinutes.textContent = picture(getTime.minutes)
        timerMinutes.nextElementSibling.textContent = ":"
        timerSeconds.textContent = picture(getTime.seconds)
        return getTime.timeRemaining
    }

    const updateClock = setInterval(() => {
        if (!showClock()) clearInterval(updateClock);
    }, 1000);

    showClock()
}
export default timer