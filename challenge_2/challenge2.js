$(function(){


var titleState = true;

	$('h1').on("click", function(){
		if (titleState) {
			$("h1").css({color:"#ff0000"});
		} else {
			$("h1").css({color:"#000000"});
		}
		titleState = !titleState;
	});

	$('p').not("aside p").text(function () {
    	return $(this).text().replace("Bacon", "LASER VISION"); 
	});

	$("h5:odd").hide();

	$("aside p").hide();

	$(".post:last-of-type").remove();
	$(".post:last-of-type").remove();

	$("footer").hide();
	});

