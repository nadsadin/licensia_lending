<?php
  var_dump($_POST);
  if(isset($_POST['phone'], $_POST['name'],$_POST['email'])){
    $to = 'TESTTEST@GMAIL.COM';
    $from = $_POST['email'];
    $subject = 'Предзаказ с сайта РобоХод';
    $msg_body = '
            <p>Имя '.$_POST['name'].'</p>
            <p>Email '.$_POST['email'].'</p>
            <p>Телефон '.$_POST['phone'].'</p>';
    if(isset($_POST['work_type'])){
      $msg_body .= '<p>Выбранные типы работ:</p>';
      foreach($_POST['work_type'] as $work_type){
        $msg_body.= '<p>'.$work_type.'</p>';
      }
    }
    $message = '
          <html>
          <head>
            <title>Предзаказ с сайта РобоХод</title>
          </head>
          <body>
            <p>Имя '.$_POST['name'].'</p>
            <p>Email '.$_POST['email'].'</p>
            <p>Телефон '.$_POST['phone'].'</p>
          </body>
          </html>
      ';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: '.$from."\r\n";
    if(mail($to, $subject, $message,  $headers)){
      echo '
          <div class="h2 text-secondary">Ваш запрос отправлен!</div>
          <p>Мы скоро с Вами свяжемся.</p>';
    }else{
      echo '<div class="h2 text-primary">Что-то пошло не так.</div> <p>Попробуйте повторить запрос позже.</p>';
    }
  }else{
    echo '<div class="h2 text-primary">Обязательные поля не заполнены.</div> <p>Заполните обязательные поля и отправьте форму снова.</p>';
  }