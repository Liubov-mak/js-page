const sendForm = () => {

	const postData = data => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

	const form1 = document.getElementById('form1'),
		form2 = document.getElementById('form2'),
		form3 = document.getElementById('form3');

	const form = [form1, form2, form3];

	const statusMessage = document.createElement('div');
	statusMessage.style.color = '#19b5fe';
	statusMessage.style.margin = '25px';

	const divClear = () => {
		setTimeout(() => {
			statusMessage.textContent = '';
		}, 3000);
	};

	form.forEach(element => {
		element.addEventListener('submit', event => {
			event.preventDefault();
			element.appendChild(statusMessage);
			const formData = new FormData(element);
			const body = {};
			statusMessage.textContent = loadMessage;

			formData.forEach((val, key) => {
				body[key] = val;
			});

			const clearInput = () => {
				setTimeout(() => {
					element.querySelectorAll('input').forEach(element => { element.value = ''; });
				}, 2000);
			};

			const lengthVerify = body => {
				if (body.user_name === '' || body.user_phone === '' || body.user_email === "") {
					return false;
				} else if (body.user_name < 3) {
					return false;
				} else if (body.user_phone.length <= 10 || body.user_phone.length >= 13) {
					return false;
				} else {
					return true;
				}
			};

			if (lengthVerify(body) === false) {
				statusMessage.textContent = 'Пожалуйста, корректно внесите данные';
				lengthVerify(body);
				clearInput();
				divClear();
			} else {
				postData(body)
					.then(response => {
						if (response.status !== 200) {
							throw new Error('status network not 200');
						}
						statusMessage.textContent = successMesage;
						divClear();
					})
					.catch(error => {
						statusMessage.textContent = errorMessage;
						console.error(error);
						divClear();
					});
				clearInput();
			}
		});
	});
};

export default sendForm;
