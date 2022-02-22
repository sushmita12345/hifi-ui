const toggleChange = document.querySelectorAll(".theme-toggler");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
	localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
	localStorage.setItem("darkmode", null);
};


const darkModeClickHandler = (e) => {

    darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        e.currentTarget.innerHTML = '<span class="material-icons" id="dark-mode">brightness_5</span>';
    } else {
        disableDarkMode();
        e.currentTarget.innerHTML = '<span class="material-icons" id="dark-mode">dark_mode</span>';
    }
};

if (darkMode === "enabled") {
    enableDarkMode();

} else {
    disableDarkMode();
}

toggleChange.forEach((btn) => btn.addEventListener("click", darkModeClickHandler));