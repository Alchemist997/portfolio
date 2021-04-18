let btnsArea = document.querySelector('.slider-btns');
let inputs = btnsArea.querySelectorAll('input');
let labels = btnsArea.querySelectorAll('label');

let itemsWrap = document.querySelector('.team-list');
let preArr = itemsWrap.querySelectorAll('.team-member');
let array = Array.from(preArr);
let slicedList = [];

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
	
};