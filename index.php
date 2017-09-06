<?php 
if(isset($_POST['submit'])){
    $to = "tenzintomjor@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $phone = $_POST['phone']; // this is the sender's phone number
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "training reservation";
    $message = $first_name . " " . $last_name . " whose phone number is " . $phone . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    header('Location: http://www.tashitrainer.com/thank_you.html');
    exit();
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>