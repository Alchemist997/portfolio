let features = document.querySelector('#features');
let inputs = features.querySelectorAll('input');
let labels = features.querySelectorAll('label');
let items = features.querySelectorAll('figure');
let prev = features.querySelector('.prev');
let next = features.querySelector('.next');

for (let i = 0; i < inputs.length; i++) {
	inputs[i].onchange = function () {
		for (i = 0; i < inputs.length; i++) {
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

	prev.onclick = function() {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked && i-1 >= 0) {
				inputs[i-1].click();
			};
		};
	};

	next.onclick = function() {
		for (let i = inputs.length-1; i >= 0 ; i--) {
			if (inputs[i].checked && i+1 < inputs.length) {
				inputs[i+1].click();
			};
		};
	};
};