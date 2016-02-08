$(document).ready(function(){

	$(".carpet-sprite").click(function(){
		$(".carpet-sprite").removeClass('active');
		$(this).addClass("active");
	})

	$(".option-image").click(function(){
		$(".option-image").removeClass('active');
		$(this).addClass("active");
	})
});