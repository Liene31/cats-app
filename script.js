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
