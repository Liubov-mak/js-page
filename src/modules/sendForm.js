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

			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					statusMessage.textContent = successMesage;
				})
				.catch(error => {
					statusMessage.textContent = errorMessage;
					console.error(error);
				});

			setTimeout(() => {
				element.querySelectorAll('input').forEach(element => { element.value = ''; });
			}, 1500);
		});
	});

};


export default sendForm;
