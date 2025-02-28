const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function startFightingGame() {
    canvas.style.display = "block";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(50, 200, 50, 50); // Fighting character
    alert("Fighting Game Started!");
}

function startRacingGame() {
    canvas.style.display = "block";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 400, 80, 40); // Racing car
    alert("Racing Game Started!");
}

function startShootingGame() {
    canvas.style.display = "block";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(50, 300, 20, 20); // Shooting target
    alert("Shooting Game Started!");
}
