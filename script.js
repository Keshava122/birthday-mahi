const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    let colors = ["gold", "red", "orange", "yellow"];

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: x,
            y: y,
            radius: 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 6,
            speedY: (Math.random() - 0.5) * 6,
            life: 100
        });
    }
}

function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

setInterval(createFirework, 1000);
animate();
