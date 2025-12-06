import Home from "./pages/home.js";
import NetworkSim from "./pages/network-sim.js";
import PhysicsSim from "./pages/physics-sim.js";

export function router() {
    const path = location.hash || "#/";
    const app = document.getElementById("app");

    const routes = {
        "#/": Home,
        "#/network": NetworkSim,
        "#/physics": PhysicsSim
    };

    app.innerHTML = "";
    app.appendChild(routes[path]());
}
