// JavaScript Document

$(function(){
	var oBtn=$('#btn li');	
	var oBanner=$('#banner li a');

	var oFbox=$('#ofpic_box li a');
	var oFli=$('#ofpic_but li');
	var oFbtn=$('#ofpic_but li a');
	oBtn.mouseover(function(){
		oBtn.removeClass('active-btn');
		/*oBanner.removeClass('active');*/
		$(this).addClass('active-btn');
		oBanner.stop().animate({'opacity':'0',},700);
		oBanner.eq($(this).index()).stop().animate({'opacity':'1'},700);
		/*oBanner.eq($(this).index()).addClass('active');*/

	})

	oFli.mouseover(function(){
		oFbtn.removeClass('active-btn');
		oFbox.removeClass('active');
		oFbtn.eq($(this).index()).addClass('active-btn');
		oFbox.eq($(this).index()).addClass('active');
	})
})
