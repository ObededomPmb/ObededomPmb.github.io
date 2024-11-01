// Countdown logic
const targetDate = new Date("July 25, 2025").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}

setInterval(updateCountdown, 1000);