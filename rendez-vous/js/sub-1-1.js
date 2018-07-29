$(function(){
    
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    });
    
    $('.tab_menu > li').on('click',function(){
        var index = $('.tab_menu > li').index($(this));
        $('.tab_info > article').addClass('block');
        $('.tab_menu > li').removeClass('on');    
        $('.tab_info > article').eq(index).removeClass('block');
        $('.tab_menu > li').eq(index).addClass('on');
    });
    
    $('.heart > i').on("click",function(){
        var text = $(this).siblings('span').text();
        var n = parseInt(text)+1;
        var index = $('.heart').index($(this).parent('li'));
		if ($('.heart').hasClass('plus') === true){
			$('.heart').removeClass('plus');
			$('.heart > i:eq('+index+')').attr({'class':'fa fa-heart'});
        	$(this).css('color','#ff0000');
        	$(this).siblings('span').text(n);
		} else {
			$('.heart').addClass('plus');
			$('.heart > i:eq('+index+')').attr({'class':'fa fa-heart-o'});
        	$(this).css('color','#000000');
        	$(this).siblings('span').text(n-2);
		}
    });
    
    $('.QA > div:nth-child(2) button').on('click', function(){
        $(this).parent('li').siblings('ul').toggleClass('open');
		$(this).toggleClass('on');
    });
    $('.QA > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)').on('click', function(){
        alert('내 문의가 없습니다.');
    });
    
   $('.menu > a').on('click', function(){
        $(this).parent().children('ul').toggleClass('off');
        $('.menu').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            });
    });
    //햄버거 클릭
	
	$('.review_box > p > span:nth-child(1) > a:nth-child(2)').on('click', function(){
		$('.review_box > div > ul').css({display:'none'});
		$('.img').css({display:'block'});
		$('.review_box > p > span:nth-child(1) > a').removeClass('on');
		$('.review_box > p > span:nth-child(1) > a:nth-child(2)').addClass('on');
	});
	$('.review_box > p > span:nth-child(1) > a:nth-child(1)').on('click', function(){
		$('.review_box > div > ul').css({display:'block'});
		$('.review_box > p > span:nth-child(1) > a').removeClass('on');
		$('.review_box > p > span:nth-child(1) > a:nth-child(1)').addClass('on');
	});
 
    $('.number').on('click','a[href="#"]', function(){
        $(this).parent('p').remove();
       }); 

	$('#list').change(function(){
        var index = $('#list').val();
		if (index === '') {return false;}
		else {
		$('.number').append("<p><span>"+index+"</span> <input type="+"number"+" value="+1+" min="+0+" max="+24+"> 개 "+"<a href="+"#"+" class="+"button"+">x</a>"+"</p>");
		}
    });
	//물품리스트
	
	$('.order > button:nth-child(3)').on('click', function(){
		alert('죄송합니다. 현재 상품을 주문할 수 없습니다.');
	});
	$('.order > button:nth-child(2)').on('click', function(){
		alert('상품을 카트에 추가했습니다.');
	});
	$('.order > button:nth-child(1)').on('click', function(){
		if ($(this).hasClass('attention') === true) {
			alert('상품을 관심상품에 추가했습니다.');
			$(this).children('i').css({'color':'#ff0000'});
			$(this).removeClass('attention');
		} else {
			alert('상품을 관심상품에서 제외했습니다..');
			$(this).children('i').css({'color':'#000'});
			$(this).addClass('attention');
		}
	});
    
	$('.bottom_nav a').on('click', function(){
		alert('연결되는 페이지가 없습니다.');
	});
	
	$('.QA > div > ol button').on('click', function(){
		alert('연결되는 페이지가 없습니다.');
	});
	$('.QA > div > div > button').on('click', function(){
		alert('질문을 등록할 수 없습니다.');
	});
	
    $('.footer > ul > li > a').on('click', function() {
        $(this).parent().children('ul').toggleClass('open');
    });
    //footer 메뉴
	
	$('.footer > ul > li > ul > li > a').on('click', function(){
		alert('연결되는 페이지가 없습니다.');
	});
});