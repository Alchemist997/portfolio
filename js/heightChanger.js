console.log('heightChanger ENABLED');
let blocksArr = document.querySelectorAll('.container');
let body = document.querySelector('body');

let w = function() {
	return document.documentElement.clientWidth;
};

let h = function() {
	return window.innerHeight; // clientHeight не видел панели в Safari iOS
};

let whRatio = function() {
	return w()/h();
};

let scrollifyActivator = function() {
	if (w() > 1024) { // Условие активации только на ПК/ноутбуке(1024 ноуты и ПК не попадают)
		let autoScroll = document.createElement('script');
		autoScroll.setAttribute('src', 'js/scrollifyConfig.js');
		body.appendChild(autoScroll);
	};
};

let blocks100 = function() {
	for (let i = 0; i < blocksArr.length; i++) {
		blocksArr[i].style.minHeight = h() + 'px';
	};
};

let header50 = function() {
	blocksArr[0].style.minHeight = h()/2 + 'px';

	for (let i = 1; i < blocksArr.length; i++) {
		blocksArr[i].style.minHeight = h() + 'px';
	};
};

window.addEventListener('load', function() {
	if (whRatio() > 1) {
		blocks100(); // Блоки во всю высоту дисплея
		scrollifyActivator(); // Подключает scrollify
	} else {
		header50(); // Шапка в пол-дисплея
	};
	console.log(w()+'x'+h()+', w/h ratio: '+whRatio().toFixed(2));
});

window.addEventListener('resize', function() {
	if (whRatio() > 1) {
		blocks100(); // Блоки во всю высоту дисплея		
	} else {
		header50(); // Шапка в пол-дисплея		
	};
	console.log(w()+'x'+h()+', '+whRatio().toFixed(2));
});