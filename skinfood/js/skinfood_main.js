$(function () {
	/*a이벤트 초기화*/
	/*이벤트 초기화 태그. 추후에 생기는 a태그도 이벤트가 적용되도록 document로 적용했습니다.*/
	$(document).on('click', 'a[href="#"]', function (e) {
		e.preventDefault();
	});

	/*메인배너 슬라이드*/
	/*슬라이드의 indicator 소스입니다.
	타이머로 인해 두페이지 넘어가는 현상을 방지하기 위해 클릭시 타이머를 초기화 시켜주는 소스를 넣었습니다.*/
	$('header .indicator > li > a').on('click', function () {
		var index = $('header .indicator > li').index($(this).parent());
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

	var numSlide = $('header .slide > li').length;
	var slideNow = 0;
	var slideNext = 0;
	showSlide(1);
	/*showSlide의 초기셋팅*/

	function showSlide(n) {
		var now = $('header .indicator>li').index($('.indicator>li.on'));
		var next = now + 1;
		$('header .slide > li').removeClass('on');
		$('header .slide > li').eq(n - 1).addClass('on')
		$('header .indicator > li').removeClass('on');
		$('header .indicator > li').eq(n - 1).addClass('on');
		slideNow = n;
		/*다음 슬라이드로 넘어가게 해주는 연산식입니다.*/
		slideNext = ((n + 1) > numSlide) ? 1 : (n + 1);
	}

	var timer = ''
	var timerStatus = 'play'
	/*타이머 기본셋팅
	timerStatus는 재생/멈춤 버튼의 상태를 파악할 수 있게 만들어줍니다.*/

	timer = setInterval(function () {
		showSlide(slideNext)
	}, 5000);

	/*재생/멈춤 버튼의 아이콘 변경을 하면서 시간을 재생하거나 멈출 수 있게해주는 소스입니다.*/
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
	});

	/*event 배너*/
	/*배너의 인디케이터를 누르면 해당 순번의 li를 보여주도록 만들었습니다.*/
	$('.event .indicator > li > a').on('click', function () {
		var index = $('.event .indicator > li').index($(this).parent());
		$('.event .slide > li').removeClass('on');
		$('.event .slide > li').eq(index).addClass('on');
		$('.event .indicator > li').removeClass('on');
		$('.event .indicator > li').eq(index).addClass('on');
	});

	/*newitem슬라이드*/
	/*newitem의 slide상품을 누르면 해당 순번의 li를 보여줍니다.*/
	$('.newitem .banner > li > a').on('click', function () {
		var index = $(this).parent().index();
		$('.newitem .slideimg > li').removeClass('on');
		$('.newitem .slideimg > li').eq(index).addClass('on');
	});
	/*foodlineup의 slide이미지를 누르면 해당 순번의 li를 보여줍니다.*/
	$('.foodlineup .slidebox > .banner > li > a').on('click', function () {
		var index = $(this).parent().index();
		$('.foodlineup > ul > li').removeClass('on');
		$('.foodlineup > ul > li').eq(index).addClass('on');
	});

	applySlideBanner('.newitem > .slidebanner');
	applySlideBanner('.foodlineup > .slidebanner');

	/*slidebanner의 소스입니다.*/
	function applySlideBanner(selector) {
		var offsetLeft = 0;
		var minOffsetLeft = 0;
		var widthBox = $(selector).find('.slidebox').innerWidth();
		/*상자의 이미지(보여지는)*/
		var widthBar = 0;
		/*전체 이미지의 총 길이*/
		var widthMove = 200;
		/*이동할 길이*/

		$(selector).find('.banner > li').each(function () {
			widthBar += $(this).outerWidth(true);
		});
		$(selector).find('.banner').css({
			'width': widthBar + 'px'
		});
		minOffsetLeft = -(widthBar - widthBox);

		$(selector).find('.control > .prev').on('click', function () {
			/*if문으로 최소길이0 / 최대길이인 minOffsetLeft가 넘지 않도록 제어해주는 제어문입니다.*/
			if (offsetLeft === 0) {
				$(selector).find('.banner').stop(true).animate({
					'left': '10px'
				}, 50).animate({
					'left': 0
				}, 100);
			} else {
				offsetLeft += widthMove;
				if (offsetLeft > 0) offsetLeft = 0;
				$(selector).find('.banner').stop().animate({
					'left': offsetLeft + 'px'
				}, 500);
			}
		});

		$(selector).find('.control > .next').on('click', function () {
			/*if문으로 최소길이0 / 최대길이인 minOffsetLeft가 넘지 않도록 제어해주는 제어문입니다.*/
			if (offsetLeft === minOffsetLeft) {
				$(selector).find('.banner').stop(true).animate({
					'left': (minOffsetLeft - 10) + 'px'
				}, 50).animate({
					'left': minOffsetLeft + 'px'
				}, 100);
			} else {
				offsetLeft -= widthMove;
				if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
				$(selector).find('.banner').stop().animate({
					'left': offsetLeft + 'px'
				}, 500);
			}
		});
	}

	/*scroll*/
	/*scroll이 일정 지점 이상 내려가면 태그에 move 클래스를 추가합니다.*/
	$(window).scroll(function () {
		var halfLH = $('section.menu').offset().top -  $('section.menu').height();
		if ($(window).scrollTop() > halfLH) {
			$('.half > article:nth-child(1)').addClass('move');
		} else if ($(window).scrollTop() < halfLH) {
			$('.half > article:nth-child(1)').removeClass('move');
		}
		var halfRH = $('.half > article').offset().top - $('.half > article').height()
		if ($(window).scrollTop() > halfRH) {
			$('.half > article:nth-child(2)').addClass('move');
		} else if ($(window).scrollTop() < halfRH) {
			$('.half > article:nth-child(2)').removeClass('move');
		}
		var menuH = $('section.menu').offset().top - 600
		if ($(window).scrollTop() > menuH) {
			$('section.menu').addClass('move');
		} else if ($(window).scrollTop() < menuH) {
			$('section.menu').removeClass('move');
		}
		var skinH = $('section.skin').offset().top - $('section.skin').height()
		if ($(window).scrollTop() > skinH) {
			$('.skin').addClass('move');
		} else if ($(window).scrollTop() < skinH) {
			$('.skin').removeClass('move');
		}
		var makeH = $('section.make').offset().top - $('section.make').height()
		if ($(window).scrollTop() > makeH) {
			$('.make').addClass('move');
		} else if ($(window).scrollTop() < makeH) {
			$('.make').removeClass('move');
		}
	});


	/*모바일*/
	/*모바일에서만 사용되는 소스입니다.*/
	/*hammenu*/
	/*모바일 tab메뉴(햄버거메뉴)의 소스입니다.*/
	$('header .top_nav > a:nth-child(4)').on('click', function () {
		$('header .hammenu').toggleClass('open');
		$('header .hammenu > li > a').on('click', function () {
			var index = $('header .hammenu > li').index($(this).parent());
			$('header .hammenu > li > ul').eq(index).toggleClass('open');
		})
	});

	/*product*/
	/*모바일에서는 hover 효과가 없기 때문에 클릭효과로 변경했습니다.*/
	$('.skin > ul > li').on('click', function () {
		var index = $('.skin > ul > li').index($(this))
		$('.skin > ul > li > div').eq(index).addClass('open');
	})

	$('.make > ul > li').on('click', function () {
		var index = $('.make > ul > li').index($(this))
		$('.make > ul > li > div').eq(index).addClass('open');
	})

	/*btnmenu*/
	/*footer쪽 상단의 menu의 소스입니다. 클릭시 open되도록 만들었습니다.*/
	$('.btnmenu > ul > li').on('click', function () {
		var index = $('.btnmenu > ul > li').index($(this))
		$('.btnmenu > ul > li > ul').eq(index).toggleClass('open');
	});

	$('.skin > ul > li').focusin(function () {
		$(this).css({
			'cursor': 'pointer'
		})
		$(this).addClass('focus');
	}).focusout(function () {
		$(this).removeClass('focus');
	});

	$('.make > ul > li').focusin(function () {
		$(this).css({
			'cursor': 'pointer'
		})
		$(this).addClass('focus');
	}).focusout(function () {
		$(this).removeClass('focus');
	});

	$('.newitem > ul > li').focusin(function () {
		$(this).css({
			'cursor': 'pointer'
		})
		$(this).addClass('focus');
	}).focusout(function () {
		$(this).removeClass('focus');
	});

	$('.md > ul > li').focusin(function () {
		$(this).css({
			'cursor': 'pointer'
		})
		$(this).addClass('focus');
	}).focusout(function () {
		$(this).removeClass('focus');
	});

	$('header .slide > li').focusin(function () {
		var index = $(this).index();
		$('header .indicator > li:eq(' + index + ' ) > a').trigger('click');
	})

});