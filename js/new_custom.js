$(function(){
    var win_w = $(window).width();

    $(window).on('resize',function(){
        win_w = $(this).width();
    });

    // header gnb menu
    $('#gnb>li').on('mouseenter',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).show();
        } else {
            $('#gnb>li').off('click');
            $('#gnb>li').on('click',function(){
                $('.submenu').stop().slideUp();
                $(this).children('.submenu').stop().slideToggle();
            });
        }
    });

    $('#gnb>li').on('mouseleave',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).hide();
        }
    });

    $('#header .toggle').on('click',function(){
        $('.nav_wrap , .toggle, .cancle ').addClass('on');
    });
    $('#header .cancle').on('click',function(){
        $('.nav_wrap , .toggle, .cancle ').removeClass('on');
    });




    //work_swiper
    var swiper = new Swiper('#work .swiper-container', {
        direction: 'vertical',

        mousewheel: {
            forceToAxis: true,
        },
     
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });

    $('#gnb>.home').on('click',function(){
        swiper.slideTo(0, 0.5);
    });
    $('#gnb>.work').on('click',function(){
        swiper.slideTo(1, 0.5);
    });
    $('#gnb>.contact').on('click',function(){
        swiper.slideTo(6, 0.5);
    });


    //work_event
    $('#work .project .site .btn_wrap').on('mouseenter',function(){
        $(this).addClass('on');
    });
    $('#work .project .site .btn_wrap').on('mouseleave',function(){
        $(this).removeClass('on');
    });

});