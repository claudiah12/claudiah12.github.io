$(document).ready(function(){

	$('#aboutTriG').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
	        });
		 event.preventDefault();
	});

	$('.about').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
	        });
		$('#box').show();
		$('#aboutSection').css('display', 'resume');
		 event.preventDefault();
	});

	$('#aboutTriG').hover(function(){
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTriShadow').hide();
	});

	$('.about').hover(function(){
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTriShadow').hide();
	});

	$('#homeTri').click(function() {
		$('#box').animate({
	            height: 'toggle'
	            }, 500, function() {
	        });
		 event.preventDefault();
	});

});

