<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Space Site Contact Form Result</title>
    <link rel="shortcut icon" href="./img/Florida_Space_Instititute_Logo.png" type="image/x-icon">
    <script src="./js/script.js" async defer></script>
</head>

<body>


    <!--Simple Mail script in php -->
    <?php

    $to = 'yjangwynter@knights.ucf.edu';

    $subject = $_POST["subject"];

    $from = $_POST["email"];

    $message = "A message from ".$from.": <br> ".$_POST["message"];

    $headers = "From: ".$from."\r\n";

    mail($to,$subject,$message,$headers);
    //Confirmation message for the user
    echo nl2br('Thank you '.$_POST["name"].' for your message delivered from your email: '.$_POST["email"]."\r\n\n Your message was: \r\n".$_POST["message"]."\r\n\n");
    
    ?>
    <a href="./index.html">Return Home</a>
</body>

</html>