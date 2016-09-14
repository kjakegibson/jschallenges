/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 $(function(){
	
 	

// $('#teamone-shoot').click(function() {
// 	var current_teamone_shots = $('#teamone-numshots').text();
// 	current_teamone_shots++;
// 	$('#teamone-numshots').text(current_teamone_shots);

// })

// $('#teamtwo-shoot').click(function() {
// 	var current_teamtwo_shots = $('#teamtwo-numshots').text();
// 	current_teamtwo_shots++;
// 	$('#teamtwo-numshots').text(current_teamtwo_shots);

// })



//  })

function shot() {
		return Math.random();
	}


	$("#teamone-shoot").click( function() {
    	$("#teamone-numshots").html(function(i,val){ return +val+1});
    	
		$("body").css('background-color', '#ffffff');
    	if (shot() > 0.85) {
    		$("#teamone-numhits").html(function(i,val){ return +val+1});
    		$("body").css('background-color', '#7171da');
    	}    
	});

	$("#teamtwo-shoot").click( function() {
    	$("#teamtwo-numshots").html(function(i,val){ return +val+1});
    	
		$("body").css('background-color', '#ffffff');
    	if (shot() > 0.65) {
    		$("#teamtwo-numhits").html(function(i,val){ return +val+1});
    		$("body").css('background-color', '#ff3333');
    	}    
	});

	$("#reset").click( function() {
		$("#num-resets").html(function(i,val){ return +val+1 });
		$("#teamone-numshots").html(function(i,val){ return 0 });
		$("#teamone-numhits").html(function(i,val){ return 0 });
		$("#teamtwo-numshots").html(function(i,val){ return 0 });
		$("#teamtwo-numhits").html(function(i,val){ return 0 });
		$("body").css('background-color', '#ffffff');
	});

	})