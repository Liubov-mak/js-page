// eslint-disable-next-line prefer-arrow-callback
window.addEventListener('DOMContentLoaded', function() {
	// eslint-disable-next-line strict
	'use strict';
	// timer

	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds'),
			timerDays = document.querySelector('#timer-days');

		function getTimeRemining() {
			const dateStop = new Date(deadline).getTime(),    // дата дедлайна
				// eslint-disable-next-line max-len
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

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.innerHTML = timer.seconds;
			timerDays.textContent = timer.days;

			if (timer.timeRemining <= 0) {    // обнуляет счетчик по истечении срока
				timerHours.textContent = "00";
				timerMinutes.textContent = '00';
				timerSeconds.innerHTML = '00';
				timerDays.textContent = '00';
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
	countTimer('31 december 2020');
});
