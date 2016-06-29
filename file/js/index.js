domReady(function(){
        var oBtn=document.getElementById('btn1');
        var oBtn2=document.getElementById('btn2');
        var oUl=document.getElementById('ul1');
        var aImg=oUl.getElementsByTagName('img');
        var aLi=oUl.children;
        var aA=oUl.getElementsByTagName('a');

         // 左
         aA[0].onclick=function(){
             aPos.push(aPos.shift());
             tab();
             return false;
         };
         // 右
         aA[2].onclick=function(){
             aPos.unshift(aPos.pop());
             tab();
             return false;
         };
        
         var aPos=[];
         for(var i=0; i<aLi.length; i++){
             aPos[i]={
                 left: aLi[i].offsetLeft,
                 top: aLi[i].offsetTop,
                 width: aImg[i].offsetWidth,
                 height: aImg[i].offsetHeight,
                 opacity: getStyle(aImg[i], 'opacity'),
                 imgT: aImg[i].offsetTop,
                 fnClick: aA[i].onclick
             }
         }
         // 往左边动
         addEvent(oBtn,'click',function(){
             aPos.unshift(aPos.pop());
             tab();
         })
         // 往右边动
         addEvent(oBtn2,'click',function(){
             aPos.push(aPos.shift());
             tab();
         })
         function tab(){
             for(var i=0; i<aLi.length; i++){
                 move(aLi[i], {left: aPos[i].left, top: aPos[i].top});
                 move(aImg[i], {width: aPos[i].width, height: aPos[i].height, opacity: aPos[i].opacity, top: aPos[i].imgT});
                 aA[i].onclick=aPos[i].fnClick;
             }
         }
})