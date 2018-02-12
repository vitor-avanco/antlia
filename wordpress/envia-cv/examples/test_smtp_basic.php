<?php
header('Access-Control-Allow-Origin: *'); 
$nome = $_GET['nome'];

require_once('../class.phpmailer.php');

//Create a new PHPMailer instance
$mail = new PHPMailer(); 

$mail->IsSMTP(); 
$mail->SMTPDebug = 1; 
$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'ssl'; 
$mail->Host = 'smtp.elasticemail.com';

$mail->Port = 465; 
$mail->IsHTML(true);
//Username to use for SMTP authentication
$mail->Username = 'julianepiovezan@cvc.com.br';  
$mail->Password = '0dbaa911-a2e0-4df3-acf5-a7a31d0f8605'; 
//Set who the message is to be sent from
$mail->setFrom('mzubim@gmail.com', 'Zubair Mushtaq');
//Set who the message is to be sent to
$mail->addAddress('vitor.avanco@hotmail.com', 'Abulogicss');
//Set the subject line
$mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("convert HTML into a basic plain-text alternative body");
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}