$(document).ready(function(){
	var designCarousel = $('#designSection > .carousel'),
		devCarousel = $('#developmentSection > .carousel');

	$('hr').addClass('grow');

	$('.aboutLink').on('click touchend', function() {
		openSection($('#aboutSection'));
		aboutIntro();
	});

	$('.resumeLink').on('click touchend', function() {
		openSection($('#resumeSection'));
	});

	$('.designLink').on('click touchend', function() {
		openSection($('#designSection'));
	});

	$('.developmentLink').on('click touchend', function() {
		openSection($('#developmentSection'));
	});

	$('#homeSVG').click(function() {
		$('.section-container').hide();
	});

	$('.bar-nav > .about').click(function() {
		$('.section-container').hide();
		$('#aboutSection').show();
		aboutIntro();
	});

	$('.bar-nav > .resume').click(function() {
		$('.section-container').hide();
		$('#resumeSection').show();
	});

	$('.bar-nav > .design').click(function() {
		$('.section-container').hide();
		$('#designSection').show();
	});

	$('.bar-nav > .dev').click(function() {
		$('.section-container').hide();
		$('#developmentSection').show();
	});


	$('#homeSVG').click(function() {
		$('#container').css('z-index', '-2');
		$('#box').css('z-index', '-2');
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
	        });
		 event.preventDefault();
	});

	$('.aboutLink').hover(function(){
		$('#aboutTri').css('fill', '#ffa2a9');
		$('#aboutTriShadow.shadow').show();
	}, function(){
		$('#aboutTri').css('fill', '#ff8b94');
		$('#aboutTriShadow').hide();
	});

	$('.resumeLink').hover(function(){
		$('#resumeTri').css('fill', '#c2eddd');
		$('#resumeTriShadow.shadow').show();
	}, function(){
		$('#resumeTri').css('fill', '#a8e6cf');
		$('#resumeTriShadow').hide();
	});

	$('.designLink').hover(function(){
		$('#designTri').css('fill', '#ffdac2');
		$('#designTriShadow').show();
	}, function(){
		$('#designTri').css('fill', '#ffcba9');
		$('#designTriShadow').hide();
	});

	$('.developmentLink').hover(function(){
		$('#developmentTri').css('fill', '#e6f2d3');
		$('#developmentTriShadow').show();
	}, function(){
		$('#developmentTri').css('fill', '#d5ecb0');
		$('#developmentTriShadow').hide();
	});

	initializeCarousels([designCarousel, devCarousel]);

	$('#designArrowLeft').click(function(){
		moveCarousel(designCarousel.toArray(), 'right');
	});

	$('#designArrowRight').click(function(){
		moveCarousel(designCarousel.toArray(), 'left');
	});

	$("#designSection").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			moveCarousel(designCarousel.toArray(), 'right');
    }
  });

	$("#designSection").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
			moveCarousel(designCarousel.toArray(), 'left');
    }
  });

	$('#devArrowLeft').click(function(){
		moveCarousel(devCarousel.toArray(), 'right');
	});

	$('#devArrowRight').click(function(){
		moveCarousel(devCarousel.toArray(), 'left');
	});

	$("#developmentSection").swipe( {
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			moveCarousel(devCarousel.toArray(), 'right');
		}
	});

	$("#developmentSection").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
			moveCarousel(devCarousel.toArray(), 'left');
		}
	});

});

function openSection(section){
	$('#container').css('z-index', '2');
	$('#box').css('z-index', '2');
	$('#box').animate({
	    height: 'toggle'
	    }, 500, function() {
				section.show();
	        });
};

function rotate(el, words, i){
	setTimeout(function(){
		if(el.find(".back").length > 0) {
	      el.html(el.find(".back").html())
	    }

	    el.html("");
	    $("<span class='front'>" + words[i] + "</span>").appendTo(el);
	    $("<span class='back'>" + words[i + 1] + "</span>").appendTo(el);
	    el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
	      "-webkit-transform": " rotateX(-180deg)",
	      "-moz-transform": " rotateX(-180deg)",
	      "-o-transform": " rotateX(-180deg)",
	      "transform": " rotateX(-180deg)"
	    })

	    i++;
	    if(i < words.length - 1) rotate(el, words, i);
	}, 1500);

}

function aboutIntro(){
	var el = $('.rotate'),
		words = ['a developer', 'a designer', '(sort of) trilingual', 'a wannabe carpenter', 'Claudia.'];

	el.html(words[0]);

	rotate(el, words, 0);

}

function initializeCarousels(carousels){
	carousels.forEach( function(carousel){
		$(carousel).css({right: '-100%'});
		var left = carousel[carousel.length -1],
			current = carousel[0],
			right = carousel[1];

		$(left).addClass('left');
		$(current).addClass('current');
		$(right).addClass('right');

		$(left).css({left: '-80%'});
		$(current).css({right: 'initial'});
		$(right).css({right: '-80%'});
	});
}

function moveCarousel(carousel, direction){
	var positionClasses = ['left', 'current', 'right'],
		positions = [],
		shift = { left: 1, right: -1 },
		speed = 600;
	$("html, body").animate({ scrollTop: 0 }, "slow");
	carousel.forEach( function(panelObject, index){
		var panel = $(panelObject);
		if(panel.hasClass('left')){
			panel.removeClass('left');
			positions[0] = index + shift[direction];
			if(direction === 'left'){
				panel.animate({left: '-100%'}, speed);
			} else{
				panel.animate({right: 'auto', left: 0}, speed)
			}
		} else if(panel.hasClass('current')){
			panel.removeClass('current');
			positions[1] = index + shift[direction];
			panel.removeAttr('style');
			panel.animate({[direction]: '-80%'}, speed);
		}else if(panel.hasClass('right')){
			panel.removeClass('right');
			positions[2] = index + shift[direction];
			if(direction === 'right'){
				panel.animate({right: '-100%'}, speed);
			} else{
				panel.animate({right: 'auto', left: 0}, speed);
			}
		}
	}, this);

	for (var i = 0; i < positions.length; i++){
		if (positions[i] === carousel.length){
			positions[i] = 0;
		} else if (positions[i] < 0){
			positions[i] = carousel.length - 1;
		}
		$(carousel[positions[i]]).addClass(positionClasses[i]);
	}

	if (direction === "left"){
			$(carousel[positions[2]]).css({right: '-100%', left: 'auto'});
			$(carousel[positions[2]]).animate({right: '-80%'}, speed);
		} else {
			$(carousel[positions[0]]).css({left: '-100%', right: 'auto'});
			$(carousel[positions[0]]).animate({left: '-80%'}, speed);
		}
}
