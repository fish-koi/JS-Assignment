<?php
$email = $_GET['email'];
$wins = $_GET['wins'];
$losses = $_GET['losses'];
$games = $_GET['played'];

try {
    $dbh = new PDO("mysql:host=localhost;dbname=epshtea_local", "root", ""); // change when uploading
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div id="container">
        <div id="header">
            <h1>LeaderBoard</h1>
        </div>
        <?php
        try {
            $command = "INSERT INTO `leaderboard` (`email`,`wins`,`losses`,`games`) VALUES (?,?,?,?)";
            $stmt = $dbh->prepare($command);
            $args = [$email, $wins, $losses, $games];
            $result = $stmt->execute($args);
        } catch (Exception $e) {
            echo "<h3>Error occured.</h3>";
        }
        ?>
        <table>
            <thead>
                <tr>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Games Played</th>
                </tr>
            </thead>
            <tbody>
                <?php
                try {
                    $command = "SELECT * FROM `leaderboard` WHERE `email` = ?";
                    $stmt = $dbh->prepare($command);
                    $args = [$email];
                    $result = $stmt->execute($args);
                    while ($row = $stmt->fetch()) {
                        echo "<tr>
                            <td>" . $row["wins"] . "</td>
                            <td>" . $row["losses"] . "</td>
                            <td>" . $row["games"] . "</td>
                        </tr>";
                    }
                } catch (Exception $e) {
                    echo "<h3>Error occured.</h3>";
                }
                ?>
            </tbody>
        </table>

    </div>
</body>

</html>