import { runNetworkSimulation } from "../simulations/network.js";

export default function NetworkSim() {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
        <h2>📡 Simulasi Jaringan</h2>
        <p>Lihat pergerakan paket antar node dalam topologi sederhana.</p>
        <canvas id="netCanvas" width="500" height="300"></canvas>
    `;

    setTimeout(() => {
        const c = document.getElementById("netCanvas");
        runNetworkSimulation(c.getContext("2d"));
    }, 50);

    return card;
}
