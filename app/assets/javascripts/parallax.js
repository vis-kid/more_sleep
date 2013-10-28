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
	Workbuddoff = $('#workbuddoff_pic');
	Workbuddoff_Text = $('#workbuddoff_text');
	Jackasses = $('#jackasses');
	Jackasses_Text= $('#jackasses_text');
	Agile = $('#agile_pic');
	Agile_Text = $('#agile_text');
	Teamwork = $('#teamwork_pic');
	Teamwork_Text = $('#teamwork_text');

	Desktop_Pic.css('top', (0 - (scrollPosition * .4 )) + 'px');
	Background_Pattern.css('top', (0 - (scrollPosition * .35)) + 'px');
	Piggie_Text.css('top', (0 - (scrollPosition * .5)) + 'px');

	Sinatra.css('top', (0 - (scrollPosition * .5)) + 'px');
	Applying.css('top', (0 - (scrollPosition * 1)) + 'px');
	Dreamer.css('top', (0 - (scrollPosition * .5)) + 'px');
	Dreamer_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Workbuddoff.css('top', (0 - (scrollPosition * .5)) + 'px');
	Workbuddoff_Text.css('top', (0 - (scrollPosition * 1.3)) + 'px');
	Jackasses.css('top', (0 - (scrollPosition * .5)) + 'px');
	Jackasses_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Agile.css('top', (0 - (scrollPosition * .5)) + 'px');
	Agile_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Teamwork.css('top', (0 - (scrollPosition * .5)) + 'px');
	Teamwork_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
}

