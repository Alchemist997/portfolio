console.log('heightChanger READY');
let blocksArr = document.querySelectorAll('.container');

let w = function() {
	return window.innerWidth; // Заменено с clientWidth для одновременной сработки с @media portrait
};

let h = function() {
	return document.documentElement.clientHeight;
};

let whRatio = function() {
	return w()/h();
};

let scrollifyActivator = function() {
	if (w() > 1024) { // Условие активации только на ПК/ноутбуке(1024 ноуты и ПК не попадают)
		let jq = document.createElement('script');
		jq.src = 'js/jquery.3.1.1.min.js';
		jq.async = false;
		
		let scrlf = document.createElement('script');
		scrlf.src = 'js/jquery.scrollify.min.js';
		scrlf.async = false;

		let scrollConfig = document.createElement('script');
		scrollConfig.src = 'js/scrollifyConfig.js';
		scrollConfig.async = false;

		document.body.append(jq, scrlf, scrollConfig);
	};
};

let blocks100 = function() {
	for (let i = 0; i < blocksArr.length; i++) {
		blocksArr[i].style.minHeight = h() + 'px';
	};
};

let blocks50 = function() {
	for (let i = 0; i < blocksArr.length; i++) {
		blocksArr[i].style.minHeight = h()/2 + 'px';
	};
};

window.addEventListener('DOMContentLoaded', function() {
	if (whRatio() > 1) {
		blocks100(); // Блоки во всю высоту дисплея
		scrollifyActivator(); // Подключает scrollify
	} else {
		blocks50(); // Блоки в пол-дисплея
	};
	console.log(w()+'x'+h()+', w/h ratio: '+whRatio().toFixed(2));
});

window.addEventListener('resize', function() {
	if (whRatio() > 1) {
		blocks100(); // Блоки во всю высоту дисплея
	} else {
		blocks50(); // Блоки в пол-дисплея
	};
	console.log(w()+'x'+h()+', '+whRatio().toFixed(2));
});