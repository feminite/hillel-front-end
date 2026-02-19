let totalSeconds = 87;
const timerElement = document.getElementById('timer');

function updateTimer() {
    const mins = (totalSeconds - (totalSeconds % 60)) / 60;
    
    const secs = totalSeconds % 60;

    let displayMins = mins;
    if (mins < 10) { 
      displayMins = '0' + mins; 
    }

    let displaySecs = secs;
    if (secs < 10) { 
      displaySecs = '0' + secs; 
    }

    timerElement.innerText = displayMins + ':' + displaySecs;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        clearInterval(interval);
        timerElement.innerText = "Час вийшов!";
    }
}

const interval = setInterval(updateTimer, 1000);

updateTimer();