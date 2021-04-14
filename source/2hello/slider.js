let features = document.querySelector('#features');
let inputs = features.querySelectorAll('input');
let labels = features.querySelectorAll('label');
let items = features.querySelectorAll('figure');

for (let j = 0; j < inputs.length; j++) {
	inputs[j].onchange = function () {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked) {
				labels[i].style.backgroundColor = '#cacdcf';
				labels[i].style.color = '#ffffff';
				items[i].style.opacity = 1;
			} else {
				labels[i].style.backgroundColor = 'transparent';
				labels[i].style.color = '#a6adb0';
				items[i].style.opacity = 0;
			};
		};
	};
};