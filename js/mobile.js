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

	$(".sec4_info_title").click(function() {
		sec4_class = $(this).data('sec4');
		$(".sec4_" + sec4_class).slideToggle("slow");
	});
});