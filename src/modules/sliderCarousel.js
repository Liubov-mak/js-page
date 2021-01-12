const sliderCarousel = () => {
	class SliderCarousel {
		constructor({
			main,
			wrap,
			next,
			prev,
			infinity = false,
			position = 0,
			slidesToShow = 1, // если поставить 4, то в css изменить cal-container width: 30%; width: 80%;
			responsive = [],
		}) {
			this.main = document.querySelector(main);
			this.wrap = document.querySelector(wrap);
			this.slides = document.querySelector(wrap).children;
			this.next = document.querySelector(next);
			this.prev = document.querySelector(prev);
			this.options = {
				position,
				infinity,
				widthSlide: Math.floor(100 / slidesToShow),
			};
			this.slidesToShow = slidesToShow;
			this.responsive = responsive;
		}
		init() {
			this.addPicClass();
			this.addStyle();
			if (this.prev && this.next) {
				this.controlSlider();
			} else {
				this.addArrow();
				this.controlSlider();
			}
			if (this.responsive) {
				this.responsInit();
			}
		}
		responsInit() {
			const slidesToShowDefault = this.slidesToShow;
			const allResponse = this.responsive.map(item => item.breakpoint);
			const maxResponse = Math.max(...allResponse);

			const checkResponse = () => {
				const widthWindow = document.documentElement.clientWidth;
				if (widthWindow < maxResponse) {
					for (let i = 0; i < allResponse.length; i++) {
						if (widthWindow < allResponse[i]) {
							this.slidesToShow = this.responsive[i].slideToShow;
							this.options.widthSlide = Math.floor(100 / this.slidesToShow);
							this.addStyle();
						}
					}
				} else {
					this.slidesToShow = slidesToShowDefault;
					this.options.widthSlide = Math.floor(100 / this.slidesToShow);
					this.addStyle();
				}
			};
			checkResponse();
			window.addEventListener('resize', checkResponse);
		}
		addPicClass() {
			this.main.classList.add('pic-slider');
			this.wrap.classList.add('pic-slider__wrap');
			for (const item of this.slides) {
				item.classList.add('pic-slider__item');
			}
		}
		addStyle() {
			let style = document.getElementById('sliderCarousel-style');
			if (!style) {
				style = document.createElement('style');
				style.id = 'sliderCarousel-style';
			}

			style.textContent = `
				.pic-slider {
					overflow: hidden;
				}
				.pic-slider__wrap {
					display: flex;
					transition: transform 0.3s;
					will-change: transform; 
				}
				.pic-slider__item {
					flex: 0 0 ${this.options.widthSlide}%;
					margin: auto 0;
				}
			`;
			document.head.appendChild(style); // вставляем данный блок в документ
		}

		controlSlider() {
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}

		prevSlider() {
			if (this.options.infinity || this.options.position > 0) {
				--this.options.position;
				if (this.options.position < 0) {
					this.options.position = this.slides.length - this.slidesToShow;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
		}

		nextSlider() {
			if (this.options.infinity ||  this.options.position < this.slides.length - this.slidesToShow) {
				++this.options.position;
				if (this.options.position > this.slides.length - this.slidesToShow) {
					this.options.position = 0;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
		}

		addArrow() {
			/* this.prev = document.createElement('button');
			this.next = document.createElement('button');

			this.prev.className = 'cal-slider__prev';
			this.next.className = 'cal-slider__next';

			this.main.appendChild(this.prev);
			this.main.appendChild(this.next);

			const style = document.createElement('style');
			style.textContent = `
				.cal-slider__prev,
				.cal-slider__next {
					position: absolute;
					top: 50%;    
					border: 0.5px solid black;
					background-color: transparent;
					border-radius: 50%;
					width: 25px;
					height: 25px;
					display: flex;
					align-items: center;
					text-align: center;
					justify-content: center;    
					padding-bottom: 5px;
					color: black;
				}
				.cal-slider__prev {
					left: 0;			
				}
				.cal-slider__next {
					right: 0;					
				}								
			`;
			document.head.appendChild(style); */
		}
	}
	const options = {
		main: '.cal-container', // из верстки класс
		wrap: '.cal-wrapper', // из верстки класс
		prev: '#cal-left', // из верстки класс
		next: '#cal-right', // из верстки класс
		slidesToShow: 1,
		infinity: true,
	/* 	responsive: [{   // если slidesToShow: 4 и более, разблокировать responsive
			breakpoint: 1024,
			slideToShow: 3
		},
		{
			breakpoint: 768,
			slideToShow: 2
		},
		{
			breakpoint: 376,
			slideToShow: 1
		}
		] */
	};
	const carousel = new SliderCarousel(options);
	carousel.init();
};


export default sliderCarousel;
