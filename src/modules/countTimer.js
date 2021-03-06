function countTimer(deadline) {
	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds'),
		timerDays = document.querySelector('#timer-days');

	function getTimeRemining() {
		const dateStop = new Date(deadline).getTime(),    // дата дедлайна
			dateNow = new Date().getTime(), // получили текущую дату (чтобы посчитать разницу нам нужно получить милисекунды с использованием метода getTime)
			timeRemining = (dateStop - dateNow) / 1000, // делим на 1000 чтобы из милисекунды сделать секунды
			seconds = Math.floor(timeRemining % 60), // секунды
			minutes = Math.floor((timeRemining / 60) % 60), // минуты
			hours = Math.floor(timeRemining / 60 / 60) % 24, // часы (24 часа в дне)
			days =  Math.floor(timeRemining / 60 / 60 / 24);  // дни

		return { timeRemining, days, hours, minutes, seconds };
	}

	function updateClock() {   // выводит счет на экран постоянный
		const timer = getTimeRemining();

		timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours; // добавляет 0 перед числом!
		timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
		timerSeconds.innerHTML = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
		timerDays.textContent = timer.days < 10 ? '0' + timer.days : timer.days;

		if (timer.timeRemining <= 0) {    // обнуляет счетчик по истечении срока
			timerHours.textContent = "00";
			timerHours.style.color = 'red';
			timerMinutes.textContent = '00';
			timerMinutes.style.color = 'red';
			timerSeconds.innerHTML = '00';
			timerSeconds.style.color = 'red';
			timerDays.textContent = '00';
			timerDays.style.color = 'red';
			clearInterval(timer.timeRemining);
		}

		/* if (timer.timeRemining >= 0) {
            setTimeout(updateClock, 1000);   // первый способ с помощью setTimeout
        } */

		setInterval(() => {
			updateClock();  // второй способ с помощью setInterval
		}, 1000);
	}
	updateClock();
}

export default countTimer;
