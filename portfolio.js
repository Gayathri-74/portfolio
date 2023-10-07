const toggleModeButton = document.getElementById("toggleMode");
const body = document.body;

toggleModeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleModeButton.innerText = "Toggle Dark Mode";
    } else {
        body.classList.add("dark-mode");
        toggleModeButton.innerText = "Toggle Light Mode";
    }
});