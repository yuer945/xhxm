$(function(){
	$(".spC").on("click",function(){
		$(".acc").show(500);
	});
	
	$(".closeAcc").on("click",function(){
		$(".acc").hide(500);
	});
});

function funBigImg($_this){
	$_this.find(".imgW").css("display","none");
	$_this.addClass("liAction");
	$_this.siblings("li").removeClass("liAction");
	$(".de-1lt").find("img").attr("src",$_this.find("img").attr("src"));
};

function funBigImgRight($_this){
	$_this.addClass("liAction");
	$_this.siblings("li").removeClass("liAction");
	$(".de-1lt").find("img").attr("src",$_this.find("img").attr("src"));
};