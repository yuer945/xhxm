$(document).ready(function(){
	var loText = $(".loText");
	
	loText.on({"click":function(){
		$(this).siblings("span").css("display","none");
	},"mouseout":function(){
		if($(this).val()==""||$(this).val()==null){
			$(this).siblings("span").css("display","block");
		}
	},"keyup":function(){
		$(this).siblings("span").css("display","none");
	}});
	
	$(".field").find("span").on("click",function(){
		$(this).css("display","none");
		$(this).siblings(".loText").focus();
	});

});
