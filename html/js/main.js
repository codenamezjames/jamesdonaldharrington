jQuery(document).ready(function($) {
	$.ajax({async:false})
	$('head').load('tpl/head.html');
	$('header').load('tpl/header.html');
	if($('.resume')){
		$('.resume').load("tpl/resume.html");
	}
	$('footer').load('tpl/footer.html', function(){
		var header_height = $("header").height()
		var article_height = $("article").height()
		var footer_height = $("footer").height()

		$(".push").height( $(window).height() - header_height - article_height - footer_height )
		$(window).resize(function(event) {
			$(".push").height( $(window).height() - header_height - article_height - footer_height )
		});
		$('body').show();
		
	});
	if(location.pathname.slice(-8) == "web.html" || location.pathname.slice(-11) == "mobile.html"){
	$.getJSON('data/data.json', function(data) {
		console.log(data)
		web = data.web;
		mobile = data.mobile;

		$.each(web, function(index, site) {
			$("#web_json").append('<li><a href="'+site.url+'"><img src="http://placehold.it/200x200"></a></li>')
		});
		$.each(mobile, function(index, site) {
			$("#mobile_json").append('<li><a href="'+site.url+'"><img src="http://placehold.it/200x200"></a></li>')
		});
	});
	}

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

	$("form").submit(function(e){
		$("#sliderVal").val($("#slider").slider( "value" ));
		return validate($("form"))
		
	});



});