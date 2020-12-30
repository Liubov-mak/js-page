const sendForm = () => {

	const postData = () => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: 'formData'
	});

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

	const form1 = document.getElementById('form1'),
		form2 = document.getElementById('form2'),
		form3 = document.getElementById('form3');

	const form = [form1, form2, form3];
	console.log(form);


	const statusMessage = document.createElement('div');
	statusMessage.style.color = '#19b5fe';
	statusMessage.style.margin = '25px';

	form.forEach(element => {
		element.addEventListener('submit', event => {
			event.preventDefault();
			element.appendChild(statusMessage);
			const formData = new FormData(element);
			statusMessage.textContent = loadMessage;

			postData(formData)
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
