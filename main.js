$(document).ready(function(){

	$('.aboutLink').click(function() {
		openSection($('#aboutSection'));
	});

	$('.resumeLink').click(function() {
		openSection($('#resumeSection'));
	});

	$('.designLink').click(function() {
		openSection($('#designSection'));
	});

	$('.developmentLink').click(function() {
		openSection($('#developmentSection'));
	});

	$('.bar-nav').click(function() {
		$('.section-container').hide();
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
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTri').css('fill', '#ff8b94');
		$('#aboutTriShadow').hide();
	});

	$('.resumeLink').hover(function(){
		$('#resumeTri').css('fill', '#ffa2a9');
		$('#resumeTriShadow.shadow').show();
	}, function(){
		$('#resumeTri').css('fill', '#a8e6cf');
		$('#resumeTriShadow').hide();
	});

	$('.designLink').hover(function(){
		$('#designTri').css('fill', '#ffa2a9');
		$('#designTriShadow').show();
	}, function(){
		$('#designTri').css('fill', '#ffd3b6');
		$('#designTriShadow').hide();
	});

	$('.developmentLink').hover(function(){
		$('#developmentTri').css('fill', '#ffa2a9');
		$('#developmentTriShadow').show();
	}, function(){
		$('#developmentTri').css('fill', '#CBDBB1');
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
}

