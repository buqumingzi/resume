window.onload=function(){
	pic_open();
	
	
	
}

function pic_open(){
	var oTop_nav=document.getElementById('top_nav');
	var oH2=oTop_nav.getElementsByTagName('h2');
	var oDiv=oTop_nav.getElementsByTagName('div');
	var it=300;
	/*var boff=true;*/
	var boff=false;
	var timer=null;
	var i=0;
	

	
	oH2[0].onclick=function(){
		
		if(timer){
			return
		}
		if(boff){
			
			i=0;
			timer=setInterval(function(){
			
			oDiv[i].className="open";
			i++;
			if(i == oDiv.length){
				clearInterval(timer);
				timer=null;
				boff=false;
			}
		},it)					
		}else{
			i=oDiv.length-1
			timer=setInterval(function(){
			oDiv[i].className="close";
			i--;
			if(i<0){
				clearInterval(timer);
				timer=null;
				boff=true;
			}	
		},it)
	};
	}
}



