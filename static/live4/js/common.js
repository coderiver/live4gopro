$(document).ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.header__menu').click(function(event) {
		$('.header ul').toggleClass('is-mobileshown')
	});

	$(".user ul").sticky({topSpacing:170});
	// $('.header__menu').sticky({topSpacing:10});
	$('.live__time').click(function(event) {
		$(this).parents('.live').toggleClass('is-withlocation')
	});
});