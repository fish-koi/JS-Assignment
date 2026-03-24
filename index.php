<?php
$email = filter_input(INPUT_GET, "email", FILTER_VALIDATE_EMAIL);
$birthday = filter_input(INPUT_GET, "birthday", FILTER_SANITIZE_SPECIAL_CHARS);

try {
    $dbh = new PDO("mysql:host=localhost;dbname=epshtea_local", "root", ""); // change when uploading
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}

$paramsok = false;
if ($email !== null  && $birthday !== null && $email !== false  && $birthday !== false) {
    $paramsok = true;
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script>
        window.addEventListener("load", function() {
            const email = document.getElementById("email");
            const birthday = document.getElementById("birthday");
            const emailFeedback = document.getElementById("email-feedback");
            const form = document.getElementById("form");

            form.addEventListener("submit", function() {
                let indexOne = -1;
                let indexTwo = -1;

                for (let i = 0; i < email.value.length; i++) {
                    if (email.value[i] == "@") {
                        indexOne = i;
                    }
                    if (email.value[i] == ".") {
                        indexTwo = i;
                    }
                }

                if (!(indexOne < indexTwo && indexOne !== -1 && indexTwo !== -1)) {
                    emailFeedback.visibility = "visible";
                    emailFeedback.innerHTML = "Invalid email, please try again.";
                    event.preventDefault();
                }
            });
        });
    </script>
</head>

<body>
    <div id="container">
        <div id="header">
            <h1>Login</h1>
        </div>
        <form id="form" name="form" action="index.php">
            <input id="email" type="email" name="email" placeholder="email" required>
            <p id="email-feedback"></p>
            <input id="birthday" type="date" name="birthday" required>
            <input type="submit">
        </form>

        <?php
        if ($paramsok) {
            $error = false;
            try {
                $command = "SELECT `birthday` FROM `login` WHERE `email` = ?";
                $stmt = $dbh->prepare($command);
                $args = [$email];
                $result = $stmt->execute($args);
                $row = $stmt->fetch();
                if (!$row) {
                    $command =  "INSERT INTO `login` (`email`, `birthday`) VALUES (?, ?)";
                    $stmt = $dbh->prepare($command);
                    $args = [$email, $birthday];
                    $result = $stmt->execute($args);
                    echo "<h3>Profile Created!</h3>";
                    echo "<a href='play.php?email=". urldecode($email) . "'>Play Tic Tac Toe</a>";
                }
                elseif ($row["birthday"] == $birthday) {
                    echo "<h3>Welcome Back!</h3>";
                    echo "<a href='play.php?email=". urldecode($email) . "'>Play Tic Tac Toe</a>";
                }
                else{
                    echo "<h3>Email taken.</h3>";
                    echo "<a href='index.php'>Try Again</a>";
                }
            } catch (Exception $e) {
                $error = true;
                echo "<h3>Error occured, login failed.</h3>";
            }
        }
        ?>
    </div>
</body>

</html>