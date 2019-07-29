$(document).ready(()=>{

	$('input').on('focus',function(){
		$(this).parent().find('span').addClass('focused_input');
	})


	$('input').on('focusout',function(){
		let inputValue = $(this).val();
		if(!inputValue){
			$(this).parent().find('span').removeClass('focused_input');
		}
	})
})