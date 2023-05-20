
 $(window).load(function() {
 $(".loading").fadeOut();
	 
	 
	 
	//偵測主視覺高度
	 var mmheight= $('.middle_model').outerHeight(),
	     titleheight= $('.title').outerHeight(),
		 kvheight= mmheight + titleheight;
	$('.wrap_kv').height(kvheight);
	
    $( window ).resize(function() {
  	  var mmheight= $('.middle_model').outerHeight(),
	      titleheight= $('.title').outerHeight(),
		  kvheight= mmheight + titleheight;
	$('.wrap_kv').height(kvheight);
    });
	 
	 
	// kv animation

	var tl = new TimelineMax();
    tl.from(".blueparty",.2, { y:'-100vh',delay:'.3'})
	   .from(".redparty",.2, { y:'-100vh'},"-=0.2")
       .from(".goldparty",.2, { y:'100vh'},"-=0.2")
	  .from(".left_model",.3, { ease: Back.easeOut.config(1.7),scale:0})
	  .from(".right_model",.3, { ease: Back.easeOut.config(1.7),scale:0},"-=0.3")
	  .from(".goldman",.6, { ease: Back.easeOut.config(1.7),scale:0},"-=0.3")
      .from(".title",.6, { ease: Back.easeOut.config(1.7),opacity:0,x:-120},"-=0.3")
      .from(".btn_start",.6, { ease: Back.easeOut.config(1.7),opacity:0,x:120},"-=0.6"); 
	 

 });


$( document ).ready(function() {

	
	
	
	//偵測螢幕高度
function setDocHeight() {
document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

window.addEventListener('resize', setDocHeight)
window.addEventListener('orientationchange', setDocHeight)
setDocHeight();
	

	
	
	
	
	

//活動說明
	var $infoicon=$('.info_icon');
	var $foreword=$('#a0');
		$infoicon.click(function (){
			$(this).css({"display":"none"});
			$('#detail').css({"display":"flex"});	
		    $('#kv').css('opacity','0');
			$(this).aniframe();
		})

	  $('.btn_dec').click(function (){
			$infoicon.hide();  
			$('#detail').css({"display":"flex"});	
		
		})
	
	
		$('.close_icon').click(function (){
			$('#detail').hide();
			$('#kv').css('opacity','1');
			$infoicon.show();
			
		})

//開始活動
	
	//fn animate frame
	
$.fn.aniframe = function(){
         var tl = new TimelineMax();
		 tl.fromTo('.frame_left',.6,{"opacity":0,x:-200},{ease: Back.easeOut.config(1.7),"opacity":1,x:0})
		   .fromTo('.info',.6,{"opacity":0,bottom:'-100px'},{ease: Back.easeOut.config(1.7),"opacity":1,bottom:'0'},'-=.5') ;
};

	
	$('.btn_start').click(function (){
	    $('#kv').hide();
         $('#frame').css({"display":"flex"});
		$foreword.show()
		$(this).aniframe();
		})
	
		$('.btn.go').click(function (){
	    
        $('.info_icon').hide();
		})

	
	for (let i = 0; i <= 7; i++) { 
		
    let qbtn = '#q' + i + ' .btn_yesno a'
	let qlist=  "#q" + i 
	let answerlist=  "#a" + i 
	let abtn=  "#a" + i + ' .btn'
	let qlist_next=  "#q" + (i+1)
    let qbtn_next = '#q' + (i+1) + ' .btn_yesno a'
	let answerlist_next=  "#a" +  (i+1)
	let timera= qlist_next + ' .liner span'
	  // animatetime
	function anitime(){
           var tl = new TimelineMax();
		    tl.fromTo(timera,5.2,{left:'0',ease:'Linear'},{left:'-101%',ease:'Linear'})
		     .to(qlist_next, 0.1, {css:{className:'+=boxshadow'}},'-=3');
		    
           }; 
	 
	 function answershow(){
             $(answerlist).show();
		     $(qlist).hide();
           }; 	
		
   var qubtn= function(){
	//question_btn
    $(document).on("click", qbtn , function () {
		answershow();
		$(this).aniframe();
         $(this).addClass('active');
		 $(qlist_next).removeClass('boxshadow');
		clearTimeout(countTime);
     }) ;
	 };	
		
		qubtn();
		
		var countTime;
		  function myFunction() {
		  countTime=
		  setTimeout(function(){
		      $(answerlist_next).show();
	          $(qlist_next).hide();
			  $(this).aniframe();
                 },5000); 
		  }	
	
		  //answer_btn
      $(document).on("click", abtn , function () {
	  	 $(qlist_next).show(); 
		 $(answerlist).hide();
		 $(this).aniframe();
		  anitime();
		  myFunction();
	
     }) ; 
		
	
      
     }
	
	
	$('.gotoresult a').click(function (){
	   $('.result').show(); 
   });
	
	
	
	$('.gotoform').click(function (){
	    $('.result').hide(); 
        $('.formate').show(); 
		 $(this).aniframe();
		clearTimeout(countTime);
   });
	
	
	
	


	
//COUNT SCORE
 var answer=[1,2,5,6,8,10,12];
 var  numCorrect = 0;
 
$( ".btn_yesno a" ).click(function() {
	
   var index = $( ".btn_yesno a" ).index( this );
   for (var i = 0; i <7; i++) {
      if (index === answer[i]) {
		  
        numCorrect++;		
      }
	}
  $( ".score" ).text(numCorrect)
  console.log(numCorrect)	
});
	
	$( "#a7 .btn" ).click(function() {
	if(numCorrect<4){
		$( ".lose_text" ).show()
	
	}else{
    	$( ".win_text" ).show()		
		
	}
	});
	
	
//replay
$( ".replay" ).click(function() {
	 numCorrect = 0;
	$( ".win_text,.lose_text" ).hide();
	$( ".result" ).hide();
	$( "#a0" ).show();
	$( " .liner span" ).css('left','0');
	$( ".question" ).removeClass('boxshadow');
	
	clearTimeout(countTime);
});
	
	

	
	
	
});

