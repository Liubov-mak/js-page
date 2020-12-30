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

export default toggleMenu;
