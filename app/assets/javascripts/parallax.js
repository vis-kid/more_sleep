$(document).ready(function() {

  $(window).bind('scroll', function(e) {
		parallax(); 
		find_me_bar();
		static_bar();
		preview_bar();
	});

  html_body = $('html, body')
  one = $('img#1') 
  two = $('img#2') 
  three= $('img#3') 
  four = $('img#4') 
  five = $('img#5') 
  six = $('img#6') 
  seven = $('img#7') 
  eight = $('img#8') 
  nine = $('img#9') 
  ten = $('img#10') 
  eleven = $('img#11') 
  twelve = $('img#12') 

  one.click(function() {
    html_body.animate({ scrollTop: 0 }, 1000 );
      return false;
  });

  two.click(function() {
    html_body.animate({ scrollTop: 2735 }, 1000 );
      return false;
  });
});



function preview_bar() {
	Preview = $('#mini_preview');
  var top = $(document).scrollTop();
	if (top > 3300) {
		Preview.show();
	}
	else {
    Preview.hide();
	}  
}

function static_bar() {
	Static_Bar = $('#static_bar');
	Preview = $('#mini_preview');
  var top = $(document).scrollTop();
	if (top > 12000) {
    Static_Bar.hide();
	}
	else if (top > 3300) {
	  Static_Bar.show();
	}
	else {
		Static_Bar.hide();
	}  
}

function find_me_bar() {
	Find_Me_Bar = $('#find_me_bar');
  var top = $(document).scrollTop();
	if (top < 12000) {
    Find_Me_Bar.hide();
	}
	else {
		Find_Me_Bar.show();
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


