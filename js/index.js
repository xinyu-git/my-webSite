// JavaScript Document
domReady(function(){
	var oBody=document.getElementById('body-wrap');
	var  oSec=getByClass(oBody,'section');
	var oDown=document.getElementById('next');
	var oUp=document.getElementById('up');
	var oNavBox=document.getElementById('nav-box');
	var oNavBg=document.getElementById('nav_bg');
	var aLi=oNavBox.children;
	var oH=document.documentElement.clientHeight;
	var n=0;
	var bFlag=false;
	for(var i=0; i<oSec.length; i++){
		oSec[i].style.height=oH+'px';
	}
	function next(){
		move(oBody,{top:-oH*(n+1)},{complete:function(){
			n++;
			
			if(n>0){
				oUp.style.display='block';
			}
			if(n==5){
				oDown.style.display='none';
			}
			tab(n);
			bFlag=false;
		}})
	}

	function up(){
		move(oBody,{top:-oH*(n-1)},{complete:function(){
			n--;
			if(n==0){
				oDown.style.display='block';
				oUp.style.display='none';
			}
			if(n<5){
				oDown.style.display='block';
			}
			tab(n);
			bFlag=false;
		}})
	}
	addEvent(oDown,'click',function(){
		next();

	})
	addEvent(oUp,'click',function(){
		up();
	})

	addWheel(oBody,function(bDown){
		if(bFlag)return;
		
		if(bDown){
			//下
			if(n==5){
				return;
			}
			next();
			bFlag=true;
		}else{
			//上
			if(n==0){
				return;
			}
			up();
			bFlag=true;
		}
	})
	
	function tab(n){
		tRMove(oNavBg,aLi[n].offsetTop);
		move(oBody,{top:-oH*n})
	}

	;(function(){
		for(var i=0; i<aLi.length-1; i++){
			aLi[i].index=i;
			addEvent(aLi[i],'click',function(){
				tab(this.index);
				n=this.index;
			})
		}
	})()

	//work效果
	;(function(){
		var oWork=document.getElementById('work_nav');
		var aWli=oWork.children;
		var aWdiv=oWork.getElementsByTagName('div');
		var aWh=oWork.getElementsByTagName('h4');
		var aWp=oWork.getElementsByTagName('p');
		for(var i=0; i<aWli.length; i++){
			;(function(index){
				addEvent(aWli[i],'mouseover',function(){
					move(aWdiv[index],{width:190,height:190,marginLeft:-95,marginTop:-95,opacity:0.8},{complete:function(){
						move(aWh[index],{marginTop:30})
					}});
				})
				addEvent(aWli[i],'mouseout',function(){
					move(aWdiv[index],{width:0,height:0,marginLeft:0,marginTop:0,opacity:0},{complete:function(){
						move(aWh[index],{marginTop:0})
					}})
				})
			})(i)
		}
	})()

	//about
	;(function(){
		var oToolNav=document.getElementById('tool_nav');
		var aLi=oToolNav.children;
		var aP=oToolNav.getElementsByTagName('p');
		for(var i=0; i<aLi.length; i++){
			;(function(index){
				addEvent(aLi[i],'mouseover',function(){
					move(aP[index],{opacity:0.8})
				})
				addEvent(aLi[i],'mouseout',function(){
					move(aP[index],{opacity:0})
				})
			})(i)
		}
	})()
})
