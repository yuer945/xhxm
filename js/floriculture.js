$(document).ready(function(){
	
//	导航栏点击和移入
	var r1 = $(".r-1");
	var r1Li = r1.find("li");
	r1Li.on("click mouseover",function(){
		r1Li.removeClass("liAction");
		$(this).addClass("liAction");
	});
	
	
	var r2 = $(".r-2");
	var r2Lia = r2.find("a");
	r2Lia.on("click mouseover",function(){
		r2Lia.removeClass("aAction");
		$(this).addClass("aAction");
	});
	
//	花卉大全  点击 移入
	var flowers = $("#flowers");
	var flowersR2 = flowers.find(".r-2");
	var flowersR2Li = flowersR2.find("li");
	flowersR2Li.on("click mouseover",function(){
		flowersR2Li.find("a").removeClass("aAct");
		$(this).find("a").addClass("aAct");
	});
});
