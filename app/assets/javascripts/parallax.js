$(document).ready(function() {
  $(window).bind('scroll', function(e) {
		parallax(); 
		static_bar();
	});
});


function static_bar() {
	Static_Bar = $('#static_bar');
  var top = $(document).scrollTop();
	if (top > 3500) {
	  Static_Bar.fadeIn();
	}
	else {
		Static_Bar.hide();
	}  
}

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
	Grace = $('#grace_pic');
	Grace_Text = $('#grace_text');
	Crunchtime = $('#crunchtime_pic');
	Crunchtime_Text = $('#crunchtime_text');
	Balance = $('#balance_pic');
	Balance_Text = $('#balance_text');
	Balance_Text_Rotated = $('#rotated');
	Team = $('#team_pic');
	Team_Text = $('#team_text');
	Down = $('#down_to_earth');
	Down_Text = $('#down_to_earth_text');
	Crazy = $('#crazy_handstand_pic');
	Larry = $('#pink_larry_pic');

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
	Grace.css('top', (0 - (scrollPosition * .5)) + 'px');
	Grace_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Crunchtime.css('top', (0 - (scrollPosition * .5)) + 'px');
	Crunchtime_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Balance.css('top', (0 - (scrollPosition * .5)) + 'px');
	Balance_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Balance_Text_Rotated.css('top', (0 - (scrollPosition * 1)) + 'px');
	Team.css('top', (0 - (scrollPosition * .5)) + 'px');
	Team_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Down.css('top', (0 - (scrollPosition * .5)) + 'px');
	Down_Text.css('top', (0 - (scrollPosition * 1)) + 'px');
	Crazy.css('top', (0 - (scrollPosition * .5)) + 'px');
	Larry.css('top', (0 - (scrollPosition * 1)) + 'px');
}

