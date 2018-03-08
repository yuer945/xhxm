$(function(){
	var imgUl = $(".imgUl");
	var pWraUl = $(".pWraUl");
	var mapUl = $(".mapUl");
	
	pWraUl.find("li:gt(0)").hide();
	mapUl.find("li:gt(0)").hide();
	
	var onOff = true;
	
//	鼠标移入移出
	$(".prev").hover(function(){
		$(this).siblings(".prevBg").addClass("aActc");
	},function(){
		$(this).siblings(".prevBg").removeClass("aActc");
	});
	
	$(".next").hover(function(){
		$(this).siblings(".nextBg").addClass("aActc");
	},function(){
		$(this).siblings(".nextBg").removeClass("aActc");
	});
	
//	点击切换下一张图片
	$(".next").on("click",function(){
		
		
		imgUl.find("li:first").next().stop(true,true).animate({
			"top":0,
			"left":"205px",
			"width":"720px",
			"height":"512px"
		},500);
		
		for(var i=2;i<imgUl.find("li").length;i++){
			var oldTop = parseInt(imgUl.find("li").eq(i).css("top"));
			var oldLeft = parseInt(imgUl.find("li").eq(i).css("left"));
			var newTop = oldTop-50;
			var newLeft = oldLeft+20;
			
			imgUl.find("li").eq(i).stop(true,true).animate({"top":newTop+"px","left":newLeft+"px"});
		}
		
		imgUl.find("li:first").fadeOut(100).stop(true,true).animate({"width":"289px","height":"180px","top":"300px","left":"45px"}).fadeIn();
		imgUl.find("li:first").appendTo(imgUl);
		$.each(imgUl.find("li"), function(index) {
			$(this).removeClass();
			$(this).addClass("li"+(index+1));
			$(this).show();
		});
		
//		文字和地图同步
		funNext(pWraUl);
		funNext(mapUl);
	});

	$(".prev").on("click",function(){
		
		imgUl.find("li:last").prependTo(imgUl).css({
			"top":"-50px",
			"left":"305px",
			"width":"289px",
			"height":"180px"
		});
		
		imgUl.find("li:first").next().stop(true,true).animate({
			"top":"150px",
			"left":"105px",
			"width":"289px",
			"height":"180px"
		});
		
		for(var i=2;i<imgUl.find("li").length;i++){
			var oldTop = parseInt(imgUl.find("li").eq(i).css("top"));
			var oldLeft = parseInt(imgUl.find("li").eq(i).css("left"));
			var newTop = oldTop+50;
			var newLeft = oldLeft-20;
			imgUl.find("li").eq(i).stop(true,true).animate({"top":newTop+"px","left":newLeft+"px"});
		}
		imgUl.find("li:first").stop(true,true).animate({
			"top":0,
			"left":"205px",
			"width":"720px",
			"height":"512px"
		});	
		
		$.each(imgUl.find("li"), function(index) {
			$(this).removeClass();
			$(this).addClass("li"+(index+1));
			$(this).show();
		});
		
//		文字和地图同步
		funPrev(pWraUl);
		funPrev(mapUl);

	});
	
});

//文字和地图切换下一张
function funNext(oUl){
	oUl.find("li").hide();
	oUl.find("li:first").appendTo(oUl);
	oUl.find("li:eq(0)").show();
}

//文字和地图切换上一张
function funPrev(oUl){
	oUl.find("li").hide();
	oUl.find("li:last").prependTo(oUl);
	oUl.find("li:eq(0)").show();
}
