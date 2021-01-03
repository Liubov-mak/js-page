import sendForm from "./sendForm";

const reg = () => {
	const userName = document.querySelectorAll('[name="user_name"]'),
		userPhone = document.querySelectorAll('[name="user_phone"]'),
		userEmail = document.querySelectorAll('[name="user_email"]'),
		form2Message = document.getElementById('form2-message');

	userName.forEach(elem => {
		elem.addEventListener('input', () => { // в поле "имя" только кириллица и пробел
			const regex = /[^А-ЯЁа-яё\s]+/g;
			elem.value = elem.value.replace(regex, '');
		});
	});
	userPhone.forEach(elem => {
		elem.addEventListener('input', () => {
			elem.value = elem.value.replace(/[^0-9+]/g, '');
			elem.value = elem.value.replace(/\w{13,}/g, '');
		});
	});
	userEmail.forEach(elem => {
		elem.addEventListener('input', () => {
			const regex2 = /[^\w+@\w+.\w{2,3}]+/g;
			elem.value = elem.value.replace(regex2, '');
		});
	});

	form2Message.addEventListener('input', () => { // поле "мое сообщение" только кириллица, пробел и "." "," "!" "?"-символы
		const regex3 = /[^А-ЯЁа-яё\s.,!?]+/g;
		form2Message.value = form2Message.value.replace(regex3, '');
	});
};


export default reg;

