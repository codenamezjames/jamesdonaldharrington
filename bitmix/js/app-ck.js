// THE GAME //
/*************************************************************
						DROP DOWN MENU 
*************************************************************/jQuery(document).ready(function(e){e(".menu_drop").click(function(t){e(".dropdown").slideToggle(200)})});jQuery(document).ready(function(e){e("#login").submit(function(t){t.preventDefault();var n=e("#email").val(),r=e("#password").val();e.ajax({url:"https://api.bitshuffle.net/users/login",crossDomain:!0,type:"POST",dataType:"json",data:{email:n,password:r}}).done(function(t){console.log(t.success_text);console.log(t);var n=e.cookie("email",t.query.email),r=e.cookie("token",t.results.token);window.location.replace("mymix.html")}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e("#sign_up").submit(function(t){t.preventDefault();var n=e("#email").val(),r=e("#password").val(),i=e("#fname").val(),s=e("#lname").val();e.ajax({url:"https://api.bitshuffle.net/users/create",crossDomain:!0,type:"POST",dataType:"json",data:{fname:i,lname:s,email:n,password:r}}).done(function(e){console.log(e.success_text);console.log("success");window.location.replace("thankyou.html")}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e(".add_wallet").submit(function(t){t.preventDefault();var n=e.cookie("email"),r=e.cookie("token"),i=e(".btcoin_address").val();e.ajax({url:"https://api.bitshuffle.net/users/wallets/add",crossDomain:!0,type:"POST",dataType:"json",data:{email:n,token:r}}).done(function(e){console.log(e.success_text);console.log("success")}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e(".add_recipient").submit(function(t){t.preventDefault();var n=e.cookie("email"),r=e.cookie("token"),i=e(".friend_address").val(),s=e(".friend_name").val();e.ajax({url:"https://api.bitshuffle.net/users/addresses/add",crossDomain:!0,type:"POST",dataType:"json",data:{email:n,token:r,address:i,label:s}}).done(function(e){console.log(e.success_text);alert(e.success_text);console.log("success");location.reload()}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e(".address").on("click",".delete_friend",function(t){t.preventDefault();var n=e.cookie("email"),r=e.cookie("token"),i=e(this).closest("div").prev().text();e(this).closest(".panel").fadeOut("400");e.ajax({url:"https://api.bitshuffle.net/users/addresses/delete",crossDomain:!0,type:"POST",dataType:"json",data:{email:n,token:r,address:i}}).done(function(e){console.log(e.success_text);console.log("success")}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e(".send_btcoin").submit(function(t){t.preventDefault();var n=e.cookie("email"),r=e.cookie("token"),i=e("#fname").val(),s=e("#lname").val();e.ajax({url:"https://api.bitshuffle.net/users/create",crossDomain:!0,type:"POST",dataType:"json",data:{email:n,token:r}}).done(function(e){console.log(e.success_text);console.log("success")}).fail(function(e){console.log(e);console.log("fail")}).always(function(){console.log("complete")})})});jQuery(document).ready(function(e){e(".logout").click(function(t){e.removeCookie("email");e.removeCookie("token");window.location.replace("index.html")})});