class Validator {
	constructor({ selector, pattern = {}, method }) {
		this.form = document.querySelector(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
		this.error = new Set();
	}
	init() {
		this.applyStyle();
		this.setPattern();
		this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
		this.form.addEventListener('submit', e => {
			e.preventDefault();
			this.elementsForm.forEach(elem => this.chekIt({ target: elem }));
			if (this.error.size) {
				e.preventDefault();
			}
		});
	}
	isValid(elem) {
		const validatorMethod = {
			notEmpty(elem) {
				if (elem.value.trim() === '') {
					return false;
				}
				return true;
			},
			pattern(elem, pattern) {
				return pattern.test(elem.value);
			}
		};
		if (this.method) {
			const method = this.method[elem.id];
			if (method) {
				return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
			}
		}
		return true;
	}
	chekIt(event) {
		const target = event.target;
		if (this.isValid(target)) {
			this.showSuccess(target);
			this.error.delete(target);
		} else {
			this.showError(target);
			this.error.add(target);
		}
		/* this.error; */
	}
	showError(elem) {
		elem.classList.remove('success');
		elem.classList.add('error');
		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
			return;
		}
		const errorDiv = document.createElement('div');
		errorDiv.textContent = 'Ошибка в этом поле';
		errorDiv.classList.add('validator-error');
		elem.insertAdjacentElement('afterend', errorDiv);
	}
	showSuccess(elem) {
		elem.classList.remove('error');
		elem.classList.add('success');
		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
			elem.nextElementSibling.remove();
		}
	}
	applyStyle() {
		const style = document.createElement('style'); // создали сами новый тэг
		style.textContent = `
			input.success {
				border: 2px solid green
			}
			input.error {
				border: 2px solid red
			}
			.validator-error {
				font-size: 12px;
				color: red;
			}
		`;

		document.head.appendChild(style); // добавили наш новый тэг в head
	}
	setPattern() {

		if (this.pattern.phone) {
			this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
		}
		if (this.pattern.email) {
			this.pattern.email = /^\w+@\w+\.\w{2,}$/;
		}
	}
}

const valid = new Validator({
	selector: '#form1',
	pattern: {
		phone: /^\d+$/,
		zip: /\d{5,6}/
	},
	method: {
		phone: [
			['notEmpty'],
			['pattern', 'phone']
		],
		email: [
			['notEmpty'],
			['pattern', 'email']
		]
	}
});
valid.init();
const validNext = new Validator({
	selector: '#form2',
	pattern: {
		phone: /^\d+$/,
		zip: /\d{5,6}/
	},
	method: {
		phone: [
			['notEmpty'],
			['pattern', 'phone']
		],
		email: [
			['notEmpty'],
			['pattern', 'email']
		]
	}
});
validNext.init();
