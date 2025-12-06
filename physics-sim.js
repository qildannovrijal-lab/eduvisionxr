export default function PhysicsSim() {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>🪐 Simulasi Fisika</h2>
        <p>Bola jatuh bebas dengan gravitasi dan efek bouncing.</p>
        <canvas id="physCanvas" width="400" height="300"></canvas>
    `;

    // gravity simulation
    setTimeout(() => {
        const ctx = document.getElementById("physCanvas").getContext("2d");
        let y = 10, velocity = 0, gravity = 0.4;

        function loop() {
            ctx.clearRect(0, 0, 400, 300);

            velocity += gravity;
            y += velocity;

            if (y > 260) {
                y = 260;
                velocity *= -0.7;
            }

            ctx.beginPath();
            ctx.arc(200, y, 20, 0, Math.PI * 2);
            ctx.fill();

            requestAnimationFrame(loop);
        }
        loop();
    }, 50);

    return card;
}
