let totalSeconds = 0;
let totalCash = 0;
let wageAmountPerSecond;
let timerInterval;
// Seconds elapsed since window was last active
let elapsedSeconds;

document.querySelector('#submit-btn').addEventListener('click', () => {
    const wageAmount = document.querySelector('#number-input').value;
    document.querySelector('#wage-input-form').style.display = 'none';
    document.querySelector('#money-tracker-div').style.display = 'inline';
    // Wage amount per second
    wageAmountPerSecond = wageAmount / 60 / 60;

    document.querySelector('#spent-time').innerText = "00:00:00";
    startTimer();
    // Detect tab visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
});

function startTimer() {
    // Set initial values
    updateEarningSpan();
    timerInterval = setInterval(() => {
        updateEarningSpan();
        updateNewEarningSpan();
        // Timer
        ++totalSeconds;
        ++elapsedSeconds;
        updateTimerSpan();
    }, 1000);
}

function updateEarningSpan() {
    // Cash made calculation
    totalCash = totalSeconds * wageAmountPerSecond;
    document.querySelector('#total-cash-made').innerText = totalCash.toFixed(2) + " CHF";
}
function updateNewEarningSpan() {
    const newEarnings = (elapsedSeconds * wageAmountPerSecond).toFixed(2);
    newEarningsSpan.innerText = "+ " + newEarnings + " CHF";
}


function updateTimerSpan() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - (hours * 3600 + minutes * 60);
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
    document.querySelector('#spent-time').innerText =
        hours + ":" + minutes + ":" + seconds;
}


let hiddenTimestamp = null;
const newEarningsSpan = document.querySelector('#new-earnings');
function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        // Tab is not visible, so store the current timestamp
        hiddenTimestamp = Date.now();
        // Hide new earnings
        newEarningsSpan.classList.remove('fade-in');
        clearInterval(timerInterval);
    } else if (document.visibilityState === 'visible') {
        if (hiddenTimestamp) {
            // Tab is visible again after being hidden
            const now = Date.now();
            const elapsedMilliseconds = now - hiddenTimestamp;
            elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

            // Update the total seconds and total cash
            totalSeconds += elapsedSeconds;
            totalCash += elapsedSeconds * wageAmountPerSecond;

            // Reset the hidden timestamp
            hiddenTimestamp = null;

            // Update the display with new values
            updateTimerSpan();
            updateEarningSpan();
            updateNewEarningSpan();
            // Make new earnings visible
            newEarningsSpan.classList.add('fade-in');
        }

        // Restart the timer
        startTimer();
    }
}


