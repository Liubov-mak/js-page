const reg = () => {
	const form2Message = document.getElementById('form2-message'),
		form1Name = document.getElementById('form1-name'),
		form2Name = document.getElementById('form2-name'),
		form3Name = document.getElementById('form3-name'),
		form1Phone = document.getElementById('form1-phone'),
		form3Phone = document.getElementById('form3-phone'),
		form2Phone = document.getElementById('form2-phone');

	form2Message.addEventListener('input', () => {
		form2Message.value = form2Message.value.replace(/[a-zA-Z]/g, '');
	});
	form1Name.addEventListener('input', () => {
		form1Name.value = form1Name.value.replace(/[a-zA-Z]/g, '');
	});
	form2Name.addEventListener('input', () => {
		form2Name.value = form2Name.value.replace(/[a-zA-Z]/g, '');
	});
	form3Name.addEventListener('input', () => {
		form3Name.value = form3Name.value.replace(/[a-zA-Z]/g, '');
	});
	form1Phone.addEventListener('input', () => {
		form1Phone.value = form1Phone.value.replace(/[^0-9+]/g, '');
	});
	form3Phone.addEventListener('input', () => {
		form3Phone.value = form3Phone.value.replace(/[^0-9+]/g, '');
	});
	form2Phone.addEventListener('input', () => {
		form2Phone.value = form2Phone.value.replace(/[^0-9+]/g, '');
	});
	/* (/\+?[78]([-()]*\d){10}/g) */
};


export default reg;