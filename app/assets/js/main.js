
$(document).ready(function(){
	//slider
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
	//scroll
/*	var documentElem = $(document),
		nav = $('nav'),
		lastScrollTop = 0;

		documentElem.on('scroll',function(){
			var currentScrollTop = $(this).scrollTop();

			if(currentScrollTop > lastScrollTop) nav.addClass('hidden');
			else nav.removeClass('hidden');
			lastScrollTop = currentScrollTop;
		});
});
*/
