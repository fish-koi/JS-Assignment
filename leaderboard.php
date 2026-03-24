<?php
$email = $_GET['email'];
$wins = $_GET['wins'];
$losses = $_GET['losses'];
$games = $_GET['played'];
$date = $_GET['date'];
$time = $_GET['time'];

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
            <h1>Leader Board</h1>
        </div>
        <h3>Personal Stats</h3>
        <?php
        try {
            $command = "INSERT INTO `leaderboard` (`email`,`wins`,`losses`,`games`, `date`,`time`) VALUES (?,?,?,?,?,?)";
            $stmt = $dbh->prepare($command);
            $args = [$email, $wins, $losses, $games, $date, $time];
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
                    <th>Date</th>
                    <th>Time</th>
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
                            <td>" . $row["date"] . "</td>
                            <td>" . $row["time"] . "</td>
                        </tr>";
                    }
                } catch (Exception $e) {
                    echo "<h3>Error occured.</h3>";
                }
                ?>
            </tbody>
        </table>
        <h3>Overall Stats</h3>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Games Played</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <?php
                try {
                    $command = "SELECT * FROM `leaderboard` ORDER BY `wins` DESC LIMIT 5";
                    $stmt = $dbh->prepare($command);
                    $result = $stmt->execute();
                    while ($row = $stmt->fetch()) {
                        echo "<tr>
                            <td>" . $row["email"] . "</td>
                            <td>" . $row["wins"] . "</td>
                            <td>" . $row["losses"] . "</td>
                            <td>" . $row["games"] . "</td>
                            <td>" . $row["date"] . "</td>
                            <td>" . $row["time"] . "</td>
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