$( document ).ready(function(){
	//for the mobile 
	$(".button-collapse").sideNav();
	//for the carousel timer 
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	setInterval(function() {
		$('.carousel.carousel-slider').carousel('next');
	}, 4750);
	
	//submits the data for the edit 
	$('.edit-profile').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: $(this).attr('action'),
			method: "PUT",
			
			}
		).done(function(data) {
			console.log(data);
			window.location.href = '/profile';
		});
	});

	$('.allnew-recipes').infiniteScroll({
	  path: '.pagination__next',
	  append: '.recipe',
	  
	  status: '.scroller-status',
	  hideNav: '.pagination',
	});

	$('.delete-recipe').on('click', function(e) {
	e.preventDefault();
	var specificRecipe = $(this);
	var destination = specificRecipe.attr('action');
	$.ajax({
			method: 'DELETE', 
			url: destination
		}).done(function(data) {
			console.log(data);
			window.location.href = '/profile';
		});
	});

	//removes the 'logged in/out' alert from screen
	$('.okay').on('click', function(e) {
		$('.alert').css('display', 'none');
	});
});