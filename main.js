const time = document.getElementById("time");

// Affichage d'heure
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Format de l'heure
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add le zéros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Run
showTime();
