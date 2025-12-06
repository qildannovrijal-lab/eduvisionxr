export function runNetworkSimulation(ctx) {
    const nodes = [
        { x: 50, y: 150 },
        { x: 200, y: 80 },
        { x: 350, y: 200 },
        { x: 470, y: 120 }
    ];

    let packetX = 50;
    let step = 1;

    function draw() {
        ctx.clearRect(0, 0, 500, 300);

        // draw nodes
        nodes.forEach(n => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
            ctx.fill();
        });

        // packet
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(packetX, 150, 8, 0, Math.PI * 2);
        ctx.fill();

        packetX += step;
        if (packetX > 470 || packetX < 50) step *= -1;

        requestAnimationFrame(draw);
    }

    draw();
}
