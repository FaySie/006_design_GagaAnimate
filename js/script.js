$(document).ready(function() {

    /*--------------------------------------------------
    section1
    首頁動畫效果
    --------------------------------------------------*/
    
    setTimeout(function() {
    	$('.circle_cube img').addClass('circle_normal');
    }, 1000);


 	// 選單列hover效果
    $('.hover_area').hover(function() {
    	$(this).addClass('bg_hover');
    	$(this).children('.btn_menu').addClass('btn_menu_hover');
    }, function() {
    	$(this).removeClass('bg_hover');
    	$(this).children('.btn_menu').removeClass('btn_menu_hover');
    });

    // 星球hover圓形效果
    $('.circle_hover a').hover(function() {
    	$(this).children('.circle_btn').addClass('open');
   	}, function() {
    	$(this).children('.circle_btn').removeClass('open');
    });

    // 星球上的hover立體效果
    $('.circle_outside').hover(function() {
    	btn_class = $(this).data('shandow');
    	$('.circle_shandow_' + btn_class).addClass('show');
    }, function() {
    	btn_class = $(this).data('shandow');
    	$('.circle_shandow_' + btn_class).removeClass('show');
    });

    // 按下G，影片彈出效果
    $('body').keydown(function(event){
        if(event.which == 71){
        	$('.video_box').addClass('video_open');
        	$('#video_gaga')[0].play(); //$('#video_gaga')會搜尋所有id形成一個陣列，必須指定陣列[0]才能控制
        }
    });

    // 按下右上角的關閉，影片掰掰
    $('.video_close').click(function() {
    	$('.video_box').removeClass('video_open');
    	$('#video_gaga')[0].pause();
    	$('#video_gaga')[0].currentTime = 0; //按下關閉時，影片回到0秒的地方
    });

    /*--------------------------------------------------
    section2
    關於嘎嘎好農
    --------------------------------------------------*/

    $('.section2_btn').click(function() {
    	$('#section2').fadeIn();
    });

    $('.section2_text_area_close').click(function() {
    	$('#section2').fadeOut();
    });

    $('.section2_mask').click(function() {
    	$('#section2').fadeOut();
    });

    /*--------------------------------------------------
    section3~6
    關於深耕德瑪汶、泰雅特色香料、友善農法、醜蔬果宣導的旋轉動畫
    --------------------------------------------------*/

    // section = 原本的頁數
    // old_section = 原本的位置
    // id = 當前點擊的按鈕id
    var section = 0;

    var circle_normal;

    $('.section_btn').stop().click(function() {

    	clearTimeout(circle_normal);

    	// 點擊選單後的active效果
    	$('.menubar li').removeClass('active');
    	$(this).children().addClass('active');
    	$('.circle_hover').removeClass('active');

    	// 星球
    	$img = $('.circle_cube img');
    	// 當前點擊的按鈕id
    	id = $(this).data('id');

    	// 當目的地section與點擊的地點id相同時，代表已經在所點的按鈕那一頁了，停止移動圓球
    	if (section == id) {
    		return false;
    	}

    	// 所有section先隱藏
    	$('.section-data').fadeOut();

    	old_section = section;

    	// 移除星球常態性漂浮動畫
    	$img.removeClass('circle_normal').delay(100).queue(function() {
    		$(this).addClass('sec' + id + '_1').removeClass('sec' + old_section + '_1').dequeue();
    	});

    	/*
    	// 當點擊的section>2時，進行星球旋轉的動畫
    	if (section > 2) {

    		old_section = section;

    		

   //  		old_section = section;

   //  		$img.addClass('sec' + old_section + '_1_out').removeClass('sec' + old_section + '_1');

   //  		// 經過2.1秒後再將地球轉到目的頁
	  //   	setTimeout(function() {
	  //   		$img.addClass('sec' + id + '_1').removeClass('sec' + old_section + '_1_out');
	  //   	}, 2100);

			// console.log("id:"+id);
   //  		console.log("old_section:"+old_section);
   //  		console.log("section:"+section);

	    	if (id >= 3) {
	    		old_section = section;

	    		console.log("id:"+id);
	    		console.log("old_section:"+old_section);
	    		console.log("section:"+section);

	    		$img.addClass('sec3to6');

	    		$img.addClass('sec' + id + '_2');
	    	}
	    	else {
	    		old_section = section;

	    		console.log("id:"+id);
	    		console.log("old_section:"+old_section);
	    		console.log("section:"+section);

	    		$img.addClass('sec' + old_section + '_1_out').removeClass('sec' + old_section + '_1');

	    		// 經過2.1秒後再將地球轉到目的頁
		    	setTimeout(function() {
		    		$img.addClass('sec' + id + '_1').removeClass('sec' + old_section + '_1_out');
		    	}, 2100);
	    	}
    	}
    	else {
    		$img.addClass('sec' + id + '_1');
    	}
    	*/
    	
    	// 隱藏星球上的按鈕
    	$('.home_menu_hover').addClass('display_none');

    	// 移除星球自適應大小的class
    	$img.removeClass('img-responsive');

    	// 經過2.5秒後，該頁物件才fadeIn進來
    	setTimeout(function() {
    		$('#section' + id).fadeIn();
	    }, 2500);

    	// 指定當前section為id
    	section = id;

    	// 當點擊的section是第一頁時，顯示星球按鈕，並於3秒後回復星球常態性漂浮動畫
    	if (id == 1) {
    		$('.home_menu_hover').removeClass('display_none');

    		circle_normal = setTimeout(function() {
	    		$img.addClass('circle_normal');
	    		$('#section1').fadeIn();
    		}, 3000);
		}
    });

    // 點擊星球上的按鈕，改變當前頁數的hover狀態
    $('.circle_outside').click(function() {
    	var circle_btn_class = $(this).data('id');
    	$('.section_btn' + circle_btn_class).children().addClass('active');
    });
});