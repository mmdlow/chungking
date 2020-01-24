const header = document.querySelector("header");
const headerMenu = document.querySelector(".header-menu-lg-stretch");
const headerMenuBtn = document.querySelector(".header-menu-btn");

headerMenuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("reveal");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    header.classList.remove("reveal");
    return;
  }
  if (currentScroll > lastScroll && !header.classList.contains("hide")) {
    headerMenu.classList.remove("reveal");
    header.classList.remove("reveal");
    header.classList.add("hide");
  } else if (currentScroll < lastScroll && header.classList.contains("hide")) {
    header.classList.remove("hide");
    header.classList.add("reveal");
  }
  lastScroll = currentScroll;
});
