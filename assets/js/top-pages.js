// nav menu (shared submenu toggle used across all pages)
let subMenu = document.querySelector(".submenu");
let menuSvg = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");

let show = () => {
  subMenu.classList.add("active");
};
let close = () => {
  subMenu.classList.remove("active");
};

menuSvg.addEventListener("click", show);
closeBtn.addEventListener("click", close);


import fetchtT250md from "./t250md.js";
import fetchtT250sd from "./t250sd.js";
import fetchtT250mm from "./t250mm.js";

if (document.querySelector(".t250md-ranking")) fetchtT250md();
if (document.querySelector(".t250sd-ranking")) fetchtT250sd();
if (document.querySelector(".t250mm-ranking")) fetchtT250mm();
