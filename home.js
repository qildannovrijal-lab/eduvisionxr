export default function Home() {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <h1>Selamat Datang di <span style="color:var(--primary)">EduVisionXR</span></h1>
        <p>Platform simulasi interaktif untuk jaringan komputer, fisika, UI/UX, dan banyak lagi.</p>

        <div style="
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
            gap: 20px;">
        
            <div class="card" style="cursor:pointer" onclick="location.hash='#/network'">
                <h3>📡 Simulasi Jaringan</h3>
                <p>Visualisasi paket data bergerak antar node.</p>
            </div>

            <div class="card" style="cursor:pointer" onclick="location.hash='#/physics'">
                <h3>🪐 Simulasi Fisika</h3>
                <p>Simulasi gaya dan gravitasi real-time.</p>
            </div>

        </div>
    `;
    return div;
}
