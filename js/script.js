$(function(){

	$(window).scroll(function (){
		var currentScrollTop = $(window).scrollTop();

	$('#black-overlay').css('opacity',currentScrollTop/$('#black-overlay').height());
		});
})(jQuery);
