$(document).ready(function(){

	$('#aboutTri').click(function() {
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
		 event.preventDefault();
	});

	$('#aboutTri').hover(function(){
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTriShadow').hide();
	});

	$('.about').hover(function(){
		$('#aboutTriShadow').show();
	}, function(){
		$('#aboutTriShadow').hide();
	});

});

