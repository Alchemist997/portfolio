console.log('heightChanger ENABLED');
let blocksArr = document.querySelectorAll('.container');
let body = document.querySelector('body');

let w = function() {
	return document.documentElement.clientWidth;
};

let h = function() {
	return document.documentElement.clientHeight;
};

let whRatio = function() {
	return w()/h();
};

let scrollifyActivator = function() {
	let autoScroll = document.createElement('script');
	autoScroll.setAttribute('src', 'js/scrollifyConfig.js');
	body.appendChild(autoScroll);
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

window.addEventListener('load', function() {
	if (whRatio() > 1.1) {
		blocks100(); // Блоки во всю высоту дисплея
		scrollifyActivator(); // Подключает scrollify
	} else {
		blocks50(); // Блоки в пол-дисплея
	};
	console.log(w()+'x'+h()+', w/h ratio: '+whRatio().toFixed(2));
});

window.addEventListener('resize', function() {
	if (whRatio() > 1.1) {
		blocks100(); // Блоки во всю высоту дисплея		
	} else {
		blocks50(); // Блоки в пол-дисплея		
	};
	console.log(w()+'x'+h()+', '+whRatio().toFixed(2));
});