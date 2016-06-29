/**
 * Created by I---J s on 2016/4/26.
 */
  //   事件绑定的函数-----------------------------------------------------------------------------1
function addEvent(obj, sEv, fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv, fn, false);
    }else{
        obj.attachEvent('on'+sEv, fn);
    }
}
//   s删去绑定的函数--------------------------------------------------------------------------------1对
function removeEvent(obj, sEv, fn){
    if(obj.removeEventListener){
        obj.removeEventListener(sEv, fn, false);
    }else{
        obj.detachEvent('on'+sEv, fn);
    }
}
//   自定义滚轮事件 的 函数------------------------------------------------------------------------------2
function addWheel(obj, fn){
    function wheel(ev){
        var oEvent=ev || event;
        var bDown=true;
        if(oEvent.wheelDelta){
            if(oEvent.wheelDelta>0){
                bDown=false;   //alert('上');
            }else{bDown=true; }
        }else{
            if(oEvent.detail<0){
                bDown=false;   //alert('上');
            }else{bDown=true; }
        }
        fn && fn(bDown);
        oEvent.preventDefault && oEvent.preventDefault();
        return false;
    }
    if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
        obj.addEventListener('DOMMouseScroll',wheel, false);
    }else{
        addEvent(obj,'mousewheel',wheel)
    }
}
        //  随机数------------------------------------------------------------------------------3
function rnd(n,m){return parseInt(Math.random()*(m-n))+n}
        //  找有定位的父级之间的距离-----------------------------------------------------------4
        function getPos(obj){
            var t=0;
            var l=0;
            while(obj){
                t+=obj.offsetTop;
                l+=obj.offsetLeft;
                obj=obj.offsetParent;
            }
            return {top:t,left:l}
        }
    //   比 window.onload   快的函数----------------------------------------------------------------------------5
        function domReady(fn){
            if(document.addEventListener){
                document.addEventListener('DOMContentLoaded', function(){
                    fn && fn();
                }, false);
            }else{
                document.onreadystatechange=function(){
                    if(document.readyState=='complete'){
                        fn && fn();
                    }
                };
            }
        }
    //   补零的函数---------------------------------6
        function toDouble(n){
            return n<10?'0'+n:''+n;
        }
        //  --获取非行间样式的函数---------------------------------------------------------7
        function getStyle(obj,name){
            return (obj.currentStyle||getComputedStyle(obj,false))[name]
        }
        // ----绝对值=--------------------------------------------------------------------8
        function getpos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t}
        }


        //  ---查找重复-----------------------------------------------------------9
        function findInArr(n,arr){
            for(var i=0; i<arr.length; i++){
                if(n==arr[i]){return true}
            }
            return false
        }
        //----通过  Class  获取元素（标签）------------------------------------------------10
        function getByClass(oParent, sClass){
            if(oParent.getElementsByClassName){
                return oParent.getElementsByClassName(sClass);
            }else{
                var aEle=oParent.getElementsByTagName('*');
                var arr=[];
                for(var i=0; i<aEle.length; i++){
                    var aClass=aEle[i].className.split(' ');
                    if(findInArr(sClass, aClass)){
                        arr.push(aEle[i]);
                    }
                }
                return arr;
            }
        }
        //  从小到大自动排序的函数-----------------------------------------------------------11
        function findMinIndex(arr, start){
            var iMin=arr[start];
            var iMinIndex=start;
            for(var i=start; i<arr.length; i++){
                if(arr[i]>iMin){
                    iMin=arr[i];
                    iMinIndex=i;
                }
            }
            return iMinIndex;
        }

//---碰撞检测的函数-----------------------------------------------------------------12
        function collTest(obj, obj2){
            var l1=obj.offsetLeft;
            var r1=obj.offsetWidth+l1;
            var t1=obj.offsetTop;
            var b1=obj.offsetHeight+t1;

            var l2=obj2.offsetLeft;
            var r2=obj2.offsetWidth+l2;
            var t2=obj2.offsetTop;
            var b2=obj2.offsetHeight+t2;

            if(r1<l2 || b1<t2 || l1>r2 || t1>b2){
                return false;
            }else{
                return true;
            }
        }
