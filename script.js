const menuUl = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
let isShowMenu = false;

// Hamburger Button - Toggles the menu
document.getElementById("hamburger-btn").addEventListener("click", () => {
  if (menuUl && !isShowMenu) {
    menuUl.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    isShowMenu = true;
  } else {
    menuUl.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    isShowMenu = false;
  }
});
