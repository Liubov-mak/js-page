const calc = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block'),
		calcType = document.querySelector('.calc-type'),
		calcSquare = document.querySelector('.calc-square'),
		calcCount = document.querySelector('.calc-count'),
		calcDay = document.querySelector('.calc-day'),
		totalValue = document.getElementById('total');
	const input = calcBlock.querySelectorAll("input");


	const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value,
			squareValue = +calcSquare.value;

		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}

		if (calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		} else {
			dayValue = 1;
		}

		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		} else {
			total = 0;
		}
		totalValue.textContent = total;

		// анимация total

		let count = 0;
		setInterval(() => {
			if (count < total) {
				count++;
				totalValue.textContent = count;
			}
		}, 2);
		console.log(total);

	};

	calcBlock.addEventListener('change', event => {
		const target = event.target;
		/* if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')) {
            console.log(1); // первый способ
        } */

		/* if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
            console.log(1); // второй способ
        } */

		if (target.matches('select') || target.matches('input')) {
			countSum(); // третий способ
		}
	});

	calcBlock.addEventListener('input', event => {
		const target = event.target;
		for (let i = 0; i < input.length; i++) {
			if (target.matches('input')) {
				input[i].value = input[i].value.replace(/\D/i, '');
			}
		}
	});
};


export default calc;