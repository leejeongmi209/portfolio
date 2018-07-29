$(function () {
	/*a링크 클릭시 이동하지 않도록 이벤트 차단했습니다.*/
	$(document).on('click', 'a[href="#"]', function (e) {
		e.preventDefault();
	});

	/*슬라이드 배너 타이머기능o*/
	$('.indicator > li > a').on('click', function () {
		var index = $(this).parent().index();
		showSlide(index + 1);
		if (timerStatus === 'play') {
			clearInterval(timer);
			timer = setInterval(function () {
				showSlide(slideNext)
			}, 5000);
		} else if (timerStatus === 'play') {
			clearInterval(timer);
			timer = setInterval(function () {
				showSlide(slideNext)
			}, 5000);
		}
	});

	$('.arrow_left').on('click', function () {
		showSlide(slidePrev);
	});

	$('.arrow_right').on('click', function () {
		showSlide(slideNext);
	});

	var numSlide = $('.slide').length;
	var slideNow = 0;
	var slideNext = 0;
	var slidePrev = 0;
	showSlide(1);

	function showSlide(n) {
		$('.slide').css({
			'display': 'none'
		});
		$('.slide').eq(n - 1).css({
			'display': 'block'
		});
		$('.indicator > li').removeClass('on');
		$('.indicator > li').eq(n - 1).addClass('on');
		slideNow = n;
		slideNext = ((n + 1) > numSlide) ? 1 : (n + 1);
		slidePrev = ((n - 1) < 1) ? numSlide : (n - 1);
	}
	var timer = ''
	var timerStatus = 'play'

	timer = setInterval(function () {
		showSlide(slideNext)
	}, 5000);
	
	/*클릭시 타이머시간을 초기화 시켜서 클릭 후 시간초가 지나 바로 다음 페이지로 이동하는 걸 막아주기 위해 넣었습니다.*/
	$('.arrow_left').on('click', function () {
		if (timerStatus === 'play') {
			clearInterval(timer);
			timer = setInterval(function () {
				showSlide(slideNext)
			}, 5000);
		}
	});
	$('.arrow_right').on('click', function () {
		if (timerStatus === 'play') {
			clearInterval(timer);
			timer = setInterval(function () {
				showSlide(slideNext)
			}, 5000);
		}
	});
	$('.stop').on('click', function () {
		if (timerStatus === 'play') {
			clearInterval(timer)
			timerStatus = 'stop';
			$('.stop > i').attr({
				'class': 'fa fa-play'
			});
		} else {
			timerStatus = 'play';
			timer = setInterval(function () {
				showSlide(slideNext)
			}, 5000);
			$('.stop > i').attr({
				'class': 'fa fa-pause'
			});
		}
	})
	
	/*모바일 햄버거 메뉴*/
	$('.menu > a').on('click', function () {
		$(this).parent().children('ul').toggleClass('off');
		$('.menu').on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
		});
	})
	
	
	/*안내 alert창*/
	$('.box1 > a').on('click', function () {
		alert('연결되는 페이지가 없습니다.');
	});

	$('.sub > article > ul > li:not(li:nth-of-type(1)) > a').on('click', function () {
		alert('첫번째 상품을 눌러주세요.(마카롱 24입)');
	});

	$('#main > ul > li:not(li:nth-of-type(2),li:nth-of-type(7)) > a').on('click', function () {
		alert('두번째, 일곱번째 상품을 눌러주세요.(플라워 컵케이크, 치즈타르트)');
	});

	/*footer 메뉴 클릭 시 하위 메뉴가 open되도록 만들어줍니다.*/
	$('.footer > ul > li > a').on('click', function () {
		$(this).parent().children('ul').toggleClass('open');
	});

	$('.footer > ul > li > ul > li > a').on('click', function () {
		alert('연결되는 페이지가 없습니다.');
	});

	/*클릭시 새창을 띄워줍니다.*/
	$('a.popup').on('click', function (e) {
		var href = $(this).attr('href');
		var width = $(this).attr('data-width');
		var height = $(this).attr('data-height');

		event.preventDefault();
		window.open(href, 'popup', 'width=' + width + ',height=' + height + '');
	});
	
	/*스크롤이 일정구간을 넘어가면 이벤트가 발생해도록 만들어줍니다.*/
	$('.main_img').addClass('move');
	$(window).scroll(function () {
		var strawH = $('.sub_img3').offset().top - $('.sub_img3').height();
		if ($(window).scrollTop() > strawH) {
			$('.sub_img3').addClass('down');
		} else if ($(window).scrollTop() < strawH) {
			$('.sub_img3').removeClass('down');
		}

		var newH = $('.sub > h3').offset().top - $('.sub').height();
		if ($(window).scrollTop() > newH) {
			$('.sub').addClass('move');
		} else if ($(window).scrollTop() < newH) {
			$('.sub').removeClass('move');
		}

		var bestH = $('#main').offset().top - $('#main').height();
		if ($(window).scrollTop() > bestH) {
			$('#main').addClass('move');
		} else if ($(window).scrollTop() < bestH) {
			$('#main').removeClass('move');
		}
		var textH = $('.section3').offset().top - $('.section3').height();
		if ($(window).scrollTop() > textH) {
			$('.section3').addClass('move');
		} else if ($(window).scrollTop() < textH) {
			$('.section3').removeClass('move');
		}
	});
});