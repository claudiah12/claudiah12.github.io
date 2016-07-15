$(document).ready(function(){

	$('.aboutLink').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
				$('#aboutSection').show();
	        });
	});

	$('.resumeLink').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
				$('#resumeSection').show();
	        });
	});

	$('.designLink').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
				$('#designSection').show();
	        });
	});

	$('.developmentLink').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
				$('#developmentSection').show();
	        });
	});

	$('.bar-nav').click(function() {
		$('.section-container').hide();
	});

	$('#homeTri').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
	        });
		 event.preventDefault();
	});

	$('.aboutLink').hover(function(){
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTriShadow').hide();
	});

	$('.resumeLink').hover(function(){
		$('#resumeTriShadow.shadow').show();
	}, function(){
		$('#resumeTriShadow').hide();
	});

	$('.designLink').hover(function(){
		$('#designTriShadow').show();
	}, function(){
		$('#designTriShadow').hide();
	});

	$('.developmentLink').hover(function(){
		$('#developmentTriShadow').show();
	}, function(){
		$('#developmentTriShadow').hide();
	});

});

