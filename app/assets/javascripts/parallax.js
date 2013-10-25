$(document).ready(function() {
  $(window).bind('scroll', function(e) {
		parallax(); 
	});
});


function parallax() {
  var scrollPosition = $(window).scrollTop();
	$('#Desktop_Pic').css('top', (0 - (scrollPosition * .4 )) + 'px');
	$('.background_pattern').css('top', (0 - (scrollPosition * .25)) + 'px');
	$('#piggie_text').css('top', (0 - (scrollPosition * .5)) + 'px');
}
