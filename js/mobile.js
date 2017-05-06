$(document).ready(function() {
    $(".menu_toggle").click(function() {
    	if($(this).hasClass("clicked")) {             
    		$(".menu_area").removeClass("menu_animate");             
    		$(this).removeClass("clicked");         
    	} else {             
    		$(".menu_area").addClass("menu_animate");            
    		$(this).addClass("clicked");         
    	}
	});
});