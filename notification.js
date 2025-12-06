class AppNotification extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .notif {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 10px 15px;
                    background: orange;
                    border-radius: 5px;
                    animation: fade 3s forwards;
                }
                @keyframes fade {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
            </style>
            <div class="notif">${this.getAttribute("msg")}</div>
        `;
        setTimeout(() => this.remove(), 3000);
    }
}

customElements.define("app-notif", AppNotification);

// CARA MANGGIL:
// document.body.appendChild(Object.assign(document.createElement("app-notif"), { msg: "Data tersimpan!" }));
