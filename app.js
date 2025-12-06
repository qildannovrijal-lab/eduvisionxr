import { router } from "./router.js";
import "./components/notification.js";

const themeBtn = document.getElementById("toggle-theme");

// LOAD ROUTER
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// TOGGLE TEMA
themeBtn.addEventListener("click", () => {
    const curr = document.body.dataset.theme;
    document.body.dataset.theme = curr === "dark" ? "light" : "dark";
});
