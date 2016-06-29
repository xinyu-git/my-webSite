// JavaScript Document
	$( function(){
			var aBtn=$('#btn li');
			var aBanner=$('#banner a');	
			aBtn.mouseover(function(){
					aBtn.removeClass('active-btn');
					$(this).addClass('active-btn');
					/*aBanner.removeClass('active');*/
					aBanner.stop().animate({'opacity':'0',},500);	
					/*$('#banner a').eq($(this).index()).addClass('active');*/
					$('#banner a').eq($(this).index()).stop().animate({'opacity':'1'},500);
				});
		});
