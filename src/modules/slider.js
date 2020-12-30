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

export default slider;
