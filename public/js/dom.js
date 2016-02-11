$(document).ready(function(){

	$(".carpet-sprite").click(function(){
		$(".carpet-sprite").removeClass('active');
		$(this).addClass("active");
		
	});

	$(".option-image").click(function(){
		$(".option-image").removeClass('active');
		$(this).addClass("active");
	});

	$(".mat-image").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(".mat-image").removeClass('active');
			$(this).addClass("active");
		}
	});

});