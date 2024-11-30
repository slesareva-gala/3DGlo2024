const timer = (deadline) => {

    const timerHours = document.getElementById("timer-hours")
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = Math.max(0, (dateStop - dateNow) / 1000)
        let hours = Math.floor(timeRemaining / 3600)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    const showClock = () => {
        let getTime = getTimeRemaining();
        const picture = (n) => (n < 10) ? ('0' + n).slice(-2) : n;

        timerHours.textContent = picture(getTime.hours)
        timerHours.nextElementSibling.textContent = ":"
        console.log(timerHours.nextElementSibling)
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