let containers = document.querySelectorAll('.container');

let form = document.querySelector('form');
let name = form.querySelector('input[name=name]');
let email = form.querySelector('input[name=email]');

let services = document.querySelector('.services .container')

// ===================================================================================

	let adaptive = function () {
		for (let i = 0; i < containers.length; i++) {
			if (i > 0) { // Условие для пропуска хэдэра
				containers[i].style.paddingTop = '10%';
				containers[i].style.paddingBottom = '7.7%';
			};
		};
		console.log('adavtive ON')
	};

	let static = function () {
		for (let i = 0; i < containers.length; i++) {
			if (i > 0) { // Условие для пропуска хэдэра
				containers[i].style.removeProperty('padding-top');
				containers[i].style.removeProperty('padding-bottom');
			};
		};
		console.log('adavtive OFF')
	};

	let smallWidth = function() {
		name.placeholder = 'Name';
		email.placeholder = 'Email';
		services.style.width = '100%';		
	};

	let normalWidth = function() {
		name.placeholder = 'Your NAME';
		email.placeholder = 'Your Email';
		services.style.removeProperty('width');
	};

// ===================================================================================

	window.addEventListener('load', function() {
		let width = document.documentElement.clientWidth;

		if (width <= 1260) {
			adaptive();
		};

		if (width < 450) {
			smallWidth();
		};
	});

	window.addEventListener('resize', function() {
		let width = document.documentElement.clientWidth;
		let inner = window.innerWidth;

		if (width <= 1260) {
			adaptive();
		} else {
			static();
		};

		if (width < 450) {
			smallWidth();
		} else {
			normalWidth();
		};
		console.log(width + ', ' + inner);
	});