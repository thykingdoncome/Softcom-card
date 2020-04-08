const lightMode = document.querySelector("#light");
const darkMode = document.querySelector("#dark");
const toggleState = document.querySelector("#toggleState");
const container = document.querySelector(".card-holder");
const bigFig = document.querySelector("#big-figure");
const smallFig = document.querySelector("#small-figure");
const icon = document.querySelector(".icon");


darkMode.addEventListener("click", setDarkMode);
lightMode.addEventListener("click", setLightMode);

toggleState.addEventListener("click", toggleCard)

// Set Dark Mode
function setDarkMode() {
    container.classList.add("dark-mode");
}

//Set Light Mode
function setLightMode() {
    container.classList.remove("dark-mode");
}

// Card State
let state = 0;

function toggleCard() {
    state = (state + 1) % 3;
    if (state === 1) {
        container.classList.add("compact-mode")
    } else if (state === 2) {
        container.classList.add("mini-mode");
        container.classList.remove("compact-mode", "full-mode");
        icon.classList.remove("fa-sort-down");
        icon.classList.add("fa-sort-up");
        smallFig.innerHTML = "8%";
        bigFig.innerHTML = "60%";
    } else {
        container.classList.add("full-mode");
        container.classList.remove("compact-mode", "mini-mode")
        icon.classList.remove("fa-sort-up");
        icon.classList.add("fa-sort-down");
        smallFig.innerHTML = "14%";
        bigFig.innerHTML = "12%";
    }
}