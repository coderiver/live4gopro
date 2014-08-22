head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.header__menu').click(function(event) {
		$('.header ul').toggleClass('is-mobileshown')
	});

	$(".user ul").sticky({topSpacing:170});

	console.log($('body').html());
});