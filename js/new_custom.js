$(function(){

    $('#gnb>li').on('mouseenter',function(){
        $(this).children('.submenu').stop(true,true).show();
    });

    $('#gnb>li').on('mouseleave',function(){
        $(this).children('.submenu').stop(true,true).hide();
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


    //work_event
    $('#work .project .site .btn_wrap').on('mouseenter',function(){
        $(this).addClass('on');
    });
    $('#work .project .site .btn_wrap').on('mouseleave',function(){
        $(this).removeClass('on');
    });

});