const scroll = () => {
	const smooth = document.querySelector("body > main > a");
	smooth.addEventListener('click', e => {
		e.preventDefault();
		const id = smooth.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};

export default scroll;