$(function(){
	
	
	
	/*专业技能-web*/
	
	var oBtn=$('#skill_value').find('input');
	oBtn.each(function(i){
		oBtn.eq(i).click(function(){
		$('#cube').css('-webkit-transform','rotateX('+i*90+'deg)');
		$('#cube').find('em').hide();
		$('#cube').find('em').eq(i+1).show();
	})
})
	
	oBtn.eq(4).click(function(){
		$('#cube').css({'-webkit-transform':'rotateY(450deg) rotateX(0deg)'});
		$('#cube').find('em').hide();
		$('#cube').find('em').eq(6).show();
	})
	
	
	
	
	/*作品展示*/
	
	
	
	
	var op=$('#pic_show');
	
	var opr=$('#prev')
	var on=$('#next')
	var num=1;
	
	op.find('a').eq(0).attr('class','show').siblings('a').attr('class','hide');
	
	
	
	opr.click(function(){
		op.find('a').attr('class','hide');
		op.find('a').eq(num).attr('class','show');
		
			if(num <= 0){
				num=(op.find('a').length-1);
			}else{
				num--;
			}
		
	});
	on.click(function(){
		op.find('a').attr('class','hide');
		op.find('a').eq(num).attr('class','show');
		
			if(num >= (op.find('a').length-1)){
				num=0;
			}else{
				num++;
			}
		
	});
	

	
	var timer=null;
	
	function toto(){
		timer=setInterval(function(){
		on.trigger('click');
	},2500)
	}
	
	toto();
	
	op.hover(function(){
		clearInterval(timer);
	},function(){
		toto();
	})
	
	
	
	
	
})
