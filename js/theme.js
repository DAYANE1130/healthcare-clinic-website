/* ==========================================
   CLÍNICA VIDA PLENA
   theme.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        themeButton.textContent = "☀️";

    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        const darkMode =
            document.body.classList.contains("dark-theme");

        if (darkMode) {

            themeButton.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

});