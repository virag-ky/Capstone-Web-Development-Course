const menu = document.querySelector("span#menu");
const navbar = document.querySelector("nav");
const topNav = document.querySelector("#top-nav");

function openMenu() {
  document.body.style.overflow = "hidden";
  navbar.classList.toggle("open-menu");
  topNav.classList.toggle("top-nav");

  if (window.innerWidth > 768) {
    document.body.style.overflow = "scroll";
  }
}

menu.addEventListener("click", openMenu);
