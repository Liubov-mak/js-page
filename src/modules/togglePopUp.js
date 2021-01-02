const togglePopUp = () => {
	const popupBtn = document.querySelectorAll('.popup-btn'),
		popup = document.querySelector('.popup');

	popupBtn.forEach(elem => elem.addEventListener('click', () => {
		const popupContent = document.querySelector('.popup-content');

		let stepLeft = -20;
		function move() {
			stepLeft += 2;
			popupContent.style.left = stepLeft + "%";
			if (stepLeft <= 38) {
				requestAnimationFrame(move);
			}
			cancelAnimationFrame(move);
		}
		if (document.documentElement.clientWidth > 768) {
			popupContent.style.animation = 'showBlock 0.5s linear forwards';
			popup.style.display = 'block';
			requestAnimationFrame(move);
		} else {
			popupContent.style.animation = 'showBlock 0.5s linear forwards';
			popup.style.display = 'block';
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

export default togglePopUp;
