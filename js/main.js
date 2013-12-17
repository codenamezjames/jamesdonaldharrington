jQuery(document).ready(function($) {
	var header_height = $("header").height()
	var article_height = $("article").height()
	var footer_height = $("footer").height()




	function validate(form){

		var error_loger = "";
		form.find(':input').change(function(event) {
			$(this).removeClass('error')
		});
		form.find(':input').each(function(index, el) {

			var that = $(this)

			if (that.hasClass('require')){

				if (that.attr('type') == "text"){

					if (that.val() == undefined || $(this).val() == "") {
						error_loger += $(this).attr('placeholder') + " can't be blank <br>"
						$(this).addClass('error');

					}else if (that.val().length < 3) {
						error_loger += $(this).attr('placeholder') + " is not long enough <br>";
						$(this).addClass('error');
					};

				}
			
			}
		});

		if(error_loger != ""){
			$("#error_message").html(error_loger)
			$("#error_message").slideDown('fast');
			return false;
		}else{return true}
	};




	
	$(".push").height( $(window).height() - header_height - article_height - footer_height )

	$(window).resize(function(event) {
		$(".push").height( $(window).height() - header_height - article_height - footer_height )
	});


	$("form").submit(function(e){
		$("#sliderVal").val($("#slider").slider( "value" ));
		return validate($("form"))
		
	});



});