$(function(){
	var speel=600;
	var shangdi=false;
	
	
	var json0={"width":"360px","height":"130px","left":"-362px","top":"130px","z-index":"7"};
	var json1={"width":"426px","height":"243px","left":"0px","top":"100px","z-index":"8"};
	var json2={"width":"710px","height":"403px","left":"145px","top":"40px","z-index":"9"};
	var json3={"width":"426px","height":"243px","left":"573px","top":"100px","z-index":"8"}
	var json4={"width":"360px","height":"130px","left":"1000px","top":"130px","z-index":"5"}
	
	
	
	$("#right_btn").click(move);
	function move(){
		if($("#tu li").is(":animated")){
			return false;
		}
			$(".no1").animate(json0,speel);
			$(".no2").animate(json1,speel);
			$(".no3").animate(json2,speel);
			$(".no4").animate(json3,speel);
			$(".no0").css(json4)
			
			
			$(".no0").attr("class","no5");
			$(".no1").attr("class","no0");
			$(".no2").attr("class","no1");
			$(".no3").attr("class","no2");
			$(".no4").attr("class","no3");
			$(".no5").attr("class","no4");

	}	

	$("#left_btn").click(function(){
			
			if($("#tu li").is(":animated")){
			return false;
		}
			$(".no0").animate(json1,speel);
			$(".no1").animate(json2,speel);
			$(".no2").animate(json3,speel);
			$(".no3").animate(json4,speel);
			$(".no4").css(json0);
			
			
			
			$(".no4").attr("class","no5");
			$(".no3").attr("class","no4");
			$(".no2").attr("class","no3");
			$(".no1").attr("class","no2");
			$(".no0").attr("class","no1");
			$(".no5").attr("class","no0");
	})
	
	
	var timer=setInterval(function(){
		move();
	},4000);
	
	$("#tu").hover(function(){
		clearInterval(timer);
	},function(){
		move();
	})
	
	
	
	
})
