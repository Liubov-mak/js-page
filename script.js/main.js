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
			menuList = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu'); // этот класс прописан в css стилях - анимация
		};

		btnMenu.addEventListener('click', handlerMenu);
		menu.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('close-btn')) {
				return handlerMenu();
			} else {
				target = target.closest('.menu');
				if (!target) {
					return handlerMenu();
				}
			}
		});

		const service = document.querySelector('.service'),
			portfolio = document.querySelector('.portfolio');
		menuList[0].addEventListener('click', () => {
			event.preventDefault();
			document.documentElement.scrollTop = 900;
			service.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
		menuList[1].addEventListener('click', () => {
			event.preventDefault();
			document.documentElement.scrollTop = 1980;
			portfolio.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
		menuList[2].addEventListener('click', () => {
			event.preventDefault();
			document.documentElement.scrollTop = 2375;
		});
		menuList[3].addEventListener('click', () => {
			event.preventDefault();
			document.documentElement.scrollTop = 3545;
		});
		menuList[4].addEventListener('click', () => {
			event.preventDefault();
			document.documentElement.scrollTop = 4745;
		});

	};
	toggleMenu();

	// popup

	const togglePopUp = () => {
		const popupBtn = document.querySelectorAll('.popup-btn'),
			popup = document.querySelector('.popup');

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

		popup.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('popup-close')) { // здесь точка перед классом не нужна так как здесь есть classList
				popup.style.display = 'none';
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
				}
			}
		});
	};
	togglePopUp();

	// scroll

	const scroll = () => {
		const smooth = document.querySelector("body > main > a");
		smooth.addEventListener('click', e => {
			e.preventDefault();
			const id = smooth.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};
	scroll();

	// tabs

	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};
	tabs();

	// слайдер

	const slider = () => {
		const sliderContent = document.querySelector('.portfolio-content'),
			slide = document.querySelectorAll('.portfolio-item');
			/* sliderBtn = document.querySelectorAll('.portfolio-btn'), */
			/* dot = document.querySelectorAll('.dot'); */

		let currentSlide = 0, // первый слайд 0 - номер слайда
			intervel; // для стопслайда

		function addLi() { // функция по созданию списка li в существующем в верстке ul
			const ul = document.querySelector('.portfolio-dots');
			const li = document.createElement("li");
			ul.appendChild(li);
			li.classList.add('dot');

			for (let i = 0; i < slide.length - 1; i++) {
				ul.append(li.cloneNode());
			}

			const firstDot = document.querySelector("#all-progects > ul > li:nth-child(1)");
			firstDot.classList.add('dot-active');
		}
		addLi();
		const dot = document.querySelectorAll('.dot');

		// автоперелистывание функция autoplay
		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) { // зацикливает вперед
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			intervel = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(intervel);
		};
		stopSlide();

		sliderContent.addEventListener('click', event => {
			event.preventDefault();
			const target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) { // ограничивает вхлод на нижние условия, чтобы не вызывалось событие по клику на боди слайда
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0; // зацикливает вперед
			}
			if (currentSlide < 0) {
				currentSlide = slide.length - 1; // зацикливает назад
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		sliderContent.addEventListener('mouseover', event => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});
		sliderContent.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});
		startSlide(1500);
	};
	slider();

	const pic = () => {
		const command = document.querySelector('#command');
		const commandPhotos = command.querySelectorAll('.command__photo');

		command.addEventListener('mouseover', event => {
			if (event.target.matches('.command__photo')) {
				for (let i = 0; i < commandPhotos.length; i++) {
					if (event.target === commandPhotos[i]) {
						const targetSrc = event.target.src;
						event.target.src = event.target.dataset.img;
						event.target.dataset.img = targetSrc;
					}
				}
			}
		});
		command.addEventListener('mouseout', event => {
			if (event.target.matches('.command__photo')) {
				for (let i = 0; i < commandPhotos.length; i++) {
					if (event.target === commandPhotos[i]) {
						const targetSrc = event.target.src;
						event.target.src = event.target.dataset.img;
						event.target.dataset.img = targetSrc;
					}
				}
			}
		});
	};
	pic();

	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcCount = document.querySelector('.calc-count'),
			calcDay = document.querySelector('.calc-day'),
			totalValue = document.getElementById('total');
		const input = calcBlock.querySelectorAll("input");


		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			} else {
				dayValue = 1;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			} else {
				total = 0;
			}
			totalValue.textContent = total;

			// анимация total

			let count = 0;
			setInterval(() => {
				if (count < total) {
					count++;
					totalValue.textContent = count;
				}
			}, 2);
			console.log(total);

		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;
			/* if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')) {
				console.log(1); // первый способ
			} */

			/* if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
				console.log(1); // второй способ
			} */

			if (target.matches('select') || target.matches('input')) {
				countSum(); // третий способ
			}
		});

		calcBlock.addEventListener('input', event => {
			const target = event.target;
			for (let i = 0; i < input.length; i++) {
				if (target.matches('input')) {
					input[i].value = input[i].value.replace(/\D/i, '');
				}
			}
		});
	};
	calc(100);

	// send-ajax-form

	const sendForm = () => {

		const postData = body => new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if (request.readyState !== 4) {
					return;
				}
				if (request.status === 200) {
					resolve();
				} else {
					reject(request.status);
				}
			});
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/json');
			request.send(JSON.stringify(body));
		});

		const errorMessage = 'Что-то пошло не так...',
			loadMessage = 'Загрузка...',
			successMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

		const form = document.getElementById('form1');
		const statusMessage = document.createElement('div');
		statusMessage.style.color = '#19b5fe';
		statusMessage.style.margin = '25px';

		const formSend = () => {
			form.addEventListener('submit', event => {
				event.preventDefault();
				form.appendChild(statusMessage);
				statusMessage.textContent = loadMessage;
				const formData = new FormData(form);

				const body = {};
				formData.forEach((val, key) => {
					body[key] = val;
				});
				postData(body, () => {
					statusMessage.textContent = successMesage;
				}, error => {
					statusMessage.textContent = errorMessage;
					console.error(error);
				});
			});
		};
		postData()
			.then(formSend)
			.catch(error => console.error(error));
	};
	sendForm();

	const reg = () => {
		const form2Message = document.getElementById('form2-message'),
			form1Name = document.getElementById('form1-name'),
			form2Name = document.getElementById('form2-name'),
			form3Name = document.getElementById('form3-name'),
			form1Phone = document.getElementById('form1-phone'),
			form3Phone = document.getElementById('form3-phone'),
			form2Phone = document.getElementById('form2-phone');

		form2Message.addEventListener('input', () => {
			form2Message.value = form2Message.value.replace(/[a-zA-Z]/g, '');
		});
		form1Name.addEventListener('input', () => {
			form1Name.value = form1Name.value.replace(/[a-zA-Z]/g, '');
		});
		form2Name.addEventListener('input', () => {
			form2Name.value = form2Name.value.replace(/[a-zA-Z]/g, '');
		});
		form3Name.addEventListener('input', () => {
			form3Name.value = form3Name.value.replace(/[a-zA-Z]/g, '');
		});
		form1Phone.addEventListener('input', () => {
			form1Phone.value = form1Phone.value.replace(/[^0-9+]/g, '');
		});
		form3Phone.addEventListener('input', () => {
			form3Phone.value = form3Phone.value.replace(/[^0-9+]/g, '');
		});
		form2Phone.addEventListener('input', () => {
			form2Phone.value = form2Phone.value.replace(/[^0-9+]/g, '');
		});
		/* (/\+?[78]([-()]*\d){10}/g) */
	};
	reg();
});



