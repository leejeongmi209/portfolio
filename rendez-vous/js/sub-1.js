$(function(){
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    });

    $('.menu > a').on('click', function(){
        $(this).parent().children('ul').toggleClass('off');
        $('.menu').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            });
    });
    //햄버거 클릭
	
	$('.product > ul > li+li').on('click', function(){
		alert('첫번째 상품을 눌러주세요.(딸기쿠기, 마카롱 24입, 플라워컵케이크, 치즈타르트)');
	});
	
	$('aside > ul li+li > a').on('click', function(){
		alert('첫번째 상품을 눌러주세요. (치즈타르트)');
	});
	
	$('aside > article:nth-child(1) li:nth-child(1)').on('click', function(){
		$('.product > ul > li').css({display:'block'});
	});
	$('aside > article:nth-child(1) li:nth-child(2)').on('click', function(){
		$('.product > ul > li').css({display:'none'});
		$('.present').css({display:'block'});
	});
	$('aside > article:nth-child(1) li:nth-child(3)').on('click', function(){
		$('.product > ul > li').css({display:'none'});
		$('.set').css({display:'block'});
	});
	$('aside > article:nth-child(1) li:nth-child(4)').on('click', function(){
		$('.product > ul > li').css({display:'none'});
		$('.order').css({display:'block'});
	});
	$('aside > article:nth-child(1) li:nth-child(5)').on('click', function(){
		$('.product > ul > li').css({display:'none'});
		$('.limitation').css({display:'block'});
	});
	
	$('.bottom_nav a').on('click', function(){
		alert('연결되는 페이지가 없습니다.');
	});
        
    $('.footer > ul > li > a').on('click', function() {
        $(this).parent().children('ul').toggleClass('open');
    });
    //footer 메뉴
	
	$('.footer > ul > li > ul > li > a').on('click', function(){
		alert('연결되는 페이지가 없습니다.');
	});
});
