import Presentation from './presentation.js';

function initFunction() {
	document.getElementById('syntaxButton').addEventListener('click', (e) => {
		document.querySelectorAll('.syntax').forEach(element => {
			element.classList.toggle('syntax--highlighted');
		});
	});
}

const presentation = new Presentation(initFunction);

presentation.goToSlide(17);