$(function(){
	$('#menumobile').on('click', function (){
		$('.menu').show();
	});
	$('#closemenubtn').on('click', function (){
		$('.menu').hide();
	});
	$(window).scroll(function (){
		var currentScrollTop = $(window).scrollTop();

	$('#black-overlay').css('opacity',currentScrollTop/$('#black-overlay').height());
		});
})(jQuery);