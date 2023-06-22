//reload
var windowWidth = $(window).width();
    $(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});


//手機板選單收合
var ww = $(window).width();
$(document).ready(function() {
    $(".toggle-nav").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("");
        $(".navigation ul").toggle();
    });
    adjustMenu();
})
$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function() {
    if (ww < 1024) {
    $(".navigation ul li").unbind('mouseenter mouseleave');
    $(".navigation ul li a, .logo a").click(function(){
            $(".navigation ul").hide();
    }); 
    }
}    

//選單下滑動態
$(function(){
   
 
  
   $('#bt-kv, #bts-kv').click(function(){
       $('body,html').animate({scrollTop:$('#kv').offset().top}, 600);
    });
 
    $('#nav-section1').click(function(){
        $('body,html').animate({scrollTop:$('#chaos').offset().top-100}, 600);
    });
    $('#nav-section2').click(function(){
        $('body,html').animate({scrollTop:$('#revolution').offset().top-100}, 600);
    });
    $('#nav-section3').click(function(){
        $('body,html').animate({scrollTop:$('#data').offset().top-50}, 600);
    });

    $('#nav-section4').click(function(){
        $('body,html').animate({scrollTop:$('#article').offset().top-50}, 600);
    });
    $('#nav-section5').click(function(){
        $('body,html').animate({scrollTop:$('#more').offset().top-50}, 600);
    });



});



// fix
$(window).scroll(function() {
if ($(this).scrollTop()>0)
    {
        $('.header').addClass('bgcolor');
    }
else
    {
        $('.header ').removeClass('bgcolor');
    }
});

