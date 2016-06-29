// JavaScript Document

window.onload=function(){
	//搜索框效果
	var oInput=document.getElementById('kw')
	var oDivsea=document.getElementById('sea-tex-list-wrap');
	var oUlsea=oDivsea.getElementsByTagName('ul');
	var aLisea=oDivsea.getElementsByTagName('li');
	var aSpansea=oDivsea.getElementsByTagName('span');
	oInput.onclick=function(){
		if(oDivsea.style.display=='block'){
			oDivsea.style.display='none';
		}else{
			oDivsea.style.display='block';
		}
	}

	for(var i=0; i<aLisea.length; i++){
		aLisea[i].onmouseover=function(){
			for(var i=0; i<aLisea.length; i++){
				aLisea[i].className='sea-tex-item';
			}
			this.className='sea-tex-item sea-tex-itemon';
		}
	}

	for(var i=0; i<aLisea.length; i++){
		aLisea[i].index=i;
		aLisea[i].onclick=function(){
			for(var i=0; i<aLisea.length; i++){
				oInput.value=aSpansea[this.index].innerHTML;
				oDivsea.style.display='none';
			}
		}
	}

	//banner轮播效果
	var oBox=document.getElementById('banner-box');
	var aDiv=oBox.getElementsByTagName('div');
	var oLeft=document.getElementById('leftbtn');
	var oRight=document.getElementById('rightbtn');
	var n=0;
	var timer1=null;
	//左边
	oLeft.onclick=function(){
		n--;
		if(n<0)n=aDiv.length-1;
		for(var i=0; i<aDiv.length; i++){
			aDiv[i].className='banner-group1';
		}
		aDiv[n].className='banner-group1 show';
	}
	//右边+定时器
	oRight.onclick=next;
	timer1=setInterval(next,5000);
	function next(){
		n++;
		if(n>aDiv.length-1)n=0;
		for(var i=0; i<aDiv.length; i++){
			aDiv[i].className='banner-group1';
		}
		aDiv[n].className='banner-group1 show';
	}
	oBox.onmouseover=function(){
		clearInterval(timer1);
	}
	oBox.onmouseout=function(){
		/*clearInterval(timer1);*/
		timer1=setInterval(next,5000);
	}
	//热点聚焦和最新电视剧右侧选项卡和延迟封装效果
	function tag(Idname,id,a,b,c,d){
		var oBox=document.getElementById(Idname);
		var oDiv=document.getElementById(id);
		var aBtn=oDiv.getElementsByTagName('a');
		var aCon=oBox.getElementsByTagName('dl');
		var timer;
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				var _this=this;
				timer=setTimeout(function(){
					for(var i=0; i<aBtn.length; i++){
						aBtn[i].className=a;
						aCon[i].className=b;
					}
					_this.className=c;
					aCon[_this.index].className=d;
				},200);	
			};
			aBtn[i].onmouseout=function(){
				clearTimeout(timer);
			}
		}
	}
	tag('r_conbox','btn_box','btn-tilte','right-list','btn-tilte active','right-list show')
	tag('r_conbox1','btn_box1','btn-tilte add-dsj-title','right-list','btn-tilte add-dsj-title active','right-list show')
	tag('r_conbox2','btn_box2','btn-tilte add-dsj-title','right-list','btn-tilte add-dsj-title active','right-list show')
	tag('r_conbox3','btn_box3','btn-tilte add-dsj-title','right-list','btn-tilte add-dsj-title active','right-list show')
	//热点和电视剧分写
	//热点聚焦选项+延迟效果
	/*var oBox=document.getElementById('r_conbox');
	var oDiv=document.getElementById('btn_box');
	var aBtn=oDiv.getElementsByTagName('a');
	var aCon=oBox.getElementsByTagName('dl');
	var timer;
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			var _this=this;
			timer=setTimeout(function(){
				for(var i=0; i<aBtn.length; i++){
					aBtn[i].className='btn-tilte';
					aCon[i].className='right-list';
				}
				_this.className='btn-tilte active';
				aCon[_this.index].className='right-list show';
			},200);	
		};
		aBtn[i].onmouseout=function(){
			clearTimeout(timer);
		}
	}*/
	//最新电视剧+延迟效果
	/*var oBox1=document.getElementById('r_conbox1')
	var oDiv1=document.getElementById('btn_box1');
	var aBtn1=oDiv1.getElementsByTagName('a');
	var aCon1=oBox1.getElementsByTagName('dl');
	var timer;
	for(var i=0; i<aBtn1.length; i++){
		aBtn1[i].index=i;
		aBtn1[i].onmouseover=function(){
			var _this=this;
			timer=setTimeout(function(){
				for(var i=0; i<aBtn1.length; i++){
					aBtn1[i].className='btn-tilte add-dsj-title';
					aCon1[i].className='right-list';
				}
				_this.className='btn-tilte add-dsj-title active';
				aCon1[_this.index].className='right-list show';
			},200);
		};
		aBtn1[i].onmouseout=function(){
			clearTimeout(timer);
		}
	}*/

	//最新电视剧划上遮罩
	var oDivbox=document.getElementById('add-tvcontent');
	var aUl=oDivbox.getElementsByTagName('ul');
	var aLi=oDivbox.getElementsByTagName('li');
	var aDivtv=document.getElementsByClassName('tv-pic-opa');
	var aTvshow=document.getElementsByClassName('tv-con-show');
	var oTvleftbtn=document.getElementById('tv-leftbtn');
	var oTvrightbtn=document.getElementById('tv-rightbtn');
	var oTvpage=document.getElementById('tv-page');
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			aDivtv[this.index].style.display='block';
			aTvshow[this.index].style.display='block';
		}
		aLi[i].onmouseout=function(){
			aDivtv[this.index].style.display='none';
			aTvshow[this.index].style.display='none';
		}
	}
	//变量n重用，导致n的值不确定，用封闭空间或者换变量名
	 ;(function(n){
	 	var n=0;
                    oTvleftbtn.onclick=function(){
			n--;
			if(n<0)n=aUl.length-1;
			for(var i=0; i<aUl.length; i++){
				aUl[i].className='content-list clearfix';
			}
			aUl[n].className='content-list clearfix show'
			oTvpage.innerHTML=''+(n+1)+'/3';
			console.log(n)
		}
		oTvrightbtn.onclick=function(){
                		n++;
                		if(n>aUl.length-1)n=0;
                		for(var i=0; i<aUl.length; i++){
                			aUl[i].className='content-list clearfix';
                		}
                		aUl[n].className='content-list clearfix show';
                		oTvpage.innerHTML=''+(n+1)+'/3';
                		console.log(n)
                	}

                })(i);
                //左边和右边分开封闭会导致n重新记录。会有中间不变动。
               /* ;(function(n){
                	var n=0;
                	oTvrightbtn.onclick=function(){
                		n++;
                		if(n>aUl.length-1)n=0;
                		for(var i=0; i<aUl.length; i++){
                			aUl[i].className='content-list clearfix';
                		}
                		aUl[n].className='content-list clearfix show';
                		oTvpage.innerHTML=''+(n+1)+'/3';
                		console.log(n)
                	}
                })(i);*/
	
	//电视剧吐槽右侧选项卡
	var oUltk=document.getElementById('tvtalk_switch');
	var oLitk=oUltk.getElementsByTagName('li');
	var oDivtk=document.getElementById('tvtalk_switch_conbox');
	var oUltkcon=oDivtk.getElementsByTagName('ul');
	for(var i=0; i<oLitk.length; i++){
		oLitk[i].index=i;
		oLitk[i].onmouseover=function(){
			for(var i=0; i<oLitk.length; i++){
				oLitk[i].className='tvtalk-ibar';
				oUltkcon[i].className='tvtalk-switch-list';
			}
			this.className='tvtalk-ibar tv-active';
			oUltkcon[this.index].className='tvtalk-switch-list show';
		}
	}

	//电影遮罩
	var oDivboxdy=document.getElementById('dy_content');
	var aUldy=oDivboxdy.getElementsByTagName('ul');
	var aLidy=oDivboxdy.getElementsByTagName('li');
	var aDivdy=document.getElementsByClassName('add-dyopa');
	var aTvshowdy=document.getElementsByClassName('add-dyconshow');
	
	for(var i=0; i<aLidy.length; i++){
		aLidy[i].index=i;
		aLidy[i].onmouseover=function(){
			aDivdy[this.index].style.display='block';
			aTvshowdy[this.index].style.display='block';
		}
		aLidy[i].onmouseout=function(){
			aDivdy[this.index].style.display='none';
			aTvshowdy[this.index].style.display='none';
		}
	}
	//电影左右箭头
	var oDyleftbtn=document.getElementById('dy_leftbtn');
	var oDyrightbtn=document.getElementById('dy_rightbtn');
	var oDypage=document.getElementById('dy_page');
	 ;(function(n){
	 	var n=0;
                    oDyleftbtn.onclick=function(){
			n--;
			if(n<0)n=aUldy.length-1;
			for(var i=0; i<aUldy.length; i++){
				aUldy[i].className='content-list clearfix';
			}
			aUldy[n].className='content-list clearfix show'
			oDypage.innerHTML=''+(n+1)+'/4';
		}
		oDyrightbtn.onclick=function(){
                		n++;
                		if(n>aUldy.length-1)n=0;
                		for(var i=0; i<aUldy.length; i++){
                			aUldy[i].className='content-list clearfix';
                		}
                		aUldy[n].className='content-list clearfix show';
                		oDypage.innerHTML=''+(n+1)+'/4';
                	}
                })(i);

                //综艺左右箭头
          var oDivzy=document.getElementById('zy_contentbox');
          var aUlzy=oDivzy.getElementsByTagName('ul');
          var oZyleftbtn=document.getElementById('zy_leftbtn');
	var oZyrightbtn=document.getElementById('zy_rightbtn');
	var oZypage=document.getElementById('zy_page');
	 ;(function(n){
	 	var n=0
                    oZyleftbtn.onclick=function(){
			n--;
			if(n<0)n=aUlzy.length-1;
			for(var i=0; i<aUlzy.length; i++){
				aUlzy[i].className='content-list clearfix zy-contentlist';
			}
			aUlzy[n].className='content-list clearfix zy-contentlist show'
			oZypage.innerHTML=''+(n+1)+'/3';
		}
		oZyrightbtn.onclick=function(){
                		n++;
                		if(n>aUlzy.length-1)n=0;
                		for(var i=0; i<aUlzy.length; i++){
                			aUlzy[i].className='content-list clearfix zy-contentlist';
                		}
                		aUlzy[n].className='content-list clearfix zy-contentlist show';
                		oZypage.innerHTML=''+(n+1)+'/3';
                	}
                })(i);

                //动漫世界左右两边箭头
          var oDivdm=document.getElementById('dm_contentbox');
          var aUldm=oDivdm.getElementsByTagName('ul');
          var oDmleftbtn=document.getElementById('dm_leftbtn');
	var oDmrightbtn=document.getElementById('dm_rightbtn');
	var oDmpage=document.getElementById('dm_page');
	 ;(function(n){
	 	var n=0
                    oDmleftbtn.onclick=function(){
			n--;
			if(n<0)n=aUldm.length-1;
			for(var i=0; i<aUldm.length; i++){
				aUldm[i].className='content-list clearfix zy-contentlist';
			}
			aUldm[n].className='content-list clearfix zy-contentlist show';
			oDmpage.innerHTML=''+(n+1)+'/3';
		}
                	oDmrightbtn.onclick=function(){
                		n++;
                		if(n>aUldm.length-1)n=0;
                		for(var i=0; i<aUldm.length; i++){
                			aUldm[i].className='content-list clearfix zy-contentlist';
                		}
                		aUldm[n].className='content-list clearfix zy-contentlist show';
                		oDmpage.innerHTML=''+(n+1)+'/3';
                	}
                })(i);

                //每日更新选项卡
                var oBoxnews=document.getElementById('news_btnbox');
                var aBtnnews=oBoxnews.getElementsByTagName('dd');
                var oDivnews=document.getElementById('news_conlist')
                var aUlnews=oDivnews.getElementsByTagName('ul');
                for(var i=0; i<aBtnnews.length; i++){
                	aBtnnews[i].index=i;
                	aBtnnews[i].onmouseover=function(){
                		for(var i=0; i<aBtnnews.length; i++){
                			aBtnnews[i].className='';
                			aUlnews[i].className='hyjd-list clearfix add-tvtalk';
                		}
                		this.className='news-active';
                		aUlnews[this.index].className='hyjd-list clearfix add-tvtalk show';
                	}
                }
}