//      拖动  改变窗口大小的函数-------------------------------------------------------------13
        function drag(obj, obj2){
            obj.onmousedown=function(ev){
                var oEvent=ev || event;
                if(obj.className.indexOf('l')!=-1){
                    var downX=oEvent.clientX;
                    var oldW=obj2.offsetWidth;
                    var oldL=obj2.offsetLeft;
                }
                if(obj.className.indexOf('r')!=-1){
                    var downX=oEvent.clientX;
                    var oldW=obj2.offsetWidth;
                }
                if(obj.className.indexOf('t')!=-1){
                    var downY=oEvent.clientY;
                    var oldH=obj2.offsetHeight;
                    var oldT=obj2.offsetTop;
                }
                if(obj.className.indexOf('b')!=-1){
                    var downY=oEvent.clientY;
                    var oldH=obj2.offsetHeight;
                }
                document.onmousemove=function(ev){
                    var oEvent=ev || event;

                    if(obj.className.indexOf('l')!=-1){
                        var targetX=downX-oEvent.clientX;
                        var newW=oldW+targetX;
                        var newL=oldL-targetX;

                        obj2.style.width=newW+'px';
                        obj2.style.left=newL+'px';
                    }
                    if(obj.className.indexOf('r')!=-1){
                        var targetX=oEvent.clientX-downX;
                        var newW=oldW+targetX;

                        obj2.style.width=newW+'px';
                    }
                    if(obj.className.indexOf('b')!=-1){
                        var targetY=oEvent.clientY-downY;
                        var newH=oldH+targetY;

                        obj2.style.height=newH+'px';
                    }
                    if(obj.className.indexOf('t')!=-1){
                        var targetY=downY-oEvent.clientY;
                        var newH=oldH+targetY;
                        var newT=oldT-targetY;

                        obj2.style.top=newT+'px';
                        obj2.style.height=newH+'px';
                    }
                };
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;
                };
                return false;
            };
        }
    //   拖拽 重用 的函数-------------------------------------------------------14
        function drag(obj){
            obj.onmousedown=function(ev){
                var oEvent=ev || event;
                var disX=oEvent.clientX-obj.offsetLeft;
                var disY=oEvent.clientY-obj.offsetTop;
                document.onmousemove=function(ev){
                    var oEvent=ev || event;
                    obj.style.left=oEvent.clientX-disX+'px';
                    obj.style.top=oEvent.clientY-disY+'px';
                };
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;
                };
                return false;
            };
        }
        //    运动框架  函数  -------------------------------------------------------------15
