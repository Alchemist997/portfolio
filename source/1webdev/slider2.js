let btnsArea = document.querySelector('.slider-btns');
let inputs = btnsArea.querySelectorAll('input');
let labels = btnsArea.querySelectorAll('label');

let itemsWrap = document.querySelector('.team-list');
let preArr = itemsWrap.querySelectorAll('.team-member');
let array = Array.from(preArr);
let slicedList = [];

let prev = itemsWrap.querySelector('.prev');
let next = itemsWrap.querySelector('.next');

window.addEventListener('DOMContentLoaded', function() {
	for (let i = 3; i < preArr.length; i++) {
		preArr[i].style.display = 'none';
	};
});

let slicer = function(arr, number, quant) {
	if (number === 0) {
		slicedList.push(arr.slice(number, number+quant));
	} else {
		slicedList.push(arr.slice(number*quant, number*quant+quant));
	};
};

for (let i = 0; i < inputs.length; i++) {

	slicer(array, i, 3);

	inputs[i].onchange = function () {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked) {
				labels[i].style.backgroundColor = '#3949ab';
				for (let j = 0; j < slicedList[i].length; j++) {
					slicedList[i][j].style.display = 'flex';
				};
			} else {
				labels[i].style.backgroundColor = '#00897b';
				for (let j = 0; j < slicedList[i].length; j++) {
					slicedList[i][j].style.display = 'none';				
				};
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