const menuUl = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
let hamburgerMoonLogo = document.getElementById("hamburger-moon-logo");
let isShowMenu = false;

// Hamburger Button - Toggles the menu
document.getElementById("hamburger-btn").addEventListener("click", () => {
  if (menuUl && !isShowMenu) {
    menuUl.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    isShowMenu = true;
    hamburgerMoonLogo.innerHTML = `<a href="#">
        <img src="./images/moon-logo.jpg" alt="moon logo" width="40px" />
      </a>`;
  } else {
    menuUl.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburgerMoonLogo.innerHTML = "";
    isShowMenu = false;
  }
});

//Theme Toggle

let isClicked = true;

document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const indexTitle = document.getElementById("index-title");
  const indexPara = document.getElementById("index-para");

  if (isClicked) {
    root.style.setProperty("--primary-dark-color", "#0b141a");
    root.style.setProperty("--primary-light-color", "#452a3a");

    indexTitle.style.color = "#f5e6d3";
    indexPara.style.color = "#f5e6d3";

    isClicked = false;
  } else {
    root.style.setProperty("--primary-dark-color", "#1c2b36");
    root.style.setProperty("--primary-light-color", "#f5e6d3");

    indexTitle.style.color = "#1c2b36";
    indexPara.style.color = "#1c2b36";

    isClicked = true;
  }
});

// Issues:
// 1. Page reloads and and doesn't keep the dark theme (when via JS)
// 2. Two HTML, one JS. cats.html throws error because id="index-para" exists only in index.html
// 3. In mobile version dark-light toggle doesn't work since I am adding it via JS
