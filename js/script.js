// Set Dark Mode
const setDarkMode = () => {
    localStorage.setItem('theme', 'dark')
    container.classList.add("dark-mode");
}

// Set Light Mode
const setLightMode = () => {
    localStorage.setItem('theme', 'light');
    container.classList.remove("dark-mode");
}

// Get persisted state and theme from localstorage onload of the window
window.onload = () => {
    sliderRange();

    const persisted = localStorage.getItem('state');
    const theme = localStorage.getItem('theme');
    state = localStorage.getItem('state') || 0;

    if (theme === 'dark') {
        container.classList.add("dark-mode");
    } else {
        container.classList.remove("dark-mode");
    }

    if (persisted == 1) {
        container.classList.remove("full-mode", "mini-mode");
        container.classList.add("compact-mode");
    } else if (persisted == 2) {
        container.classList.remove("full-mode", "compact-mode");
        container.classList.add("mini-mode");
    } else if (persisted == 0 || persisted == null) {
        container.classList.remove("compact-mode", "mini-mode");
        container.classList.add("full-mode");
    }
}

// Initialize state
let state = 0;

// Toggle Card State
const toggleCard = () => {
    state = (state + 1) % 3;
    if (state === 1) {
        localStorage.setItem('state', state)
        container.classList.remove("full-mode", "mini-mode");
        container.classList.add("compact-mode");
    } else if (state === 2) {
        localStorage.setItem('state', state)
        container.classList.remove("full-mode", "compact-mode");
        container.classList.add("mini-mode");
    } else if (state === 0) {
        localStorage.setItem('state', state);
        container.classList.remove("compact-mode", "mini-mode");
        container.classList.add("full-mode");
    }
}

// Range Slider
const sliderRange = () => {
    let x = slider.value;
    let bgColor = 'linear-gradient(90deg, rgb(40, 183, 89)' + x + '%,rgb(242, 242, 242)' + x + '%)'
    slider.style.background = bgColor;
}

// Set Variables
const lightMode = document.querySelector("#light");
const darkMode = document.querySelector("#dark");
const toggleState = document.querySelector("#toggleState");
const container = document.querySelector(".card-holder");
let slider = document.querySelector("#ranger");

// Attach Click Event Listeners
darkMode.addEventListener("click", setDarkMode);
lightMode.addEventListener("click", setLightMode);
toggleState.addEventListener("click", toggleCard);
slider.addEventListener("mousemove", sliderRange);