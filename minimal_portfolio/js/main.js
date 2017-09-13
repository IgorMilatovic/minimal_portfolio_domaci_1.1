// 1. dugme
jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

// 2. dugme
jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn1').on('click', function(event){
		event.preventDefault();
		$('.cd-panel1').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel1').on('click', function(event){
		if( $(event.target).is('.cd-panel1') || $(event.target).is('.cd-panel-close1') ) { 
			$('.cd-panel1').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

// 3. dugme
jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel2').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel2').on('click', function(event){
		if( $(event.target).is('.cd-panel2') || $(event.target).is('.cd-panel-close2') ) { 
			$('.cd-panel2').removeClass('is-visible');
			event.preventDefault();
		}
	});
});