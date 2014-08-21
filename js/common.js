head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.header__menu').click(function(event) {
		$('.header ul').toggleClass('is-mobileshown')
	});

	console.log($('body').html());
});