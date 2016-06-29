// JavaScript Document
domReady(function(){
	var oBox=document.getElementById('box');
	var oUl=document.getElementById('ul1');
	var aLi=oUl.children;
	var aSpan=oUl.getElementsByTagName('span');
	for(var i=0; i<aLi.length; i++){
		;(function(index){
			addEvent(aLi[index],'mouseenter',function(ev){
				var oEvent=ev || event;
				var n=hoverDir(this,oEvent);
				console.log(n)
				switch(n){
					case 0:
						aSpan[index].style.left='200px';
						aSpan[index].style.top=0;
					break;
					case 1:
						aSpan[index].style.left=0;
						aSpan[index].style.top='200px';
					break;
					case 2:
						aSpan[index].style.left='-200px';
						aSpan[index].style.top=0;
					break;
					case 3:
						aSpan[index].style.left=0;
						aSpan[index].style.top='-200px';
					break;
				}
				move(aSpan[index],{left:0,top:0});
			})
			addEvent(aLi[index],'mouseleave',function(ev){
				var oEvent=ev || event;
				var n=hoverDir(this,oEvent);
				switch(n){
					case 0:
					      move(aSpan[index], {left: 200, top: 0});
					 break;
					  case 1:
					      move(aSpan[index], {left: 0, top: 200});
					 break;
					  case 2:
					      move(aSpan[index], {left: -200, top: 0});
					 break;
					  case 3:
					      move(aSpan[index], {left: 0, top: -200});
					 break;
				}	      
			})
		})(i)
	}
})
