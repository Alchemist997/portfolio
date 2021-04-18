// Элементы для адаптива
let containers = document.querySelectorAll('.container');
let portfolio = document.querySelector('.portfolio-wrap');
let prices = document.querySelector('.pricelist-wrap');
let team = document.querySelector('.team-list');

// Элементы для изменения при <1000
let headerLogo = document.querySelector('.header-logo img');
let headerlinks = document.querySelectorAll('.header-nav a');
let articleInfo = document.querySelectorAll('.article-info');
let h1 = document.querySelector('.main h1');
let mainP = document.querySelector('.main p');
let btnsWrap = document.querySelector('.slider-btns');
let btns = btnsWrap.querySelectorAll('.slider-btn');

// Элементы для уменьшения при <488
let mainBtn1 = document.querySelector('.main-btn'); // Для удаления отступа
let portfolioImgs = document.querySelectorAll('.portfolio-item');

// ===================================================================================

let around = function() {
	portfolio.style.justifyContent = 'space-around';
	prices.style.justifyContent = 'space-around';
	team.style.justifyContent = 'space-around';
};

let headerBlogResize = function() {
	headerLogo.style.width = '150px';

	for (let i = 0; i < headerlinks.length; i++) {
		headerlinks[i].style.marginLeft = '20px';
		headerlinks[i].style.fontSize = '26px';
		headerlinks[i].style.padding = '10px 0';
	};

	for (let i = 0; i < articleInfo.length; i++) {
		articleInfo[i].style.gridTemplateColumns = '1fr 1fr';
		articleInfo[i].style.gridTemplateRows = '30% 18% 1fr';
	};

	h1.style.fontSize = '6vw';
	mainP.style.fontSize = '16px';
	console.log('headerBlogResize ON')
};

let btnResize = function() {
	btnsWrap.style.width = '192px';
	for (let i = 0; i < btns.length; i++) {
		btns[i].style.width = '45px';
		btns[i].style.height = '45px';
	};
};

let smallDisplay = function() {
	for (let i = 0; i < portfolioImgs.length; i++) {
		mainBtn1.style.marginRight = '0';
		// Задаёт картинкам портфолио ширину контейнера
		portfolioImgs[i].style.width = '100%';
	};
	console.log('smallDisplay ON')
};

let adaptive = function () {
	for (let i = 0; i < containers.length; i++) {
		containers[i].style.width = '95.2%';

		if (i > 0) { // Условие для пропуска хэдэра
			containers[i].style.paddingTop = '10%';
			containers[i].style.paddingBottom = '7.7%';
		};
	};
	console.log('adavtive ON')
};

window.addEventListener('load', function() {
	let width = document.documentElement.clientWidth;

	if (width <= 1260) {
		around();
		adaptive();
	};

	if (width < 1000) {
		headerBlogResize();
		btnResize();
	};

	if (width < 488) {
		smallDisplay();
	};
});

// ===================================================================================

let between = function() {
	portfolio.style.justifyContent = 'space-between';
	prices.style.justifyContent = 'space-between';
	team.style.justifyContent = 'space-between';
};

let btnReturn = function() {
	btnsWrap.style.width = '64px';
	for (let i = 0; i < btns.length; i++) {
		btns[i].style.width = '15px';
		btns[i].style.height = '15px';
	};
};

let smallDisplayDisable = function() {
	for (let i = 0; i < portfolioImgs.length; i++) {
		mainBtn1.style.marginRight = '20px';
		// Возвращает картинкам портфолио статичную ширину
		portfolioImgs[i].style.width = '370px';
	};
	console.log('smallDisplay OFF')
};

let static = function () {
	for (let i = 0; i < containers.length; i++) {
		containers[i].style.width = '1170px';

		if (i > 0) { // Условие для пропуска хэдэра
			containers[i].style.paddingTop = '120px';
			containers[i].style.paddingBottom = '90px';
		};
	};
	console.log('adavtive OFF')
};

window.addEventListener('resize', function() {
	let width = document.documentElement.clientWidth;

	if (width <= 1260) {
		around();
		adaptive();
	} else {
		between();
		static();
	};

	if (width < 1000) {
		headerBlogResize();
		btnResize();
	} else {
		btnReturn();
		headerLogo.style.width = '200px';
		h1.style.fontSize = '60px';
		mainP.style.fontSize = '22px';
		// Возврат размеров ссылок в блоке навигации и элементов статей блога отсутствует намеренно 
	};

	if (width < 488) {
		smallDisplay();
	} else {
		smallDisplayDisable();
	};
	console.log(width);
});