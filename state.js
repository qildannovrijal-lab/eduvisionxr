export const state = {
    workspace: JSON.parse(localStorage.getItem("workspace")) || {},

    save() {
        localStorage.setItem("workspace", JSON.stringify(this.workspace));
    }
};
