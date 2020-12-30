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

	const form = document.getElementById('form1');
	const statusMessage = document.createElement('div');
	statusMessage.style.color = '#19b5fe';
	statusMessage.style.margin = '25px';

	form.addEventListener('submit', event => {
		event.preventDefault();
		form.appendChild(statusMessage);
		const formData = new FormData(form);
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
			form.querySelectorAll('input').forEach(element => { element.value = ''; });
		}, 2000);
	});
};


export default sendForm;