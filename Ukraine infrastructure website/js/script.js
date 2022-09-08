new Swiper('.swiper-first', {
	loop:false,
	autoplaySpeed: 1000,
	speed:2000,
	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},

	autoplay: {
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},


	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});
new Swiper('.swiper-second', {
	direction: 'horizontal',
	autoHeight: true,
	speed: 400,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
    // when window width is >= 320px
    1025: {
    	direction: 'vertical',
    },
}
});

new Swiper('.swiper-third', {
	direction: 'horizontal',
	autoHeight: true,
	speed: 400,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	scrollbar: {
		el: '.swiper-third__scrollbar',
	},
	breakpoints: {
    // when window width is >= 320px
    1025: {
    	direction: 'vertical',
    },
}
});

let btn=document.querySelectorAll('.click-btn');
for(i=0; i<btn.length; i++){
	let subMenu=btn[i].nextElementSibling;
	let thisBtn=btn[i];	
	btn[i].addEventListener('click', function(){
		subMenu.classList.toggle('open');
		thisBtn.classList.toggle('active');
	});
};
let burger=document.querySelectorAll('.burger');
let menu=document.querySelectorAll('.menu');
for(i=0; i<burger.length; i++){
	let thisBurger=burger[i];
	let thisMenu=menu[i];

	burger[i].addEventListener('click', function(){
		thisBurger.classList.toggle('active');
		thisMenu.classList.toggle('open');
	});	
};