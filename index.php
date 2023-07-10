<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Hourly income tracker</title>
</head>
<body>
<div id="wage-input-form">
    <label for="number-input">Hourly wage in CHF</label>
    <input type="number" value="35" id="number-input">
    <button id="submit-btn">Start</button>
</div>
<div id="money-tracker-div">
    <span>Time: </span><span id="spent-time"></span>
    <span>Cash: </span><span id="total-cash-made"></span> <br>
    <span id="new-earnings"></span>
</div>

<script src="script.js"></script>
</body>
</html>
<?php