const menuBtn = document.querySelector(".hamburger-icon");
const menu = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    menuBtn.querySelector("img").src = "images/icon-close.svg";
    menuBtn.style.marginRight = ".2rem";
    overlay.style.display = "block";
  } else {
    menuBtn.querySelector("img").src = "images/icon-hamburger.svg";
    menuBtn.style.marginRight = "0rem";
    overlay.style.display = "none";
  }
});
