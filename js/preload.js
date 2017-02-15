
//$("main").addClass("loading_scroll");


window.addEventListener('load',function(){
	var loading_wapper = document.getElementById("loading_wapper");
	loading_wapper.hidden=true;
},false);
// JQuery的載入事件原生型態


/*$(document).ready(function() {
	$("main").addClass("loading_scroll");

	alert("hello2");
	
	$(window).load(function(){
    	$(".loading_wapper").hide();
    	$("main").removeClass("loading_scroll");
    });*/
	
	//function preloader() {
		// $('.loading-role-roll').animate({
		// 	left: 0,
		// 	bottom: 0
		// }, 1500, function() {
		// 	$('.loading-role-rock').animate({
		// 		right: 0,
		// 		bottom: 0
		// 	}, 1500, function() {
		// 		$(this).queue(function() {
		// 			if (!loading_over) {
		// 				loading_over = true;
		// 			} else{
		// 				startView();
		// 			};
		// 			$(this).dequeue();
		// 		});
		// 	});
		// });

		imageToLoad = [
			"img/loading.svg",
			"img/logo.svg",
			"img/title_01.svg",
			"img/title_02.svg",
			"img/title_03.svg",
			"img/title_04.svg",
			"img/title_05.svg",
			"img/title_06.svg",
			"img/title.svg",
			"img/circle.svg",
			"img/down.svg",
			"img/title_hover.svg",
			"img/island1.png",
			"img/island2.png",
			"img/jump.png",
			"img/bird.png",
			"img/circle_daanriver.png",
			"img/circle_farming.png",
			"img/circle_fruit.png",
			"img/circle_spice.png",
			"img/circle.png"
		];
		
		var speed = 0;
		var timer = setInterval("changeCount()",20);
		// setInterval：每秒執行1/1000秒為單位，單位是毫秒，算成秒的時候要乘1000
		
		function preloadImg(pic) {
			var img = new Image();
			img.src = pic[i];
		// pic是傳入代碼
		}
		
		function changeCount(){
			loading_count.innerHTML = speed+"%";
		// innerHTML：在DIV裡面插入字
		}
		
		for(var i=0;i<imageToLoad.length;i++){
			speed=Math.round((i+1)/imageToLoad.length)*100;
			preloadImg(imageToLoad[i]);
		}
		
		  /*preloadImg('img/ajaxLoader.gif');
		  preloadImg('img/prev.gif');
		  preloadImg('img/next.gif');*/

		
		/*alert("hello");
		
		var i, imageLoaded, images, src, _i, _len, _results;
		imageLoaded = 0;
		images = [];
		_results = [];
		for ( i = _i = 0, _len = imageToLoad.length; _i < _len; i = ++_i) {
			
			var loading_count = document.getElementById('loading_count');
			//alert(i);
			loading_count.innerHTML += i;
			
			
			src = imageToLoad[i];
			images[i] = new Image();
			images[i].src = location.href + src;
			images[i].style.display = 'hidden';
			_results.push(images[i].onload = function() {
				var percentage;
				imageLoaded++;
				if (imageLoaded >= imageToLoad.length) {
					// $('.loading-role').finish().animate({
					// 	left : "70%"
					// }, 200);
					$(".loading_count").html("100 %");
					if (!loading_over) {
						loading_over = true;
					} else{
						startView();
					};
					// return $('.loading-wapper').delay(500).fadeOut(1000, function() {
						// $('#main-content').css('top', pages[page].top + ((Math.max($(window).height(), 800)-800) / 2));
						// $('#main-content').css('left', pages[page].left + ((Math.max($(window).width(), 1280)-1280) / 2));
						// open_animation();
					// });
				} else {
					percentage = parseInt(100 * imageLoaded / imageToLoad.length);
					$(".loading_count").html("" + percentage + " %");
					// return $('.loading-role').finish().animate({
					// 	left : "" + (percentage * 0.7) + "%"
					// }, 200);
				};
			});
		}*/
	//}
//});