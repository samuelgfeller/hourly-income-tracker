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
    <div id="time-and-earnings-div">
        <span class="time-span">Time: </span><span id="spent-time" class="time-span"></span>
        <img src="gold-coin.png" alt="Cash:" id="gold-coin-img">
        <span id="total-cash-made"></span>
    </div>
    <div id="new-earnings-div">
        <span id="new-earnings"></span>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
<?php