let btn = document.querySelectorAll('.click-btn');
for (i = 0; i < btn.length; i++) {
	let subMenu = btn[i].nextElementSibling;
	let thisBtn = btn[i];
	btn[i].addEventListener('click', function () {
		subMenu.classList.toggle('open');
		thisBtn.classList.toggle('active');
	});
};

let burger = document.querySelectorAll('.burger');
let menu = document.querySelectorAll('.menu');
for (i = 0; i < burger.length; i++) {
	let thisBurger = burger[i];
	let thisMenu = menu[i];
	burger[i].addEventListener('click', function () {
		thisBurger.classList.toggle('active');
		thisMenu.classList.toggle('open');
	});
};