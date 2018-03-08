$(function(){
	//	头部 下划线
	var mainNav = $("#mainNav");
	mainNav.wrap('<div class="mainN" style="border-bottom:1px solid #5f5f5f;"></div>');
	
	var thisBox = $('#scrollBanner');
	if(thisBox.offset().top){
		var defaultTop = thisBox.offset().top;
		var slide_min = $('#scrollBanner .slide_min');
		var slide_box = $('#scrollBanner .slide_box');
		
		if(document.body.clientWidth>=1400){
			slide_min.hide();
		 	slide_box.show();
		 	thisBox.css("right","40px");
		}else{
			slide_box.hide();
		 	slide_min.show();
		}
		
		slide_min.on('click',function(){
		 	$(this).hide();
		 	slide_box.show();
		});
	
		$(window).on('scroll',function(){scro();});
		$(window).onload = scro();
		function scro(){
			var offsetTop = defaultTop + $(window).scrollTop() -600 +'px';
			if(parseInt(offsetTop)<800){
				offsetTop = 800+"px"
			}
			thisBox.animate({top:offsetTop},
			{	duration: 600,	
		     	queue: false    
		     });
		}
	}
	
	
	
});