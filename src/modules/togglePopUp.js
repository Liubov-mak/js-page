const togglePopUp = () => {
	const popupBtn = document.querySelectorAll('.popup-btn'),
		popup = document.querySelector('.popup');

	popupBtn.forEach(elem => elem.addEventListener('click', () => {
		popup.style.display = 'block';
		const popupContent = document.querySelector('.popup-content');
		popupContent.style.animation = 'showBlock 1s linear forwards';




		let stepLeft = 0;
		function move() {
			stepLeft += 5;
			popupContent.style.left = stepLeft + "px";
			if (stepLeft < 550) {
				requestAnimationFrame(move);
			}
			cancelAnimationFrame(move);
		}
		requestAnimationFrame(move);
		/* const intViewportWidth = window.innerWidth;
		if (intViewportWidth < 768) {
			
		} */
		/* popupContent.style.top = '0 px';
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
		} */
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
