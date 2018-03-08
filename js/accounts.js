$(function(){
	$(".arWr b").on("click",function(){
		$(this).css("display","none");
		$(this).siblings(".area").focus();
	});
	
	$(".area").on({"click keyup":function(){
		$(this).siblings("b").css("display","none");
	},"mouseout":function(){
		if($(this).val()==""||$(this).val()==null){
			$(this).siblings("b").css("display","block");
		}
	}});
});
