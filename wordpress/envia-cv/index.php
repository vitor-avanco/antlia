<?php

//Load composer's autoloader
require 'PHPMailerAutoload.php';
// include '/phpmailer/src/SMTP.php';


//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->IsSMTP(); 
$mail->SMTPDebug = 1; 
$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'SSL'; 
$mail->Host = 'smtp.sendgrid.net';

$mail->Username = 'vitoravanco';  
$mail->Password = 'vitor2201';   

$mail->Port = 465; 
//Set who the message is to be sent from
$mail->setFrom('no-reply@server.bioage.com.br', 'Bioage');
$mail->addAddress('avanco@performaweb.com.br', 'Victor');
// $mail->addAddress('lojavirtual@bioage.com.br');              
// $mail->addReplyTo('lojavirtual@bioage.com.br');
// $mail->addCC('pedro@bioage.com.br');


//Set the subject line
$mail->Subject = 'PHPMailer SMTP test';
//Replace the plain text body with one created manually
$mail->msgHTML('<p>teste</p>');
//Attach an image file


//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}