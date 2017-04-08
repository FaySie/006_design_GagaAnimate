$(document).ready(function() {

    // 呼叫預先載入的函式
    preloader();
    loading_over = false;

    //loading完才載入gif圖檔，並於5.3秒後進入首頁
    $('.slogan_img').attr('src','img/slogan.gif').delay(5300).queue(function() {
        $('.slogan').fadeOut().dequeue();
    });

    // 載入後雲朵提示框飄移到畫面中
    setTimeout(function() {
        $('.hint').addClass('hint_animate').addClass('hint_animate2');
    }, 5800);

    /*--------------------------------------------------
    section1
    首頁動畫效果
    --------------------------------------------------*/
    
    setTimeout(function() {
        $('.circle_cube img').addClass('circle_normal');
    }, 1000);

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

    // 影片快捷鍵彈出/關閉效果
    $('body').keydown(function(event){
        if(event.which == 71){
            // 按下G，影片彈出效果
            $('.video_box').addClass('video_open');
            $('#video_gaga')[0].play(); //$('#video_gaga')會搜尋所有id形成一個陣列，必須指定陣列[0]才能控制
        } else if(event.which == 27){
            // 按下ESC關閉影片
            $('.video_box').removeClass('video_open');
            $('#video_gaga')[0].pause();
            $('#video_gaga')[0].currentTime = 0; //按下關閉時，影片回到0秒的地方
        }
    });

    // 點擊跳跳蟲，影片彈出效果
    $('.jump_btn').click(function() {
        $('.video_box').addClass('video_open');
        $('#video_gaga')[0].play(); //$('#video_gaga')會搜尋所有id形成一個陣列，必須指定陣列[0]才能控制
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
        $('.menubar').fadeOut();
        $('.jump_btn').fadeOut();
    });

    $('.section2_text_area_close').click(function() {
        $('#section2').fadeOut();
        $('.menubar').fadeIn();
        $('.jump_btn').fadeIn();
    });

    /*--------------------------------------------------
    section3
    關於深耕德瑪汶
    --------------------------------------------------*/

    $('.section3_readmore').click(function() {
        $('.section3_text_area').fadeIn();
        $('.menubar').fadeOut();
    });

    $('.section3_text_area_close').click(function() {
        $('.section3_text_area').fadeOut();
        $('.menubar').fadeIn();
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

        // 解決動畫還沒載入完成就有新動畫加入時，在其他頁面上殘留漂浮動畫的bug
        clearTimeout(circle_normal);

        // 點擊選單後的active效果
        $('.menubar li').removeClass('active');
        $(this).parent().addClass('active');
        $('.circle_hover').removeClass('active');

        // 星球
        $img = $('.circle_cube img');
        // 當前點擊的按鈕id
        id = $(this).data('id');

        // 當目的地section與點擊的地點id相同時，代表已經在所點的按鈕那一頁了，停止移動星球
        if (section == id) {
            return false;
        }

        // 所有section先隱藏
        $('.section-data').fadeOut();
        $('.jump_btn').fadeOut();
        $('.contact').fadeOut();
        $('.circle_tag').fadeOut();

        old_section = section;

        // 移除星球常態性漂浮動畫，經過0.1秒後，開始旋轉星球
        $img.removeClass('circle_normal').delay(100).queue(function() {
            $(this).addClass('sec' + id + '_1').removeClass('sec' + old_section + '_1').dequeue();
        });
        
        // 隱藏星球上的按鈕
        $('.home_menu_hover').addClass('display_none');

        // 移除星球自適應大小的class
        $img.removeClass('img-responsive');

        // 經過2.5秒後，該頁物件才fadeIn進來
        setTimeout(function() {
            $('#section' + id).fadeIn();
            // 當id>2時，載入section編號相同的按鈕標籤
            if (id > 2) {
                $('.circle_tag_sec' + id).fadeIn();
            }
        }, 2500);

        // 指定當前section為id
        section = id;

        // 當點擊的section是第一頁時，顯示星球按鈕，並於3秒後回復星球常態性漂浮動畫
        if (id == 1) {
            $('.home_menu_hover').removeClass('display_none');
            $('.jump_btn').fadeIn();
            $('.contact').fadeIn();
            $('.circle_tag').fadeOut();

            circle_normal = setTimeout(function() {
                $img.addClass('circle_normal');
                $('#section1').fadeIn();
            }, 3000);
        }
    });

    // 點擊星球上的按鈕，改變當前頁數的hover狀態
    $('.circle_outside').click(function() {
        var circle_btn_class = $(this).data('id');
        $('.section_btn' + circle_btn_class).parent().addClass('active');
    });

    /*--------------------------------------------------
    preload
    預先載入圖片
    --------------------------------------------------*/

    function preloader() {

        // 預載圖片清單
        imageToLoad = [
            "img/text_01.svg",
            "img/text_02.svg",
            "img/text_03.svg",
            "img/text_04.svg",
            "img/text_05.svg",
            "img/title_01.svg",
            "img/title_02.svg",
            "img/title_03.svg",
            "img/title_04.svg",
            "img/title_05.svg",
            "img/title_06.svg",
            "img/title_hover.svg",
            "img/title.svg",
            "img/circle.svg",
            "img/loading.svg",
            "img/logo.svg",
            "img/none2.gif",
            "img/g_key3.png",
            "img/bg.jpg",
            "img/bg2.jpg",
            "img/bird.png",
            "img/island1.png",
            "img/island2.png",
            "img/tana01.png",
            "img/tana02.png",
            "img/tana03.png",
            "img/tana04.png",
            "img/tana05.png",
            "img/tana06.png",
            "img/bank01.png",
            "img/bank02.png",
            "img/farming_btn01.png",
            "img/farming_btn02.png",
            "img/farming_btn03.png",
            "img/farming_btn04.png",
            "img/fruit_btn01.png",
            "img/fruit_btn02.png",
            "img/daanriver_btn01.png",
            "img/daanriver_btn02.png",
            "img/circle_daanriver.png",
            "img/circle_farming.png",
            "img/circle_fruit.png",
            "img/circle_spice.png",
            "img/circle_spice_btn01.png",
            "img/circle_spice_btn02.png",
            "img/circle_spice_btn03.png",
            "img/circle.png",
            "img/daanriver_map.png"
        ];

        var i, images, src, _i, _len, _results;

        imageLoaded = 0;
        images = [];
        _results = [];

        for ( i = _i = 0, _len = imageToLoad.length; _i < _len; i = ++_i) {
            src = imageToLoad[i];
            
            images[i] = new Image();
            images[i].src = location.href + src;
            images[i].style.display = 'hidden';

            _results.push(images[i].onload = countPercentage());
        }
    }

    function countPercentage() {
        var percentage;
        imageLoaded++;

        if (imageLoaded >= imageToLoad.length) {
            $('#loading_count').html("100 %");
            $('#loading_wapper').fadeOut();
        } else {
            percentage = parseInt(100 * imageLoaded / imageToLoad.length);
            $('#loading_count').html("" + percentage + " %");
        };
    }

    /*--------------------------------------------------
    section4
    泰雅特色香料
    --------------------------------------------------*/

    // 3顆香料樹的hover立體效果
    $('.spice_btn').hover(function() {
        spice_btn_class = $(this).data('sec4');
        $('.spice_btn_img_' + spice_btn_class).addClass('show');
    }, function() {
        spice_btn_class = $(this).data('sec4');
        $('.spice_btn_img_' + spice_btn_class).removeClass('show');
    });
    
    // 點擊香料樹開啟資訊圖表
    $('.spice_btn').click(function() {
        spice_btn_class = $(this).data('sec4');
        $('.sec4_info_' + spice_btn_class).fadeIn();
        $('.sec4_mask').fadeIn();
        $('.menubar').fadeOut();
        $('.spice_btn').fadeOut();
        $('.spice_btn_img').fadeOut();
    });

    // 點擊X關閉資訊圖表
    $('.sec4_close').click(function() {
        $('.sec4_info').fadeOut();
        $('.sec4_mask').fadeOut();
        $('.menubar').fadeIn();
        $('.spice_btn').fadeIn();
        $('.spice_btn_img').fadeIn();
    });

    /*--------------------------------------------------
    section5
    友善農法
    --------------------------------------------------*/
    
    // 3個物件的hover立體效果
    $('.sec5_btn').hover(function() {
        farming_btn_class = $(this).data('sec5');
        $('.farming_btn_img_' + farming_btn_class).addClass('show');
    }, function() {
        farming_btn_class = $(this).data('sec5');
        $('.farming_btn_img_' + farming_btn_class).removeClass('show');
    });

    // 點擊地圖觀看大圖
    $('.sec5_btn').click(function() {
        farming_btn_class = $(this).data('sec5');
        $('.sec5_btn_img_' + farming_btn_class).fadeIn();
        $('.sec5_mask').fadeIn();
        $('.menubar').fadeOut();
    });

    // 點擊X時關閉地圖
    $('.sec5_close').click(function() {
        $('.sec5_btn_img').fadeOut();
        $('.sec5_mask').fadeOut();
        $('.menubar').fadeIn();
    });

    /*--------------------------------------------------
    section6
    醜蔬果
    --------------------------------------------------*/
    // 3個物件的hover立體效果
    $('.sec6_btn').hover(function() {
        fruit_btn_class = $(this).data('sec6');
        $('.fruit_btn_img_' + fruit_btn_class).addClass('show');
    }, function() {
        fruit_btn_class = $(this).data('sec6');
        $('.fruit_btn_img_' + fruit_btn_class).removeClass('show');
    });

    // 點擊醜蔬果觀看資訊圖表
    $('.sec6_btn_1').click(function() {
        $('.sec6_btn_img').fadeIn();
        $('.sec6_mask').fadeIn();
        $('.menubar').fadeOut();
    });

    // 點擊X時關閉地圖
    $('.sec6_close').click(function() {
        $('.sec6_btn_img').fadeOut();
        $('.sec6_mask').fadeOut();
        $('.menubar').fadeIn();
    });

    /*--------------------------------------------------
    contact
    聯絡我們
    --------------------------------------------------*/

    $('.contact_btn_hover').hover(function() {
        $(this).children('img').addClass('contact_btn_img');
    }, function() {
        $(this).children('img').removeClass('contact_btn_img');
    });
});