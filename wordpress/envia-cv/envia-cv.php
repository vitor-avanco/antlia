<?php
header('Access-Control-Allow-Origin: *'); 
$vaga = utf8_encode($_POST['vaga']);
$nome = utf8_encode($_POST['nome']);
$email = $_POST['email'];
$celular = $_POST['celular'];
$pretensao = $_POST['pretensao'];

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
$mail->setFrom('site@antlia.com.br', 'Antlia');
//Set who the message is to be sent to
$mail->addAddress('vagas@antlia.com.br', 'Vagas Antlia');
//Set the subject line
$mail->Subject = 'Candidato para a vaga: '.$vaga;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("Vaga: ".$vaga."<br>Nome: ".$nome."<br>Email: ".$email."<br> Celular: ".$celular."<br> Pretensao: ".$pretensao);
//Replace the plain text body with one created manually
$mail->AltBody = '';
if (isset($_FILES['files']) &&  $_FILES['files']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['files']['tmp_name'],
                         $_FILES['files']['name']);
}
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
    print_r($_FILES);
}