function move(obj, json, option){
    var option=option || {};
    option.duration=option.duration || 700;
    option.easing=option.easing || 'ease-out';
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj, name));
        if(isNaN(start[name])){
            switch(name){
                case 'marginTop':
                    start[name]=obj.offsetTop;
                    break;
                case 'marginLeft':
                    start[name]=obj.offsetLeft;
                    break;
                case 'opacity':
                    start[name]=1;
                    break;
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
            }
        }
        dis[name]=json[name]-start[name];
    }
    var count=Math.round(option.duration/30);
    var n=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;

        for(var name in json){
            switch(option.easing){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name]=cur+'px';
            }
        }
        if(n==count){
            clearInterval(obj.timer);
            option.complete && option.complete();
        }
    }, 30);
}
// 两个物体之间的距离--------------------------------------------------------------16
function getDis(obj, obj2){
    var l1=obj.offsetLeft+obj.offsetWidth/2;
    var t1=obj.offsetTop+obj.offsetHeight/2;
    var l2=obj2.offsetLeft+obj2.offsetWidth/2;
    var t2=obj2.offsetTop+obj2.offsetHeight/2;
    var a=l1-l2;
    var b=t1-t2;
    return Math.sqrt(a*a+b*b);
}
// 离的最近的物体---------------------------------------------------------------17
function findNearest(obj,obj2){
    var iMin=9999999;
    var iMinIndex=-1;
    for(var i=0; i<obj2.length; i++){
        if(obj==obj2[i])continue;
        if(collTest(obj, obj2[i])){
            // dis=obj和aLi[i]的距离
            var dis=getDis(obj, obj2[i]);
            if(dis<iMin){
                iMin=dis;
                iMinIndex=i;
            }
        }
    }
    if(iMinIndex==-1){
        return null;
    }else{
        return obj2[iMinIndex];
    }
}
//-------------------------------------------缓存---存--------------------------------------------------18
function addCookie(name,value,iDay){
    if(iDay){
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+value+'; path=/; expires='+oDate.toUTCString();
    }else{
        document.cookie=name+'='+value+'; path=/';
    }
}
//--------------------------------------------缓存----获取-------------------------------------------19
function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0; i<arr.length; i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name){
            return arr2[1]
        }
    }
    return '';
}
//----------------------------------------缓存----删除---------------------------------------------------20
function removeCookie(name){
    addCookie(name,'123',-1)
}
//-----------------------------------判断划入方向----方向-------------------------21
function hoverDir(obj,ev){
    var scrollT=document.documentElement.scrollTop || document.body.scrollTop
    var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
    var y=obj.offsetTop+obj.offsetHeight/2-ev.clientY-scrollT;

    return   Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
    //-------------------------围绕 园体运动----------------------------------------------------22
    function move(obj, iTarget){
        obj.a=obj.a || 0;
        var start=obj.a;
        var dis=iTarget-start;

        var count=Math.floor(1000/30);
        var n=0;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            n++;

            var a=n/count;
            var cur=start+dis*a;
            obj.a=cur;
            obj.style.left=R+Math.sin(cur*Math.PI/180)*R+'px';
            obj.style.top=R-Math.cos(cur*Math.PI/180)*R+'px';

            if(n==count){
                clearInterval(obj.timer);
            }
        }, 30);
    }
}
//--------------物体转定位 的函数   -----效果----分页展示--------------------------------23
function getPosition(obj){
    var arr=[];
    for(var i=0; i<obj.length; i++){
        arr[i]={
            left:obj[i].offsetLeft,
            top:obj[i].offsetTop
        }
    }
    for(var i=0; i<obj.length; i++){
        obj[i].style.position='absolute';
        obj[i].style.left=arr[i].left+'px';
        obj[i].style.top=arr[i].top+'px';
        obj[i].style.margin=0;
    }
    return {name:obj,kie:arr}
}
//--------一组对象分页展示效果  函数-------------------------------------------------------------24
function shift_X(btn,obj,time,json){
    var oTime=time||50;
    var width=json.width
    var height=json.height
    var json=getPosition(obj);
    var A_obj=json.name;
    var arr=json.kie;
    btn.onclick=function(ev){
        var oEvent=ev||event;
        var disx=oEvent.clientX;
        var disY=oEvent.clientY;
        var n=A_obj.length-1;
        var timer;
        timer=setInterval(function(){

            (function(index) {
                move(A_obj[n], {left: disx, top: disY, width: 0, height: 0, opacity: 0}, {
                    complete: function () {
                        if(index==0){
                            n=0;
                            timer=setInterval(function(){
                                move(A_obj[n],{left:arr[n].left,top:arr[n].top,width:arr[n].width,height:arr[n].height,opacity:1});
                                n++;
                                if(n==A_obj.length){
                                    clearInterval(timer);
                                }
                            },oTime);
                        }
                    }
                });

            })(n);
            n--;
            if (n <= -1) {
                clearInterval(timer);
            }
        },oTime);
    }
}
//---------------------------ajax-----------------------------------------
function json2url(json){
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&')
}
function ajax(json){
    var json=json ||{};
    if(!json.url)return;
    json.time=json.time||3000;
    json.type=json.type||'get';
    json.date=json.date||{};
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        oAjax=new ActiveXObject('Microsoft.XMLHTTP')
    }
    switch(json.type.toLowerCase()){
        case 'get':
            oAjax.open('GET',json.url+'?'+json2url(json.date));
            oAjax.send();
            break;
        case 'post':
            oAjax.open('POST',json.url, true);
            oAjax.setRequestHeader('Content-Type','application/x-www.form-urlencoded');
            oAjax.send(json2url(json.date));
            break;

    }
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if((oAjax.status>=200&&oAjax.status<300)||oAjax.status==304){
                json.success && json.success(oAjax.responseText)
            }
        }else{
            json.error && json.error(oAjax.status);
            clearTimeout(timer)
        }
    };
    var timer=setTimeout(function(){
        alert('你网速太慢了');
        oAjax.onreadystatechange=null;
    },json.time)

}
//----------------jsonp---------------------------------------------------------------
function jsonp(json){
    var json=json || {};
    if(!json.url)return;
    json.data=json.data || {};
    json.cbName=json.cbName || 'cb';

    var fnName='show'+Math.random();
    fnName=fnName.replace('.', '');
    window[fnName]=function(data){
        json.success && json.success(data);
        oHead.removeChild(oS);
    };

    json.data[json.cbName]=fnName;
    var arr=[];
    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
    }
    var str=arr.join('&');
    var oS=document.createElement('script');
    oS.src=json.url+'?'+str;
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
}
//nav 高级运动/弹性运动==导航在横排
;(function(window){
    var left=0;
    var iSpeed=0;   // 速度
    var timer;
    window.tMove=function(obj, iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-obj.offsetLeft)/5;
            iSpeed*=0.75;
            left+=iSpeed;
            obj.style.left=Math.floor(left)+'px';

            if(Math.floor(left)==iTarget && Math.floor(iSpeed)==0){
                clearInterval(timer);
            }
        }, 30);
    }
})(window);
//nav 在竖排
;(function(window){
    var top=0;
    var iSpeed=0;   // 速度
    var timer;
    window.tRMove=function(obj, iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-obj.offsetTop)/5;
            iSpeed*=0.75;
            top+=iSpeed;
            obj.style.top=Math.floor(top)+'px';

            if(Math.floor(top)==iTarget && Math.floor(iSpeed)==0){
                clearInterval(timer);
            }
        }, 30);
    }
})(window);