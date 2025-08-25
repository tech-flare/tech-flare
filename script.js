
    // Set your event date here
    const eventDate = new Date("2025-09-23T12:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>🎉 Event Started!</h2>";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // run once on load
  