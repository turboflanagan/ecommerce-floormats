$(document).ready(function(){

	$(".carpet-sprite").click(function(){
		if($(this).hasClass('active')){
			$(".carpet-sprite").removeClass('active');
		}else{
			$(this).addClass("active");
		}
	})
	console.log("setting active");
});