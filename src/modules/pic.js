const pic = () => {
	const command = document.querySelector('#command');
	const commandPhotos = command.querySelectorAll('.command__photo');

	command.addEventListener('mouseover', event => {
		if (event.target.matches('.command__photo')) {
			for (let i = 0; i < commandPhotos.length; i++) {
				if (event.target === commandPhotos[i]) {
					const targetSrc = event.target.src;
					event.target.src = event.target.dataset.img;
					event.target.dataset.img = targetSrc;
				}
			}
		}
	});
	command.addEventListener('mouseout', event => {
		if (event.target.matches('.command__photo')) {
			for (let i = 0; i < commandPhotos.length; i++) {
				if (event.target === commandPhotos[i]) {
					const targetSrc = event.target.src;
					event.target.src = event.target.dataset.img;
					event.target.dataset.img = targetSrc;
				}
			}
		}
	});
};


export default pic;