$(document).ready(function(){
	
	//	退换列表 标题鼠标移入
	var exchange = $("#exchange");	
	exchange.find(".name p").hover(function(){
		$(this).attr("color","#000000");
	},function(){
		$(this).attr("color","#323232");
	})
	
	
	
});

//退换列表 全选反选
function checkedAll(checkBox){
	if(checkBox.prop("checked")){
		$("tbody").find("input:checkbox").prop("checked",true);
		$(".hbBtn").addClass("hbAc");
		$(".hbBtn").removeAttr("disabled");
	}else{
		$("tbody").find("input:checkbox").removeProp("checked",false);
		$(".hbBtn").removeClass("hbAc");
		$(".hbBtn").attr("disabled","disabled");
	}
}

//退换列表 checkbox点击 按钮显示
function funhbAc(){
	var checkAll = $("#personal").find("tbody input[type=checkbox]");
	var num = 0;
	$.each(checkAll,function(index){
		if($(this).prop("checked")){
			num++;
		}
	});
	
	if(num>0){
		$(".hbBtn").addClass("hbAc");
		$(".hbBtn").removeAttr("disabled");
	}else{
		$(".hbBtn").removeClass("hbAc");
		$(".hbBtn").attr("disabled","disabled");
	}
	
};

//收货地址管理 添加收货地址
function funAdddr(){
	$(".addWr").css("display","block");
};
