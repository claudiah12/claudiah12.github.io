$(document).ready(function(){

	$('.aboutLink').on('click touchend', function() {
		openSection($('#aboutSection'));
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


	$('#homeTri').click(function() {
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
