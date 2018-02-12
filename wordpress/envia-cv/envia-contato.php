<?php
header('Access-Control-Allow-Origin: *'); 
$nome = utf8_encode($_POST['nome']);
$email = $_POST['email'];
$celular = $_POST['celular'];
$mensagem = utf8_encode($_POST['mensagem']);
$interesse = $_POST['interesse'];


require_once('class.phpmailer.php');



//Create a new PHPMailer instance
$mail = new PHPMailer(); 

$mail->IsSMTP(); 
$mail->SMTPDebug = 1; 
$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'TLS'; 
$mail->Host = 'smtp.smtp2go.com';

$mail->Port = 587; 
$mail->IsHTML(true);
//Username to use for SMTP authentication
$mail->Username = 'antlia';  
$mail->Password = 'eDRvano1cm1ybWQw'; 
//Set who the message is to be sent from
$mail->setFrom('site@antlia.com.br', 'Formulario de Produto');
//Set who the message is to be sent to
$mail->addAddress('vitor.avanco@hotmail.com', 'Vitor Avanco');
//Set the subject line
$mail->Subject = 'Formulario de Contato do Site';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("Interesse: ".$interesse. "<br/>Nome: ".$nome."<br>Email: ".$email."<br> Telefone: ".$celular."<br> Mensagem: ".$mensagem);

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}