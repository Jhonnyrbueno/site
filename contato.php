<?php
date_default_timezone_set('America/Sao_Paulo');

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$nome = isset($_POST['nome']) ? trim($_POST['nome']) : 'Não informado';
$email = isset($_POST['email']) ? trim($_POST['email']) : 'Não informado';
$assunto = isset($_POST['assunto']) ? trim(utf8_decode($_POST['assunto'])) : 'Não informado';
$mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : 'Não informado';
$data = date('d/m/Y H:i:s');

if ($nome && $email && $assunto && $mensagem){
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'jhonnyrbueno@gmail.com';
	$mail->Password = '551801Mona';
	$mail->Port = 587;

	$mail->setFrom('jhonnyrbueno@gmail.com');
	$mail->addAddress('jhonnyrbueno@gmail.com');

	$mail->isHTML(true);
	$mail->Subject = $assunto;
	$mail->Body = "Nome {$nome}<br>
				   Email {$email}<br>
				   Mensagem {$mensagem}<br>
				   Data/hora: {$data}";

	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
} else{
	echo "Erro ao enviar mensagem.";
}