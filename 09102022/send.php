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
                    <body>
                        <p style="border-bottom: 1px solid #000">Имя: <b style="font-size: 16px">'.$_POST['name'].'</b></p>
                        <p style="border-bottom: 1px solid #000">Телефон: <b style="font-size: 16px">'.$_POST['phone'].'</b></p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "Клиент с сайта listdekor.ru"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>