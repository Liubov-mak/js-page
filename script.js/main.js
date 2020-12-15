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
	countTimer('31 december 2020');

	// меню

	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuList = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			/* if (!menu.style.transform || menu.style.transform === `translate(-100%)`) { // translate потому что скрывают меню так а не display none. дополнительное условие дает возможность повторного нажатия
				menu.style.transform = `translate(0)`;
			} else {
				menu.style.transform = `translate(-100%)`;
			} */  // это равнозначно следующему действию ниже

			menu.classList.toggle('active-menu'); // этот класс прописан в css стилях - анимация
		};

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		/* for (let i = 0; i < menuList.length; i++) { //при нажатии на список меню меню скрывается
			menuList[i].addEventListener('click', handlerMenu);
		} */  // этот цикл равнозначен циклу forEach ниже
		menuList.forEach(elem => elem.addEventListener('click', handlerMenu)); //при нажатии на список меню меню скрывается
	};
	toggleMenu();

	// popup

	const togglePopUp = () => {
		const popupBtn = document.querySelectorAll('.popup-btn'),
			popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close');

		popupBtn.forEach(elem => elem.addEventListener('click', () => {
			popup.style.display = 'block';
			const popupContent = document.querySelector('.popup-content');
			popupContent.style.top = '0 px';
			let count = 0;
			let popupAnim = function() {
				count++;
				popupContent.style.top = count + 'px';
				if (count < 300) {
					setTimeout(popupAnim, 10);
				}
				clearTimeout(popupAnim);
			};
			popupAnim();
			clearTimeout(popupAnim);
			const intViewportWidth = window.innerWidth;
			if (intViewportWidth < 768) {
				popupAnim = '';
			}
		}));


		popupClose.addEventListener('click', () => {
			popup.style.display = 'none';
		});
		popup.addEventListener('click', () => {
			popup.style.display = 'none';
		});
	};
	togglePopUp();
});
