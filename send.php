<?
if(
(isset($_POST['name'])
&&$_POST['name']!="")
&&(isset($_POST['phone'])
&&$_POST['phone']!="")
){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'jonny22russ@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Письмо от потльзователя'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body style="background: #f00">
                        <p>Имя: <b>'.$_POST['name'].'</b></p>
                        <p>Телефон: '.$_POST['phone'].'</p>                    
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "Новый клиент епта"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>