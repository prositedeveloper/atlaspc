'use strict';

const burger = document.querySelector('#burger');
const menu = document.querySelector('#nav');

burger.addEventListener('click', () => {
	menu.classList.toggle('show');
});


$(function() {
	$('.char__inner').slick({
		arrows: false,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 2000,
  		cssEase: 'linear',
  		fade: true,
  		infinite: true,
	});
});