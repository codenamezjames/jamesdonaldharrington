// THE GAME //
/*************************************************************
						DROP DOWN MENU 
*************************************************************/
jQuery(document).ready(function($) {
	$(".menu_drop").click(function(event) {
		$(".dropdown").slideToggle(200);
	});
});
/*************************************************************
					  DROP DOWN MENU END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  		Login
*************************************************************/
jQuery(document).ready(function($) {
	$("#login").submit(function(event) {
		event.preventDefault();
		var email = $("#email").val();
		var password = $("#password").val();





		$.ajax({
			url: 'https://api.bitshuffle.net/users/login',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {email: email, password: password},
		})
		.done(function(data) {
			console.log(data.success_text);
			console.log(data)
			var emailcookie = $.cookie("email", data.query.email), // => "the_value"
			token = $.cookie("token", data.results.token); // => "the_value"

			window.location.replace("mymix.html")

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					  	  LOGIN END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	  SIGN UP
*************************************************************/
jQuery(document).ready(function($) {
	$("#sign_up").submit(function(event) {
		event.preventDefault();
		var email = $("#email").val();
		var password = $("#password").val();
		var fname = $("#fname").val();
		var lname = $("#lname").val();





		$.ajax({
			url: 'https://api.bitshuffle.net/users/create',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {fname:fname, lname:lname, email: email, password: password},
		})
		.done(function(data) {
			console.log(data.success_text);
			console.log("success")
			window.location.replace("thankyou.html")

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					  	SIGN UP END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	VERIFY
*************************************************************/
// jQuery(document).ready(function($) {

// 		function URLToArray(url) {
// 		  var request = {};
// 		  var pairs = url.substring(url.indexOf('?') + 1).split('&');
// 		  for (var i = 0; i < pairs.length; i++) {
// 		    var pair = pairs[i].split('=');
// 		    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
// 		  }
// 		  return request;
// 		}

// 		var email = URLToArray["email"];
// 		var token = URLToArray["token"];





// 		$.ajax({
// 			url: 'https://api.bitshuffle.net/users/verify',
// 			crossDomain: true,
// 			type: 'POST',
// 			dataType: 'json',
// 			data: {email: email, token: token},
// 		})
// 		.done(function(data) {
// 			console.log(data.success_text);
// 			console.log("success")
// 			var emailcookie = $.cookie("email", data.query.email), // => "the_value"
// 			token = $.cookie("token", data.results.token); // => "the_value"


// 		})
// 		.fail(function(data) {
// 			console.log("fail")
// 		})
// 		.always(function() {
// 			console.log("complete");
// 		});
		
// });

/*************************************************************
					   VERIFY END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	ADD BT-COIN
*************************************************************/
jQuery(document).ready(function($) {
	$(".add_wallet").submit(function(event) {
		event.preventDefault();
		var email = $.cookie("email")
		var token = $.cookie("token")
		var bitcoin_address = $(".btcoin_address").val()





		$.ajax({
			url: 'https://api.bitshuffle.net/users/wallets/add',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {email: email, token: token},
		})
		.done(function(data) {
			console.log(data.success_text);
			console.log("success")

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					   ADD BT-COIN END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	ADD recipient
*************************************************************/
jQuery(document).ready(function($) {
	$(".add_recipient").submit(function(event) {
		event.preventDefault();
		var email = $.cookie("email")
		var token = $.cookie("token")
		var friend_address = $(".friend_address").val()
		var friend_name = $(".friend_name").val()






		$.ajax({
			url: 'https://api.bitshuffle.net/users/addresses/add',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {email: email, token: token, address: friend_address, label:friend_name},
		})
		.done(function(data) {
			console.log(data.success_text);
			alert(data.success_text)
			console.log("success")
			location.reload();

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					   ADD recipient END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	DELETE recipient
*************************************************************/
jQuery(document).ready(function($) {
	$(".address").on('click', '.delete_friend', function(event) {
		event.preventDefault();
		var email = $.cookie("email")
		var token = $.cookie("token")
		var friend_address = $(this).closest('div').prev().text();

		$(this).closest('.panel').fadeOut('400');



		$.ajax({
			url: 'https://api.bitshuffle.net/users/addresses/delete',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {email: email, token: token, address: friend_address},
		})
		.done(function(data) {
			console.log(data.success_text);

			console.log("success")
			

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					   DELETE recipient END
*************************************************************/
//
//
//
//
//
/*************************************************************
					  	SEND BTCOIN
*************************************************************/
jQuery(document).ready(function($) {
	$(".send_btcoin").submit(function(event) {
		event.preventDefault();
		var email = $.cookie("email")
		var token = $.cookie("token")
		var fname = $("#fname").val();
		var lname = $("#lname").val();





		$.ajax({
			url: 'https://api.bitshuffle.net/users/create',
			crossDomain: true,
			type: 'POST',
			dataType: 'json',
			data: {email: email, token: token},
		})
		.done(function(data) {
			console.log(data.success_text);
			console.log("success")

		})
		.fail(function(data) {
			console.log(data);
			console.log("fail")
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});

/*************************************************************
					   SEND BTCOIN END
*************************************************************/
//
//
//
//
//
/*************************************************************
					 PASSWORD VALIDATION
************************************************************

************************************************************
					PASSWORD VALIDATION END
*************************************************************/
//
//
//
//
//
/*************************************************************
					 	  LOG OUT
*************************************************************/

jQuery(document).ready(function($) {
	$(".logout").click(function(event) {
		 $.removeCookie('email');
		 $.removeCookie('token');
		 window.location.replace("index.html")
	});
});
/*************************************************************
						LOG OUT END
*************************************************************/












