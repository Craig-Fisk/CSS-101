import Presentation from './presentation.js';

function initFunction() {
	document.getElementById('syntaxButton').addEventListener('click', (e) => {
		document.querySelectorAll('.syntax').forEach(element => {
			element.classList.toggle('syntax--highlighted');
		});
	});

	document.getElementById('specificityButton').addEventListener('click', (e) => {
		document.getElementById('questionHide').classList.toggle('hidden');
	});
}

const presentation = new Presentation(initFunction);