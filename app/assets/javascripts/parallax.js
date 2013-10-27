$(document).ready(function() {
  $(window).bind('scroll', function(e) {
		parallax(); 
	});
});


function parallax() {
  var scrollPosition = $(window).scrollTop();
	Desktop_Pic = $('#Desktop_Pic');
	Background_Pattern = $('.background_pattern');
	Piggie_Text = $('#piggie_text');
	Sinatra = $('#sinatra');
	Applying = $('#applying_text');
	Dreamer = $('#dreamer');
	Dreamer_Text = $('#dreamer_text');

	Desktop_Pic.css('top', (0 - (scrollPosition * .4 )) + 'px');
	Background_Pattern.css('top', (0 - (scrollPosition * .25)) + 'px');
	Piggie_Text.css('top', (0 - (scrollPosition * .5)) + 'px');
	Sinatra.css('top', (0 - (scrollPosition * .5)) + 'px');
	Applying.css('top', (0 - (scrollPosition * 1)) + 'px');
	Dreamer.css('top', (0 - (scrollPosition * .5)) + 'px');
	Dreamer_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
}

