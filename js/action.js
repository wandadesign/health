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
        $('body,html').animate({scrollTop:$('#knowhow').offset().top-100}, 600);
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


 //   $('#bt-more').click(function(){
 //       $('body,html').animate({scrollTop:$('#more').offset().top-50}, 800);
 //   });
//    $('#bt-consult, #bt-more1, #bt-more2, #bt-more3').click(function(){
  //      $('body,html').animate({scrollTop:$('#consult').offset().top-50}, 800);
   // });
});
$(document).on("click","#bt-scroll",function(e){
    $('body,html').animate({scrollTop:$('#school').offset().top-50}, 800);
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



//曝光事件(非互動事件語法)
let progEvent = [ 
    {name: '#kvc', label: 'section-subject-kv', send: 0},
    {name: '#symptom', label: 'section-subject-symptom', send: 0},
    {name: '#choose', label: 'section-subject-quiz', send: 0},
    {name: '#more', label: 'section-subject-morearticle', send: 0},
    {name: '#consult', label: 'section-subject-reserve', send: 0}
    ];
    
    
    function checkAreaViewEvent() {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let viewArea = scrollTop + windowHeight;
    
        for (let i in progEvent){
            if (progEvent[i].send !== 0) {
                continue;
            }
    
            let element = $(progEvent[i].name);
            if (element.length == 0) {
                progEvent[i].send = 1;
                continue;
            }
            let areaTop = element.offset().top;
            let areaHeight = element.height();
            let area = areaTop + areaHeight;
    
            if (viewArea >= areaTop && scrollTop <= area) {
                progEvent[i].send = 1;
                dataLayer.push({
                    'event': 'sendMyEvent',
                    'eventCategory': 'web_event',
                    'eventAction': '2022Bausch',
                    'eventLabel': progEvent[i].label,
                });
    
            }
    
        }
    
    }
    
    function debounce(func, delay) {
        let timer = null;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }
    
    $(document).on(
        "scroll",
        debounce(() => {
            checkAreaViewEvent();
        },30)
    );