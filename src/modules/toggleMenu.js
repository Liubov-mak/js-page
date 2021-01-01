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

	// плавный скролл якорей

	const service = document.querySelector('.service'),
		portfolio = document.querySelector('.portfolio'),
		calc = document.querySelector('.calc'),
		command = document.querySelector('.command'),
		connect = document.querySelector('.connect');

	menuList[0].addEventListener('click', () => {
		event.preventDefault();
		/* document.documentElement.scrollTop = 900; */
		service.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
	menuList[1].addEventListener('click', () => {
		event.preventDefault();
		portfolio.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});
	menuList[2].addEventListener('click', () => {
		event.preventDefault();
		calc.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});
	menuList[3].addEventListener('click', () => {
		event.preventDefault();
		command.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});
	menuList[4].addEventListener('click', () => {
		event.preventDefault();
		connect.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});

};

export default toggleMenu;
