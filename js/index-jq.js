// JavaScript Document

$(function(){
	var iNow=0;
	setInterval(function(){
		iNow++;
		for(var i=0; i<$('#hc-pc li').length; i++){
			$('#hc-pc li').eq(i).stop().animate({'opacity':'0'},500);
		}
		$('#hc-pc li').eq(iNow%5).stop().animate({'opacity':'1'},500);
	},1000);
});
