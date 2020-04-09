// Set Dark Mode
const setDarkMode = () => container.classList.add("dark-mode");

// Set Light Mode
const setLightMode = () => container.classList.remove("dark-mode");

// Toggle Card State
let state = 0;

const toggleCard = () => {
    state = (state + 1) % 3;
    if (state === 1) {
        container.classList.add("compact-mode");
    } else if (state === 2) {
        container.classList.add("mini-mode");
        container.classList.remove("compact-mode", "full-mode");
    } else {
        container.classList.add("full-mode");
        container.classList.remove("compact-mode", "mini-mode");
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
