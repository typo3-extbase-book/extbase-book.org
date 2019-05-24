/*
 * TYPO3 Extbase Book
 *
 * (c)2019 by Michael Schams <schams.net>
 * https://extbase-book.org
 */

 $(document).ready(function () {
	// https://tgomilar.github.io/paroller.js/
	$("main .jumbotron").paroller({
		factor: 0.5,
		factorXs: 0.2,
		factorSm: 0.3,
		type: 'background',
		direction: 'vertical'
	});

	// affix promo container
	window.addEventListener('scroll', function () {
		var height = $(window).scrollTop()
		if (height > 382) {
			$('.affix').addClass('sticky');
		} else {
			$('.affix').removeClass('sticky');
		}
	});
});
