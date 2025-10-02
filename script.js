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
    // Uses the click() method to run the addEventListener below for a mobile version
    hamburgerMoonLogo.addEventListener("click", () => {
      document.getElementById("theme-toggle").click();
    });
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
    if (document.title.includes("Home")) {
      // if my meta Title contains "Home" runs the code, otherwise doesn't do anything. It prevents from my error on cats.html since I don't have this id.
      indexPara.style.color = "#f5e6d3";
    }

    isClicked = false;
  } else {
    root.style.setProperty("--primary-dark-color", "#1c2b36");
    root.style.setProperty("--primary-light-color", "#f5e6d3");

    indexTitle.style.color = "#1c2b36";
    if (document.title.includes("Home")) {
      indexPara.style.color = "#1c2b36";
    }

    isClicked = true;
  }
});

// Check for the Newsletter

const newsletterCheckbox = document.getElementById("newsletter");
const choiceBlock = document.getElementById("choice-container");
const checkboxBreeds = document.querySelectorAll(".checkbox-breeds");

newsletterCheckbox.addEventListener("click", () => {
  if (newsletterCheckbox.checked) {
    choiceBlock.style.display = "block";
  } else {
    choiceBlock.style.display = "none";

    // remove all the checks if user has added
    checkboxBreeds.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});
