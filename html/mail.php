<?php 
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$budget = "2000";

	$compleat_message = $name . " ----- " . $phone . " ----- " . $email . " ----- " . $message;

	$sent = mail("indoisfun@gmail.com", "James Donald Harrington", $compleat_message);
	if ($sent){
		echo "sent";
	}else{
		echo "not sent";
	}
?>