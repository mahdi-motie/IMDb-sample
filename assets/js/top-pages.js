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

// Top 250 API-backed rankings.
// Each page only contains some of these ranking containers (top-movie.html has
// .t250md-ranking + .t250mm-ranking, top-series.html has .t250sd-ranking +
// .t250mm-ranking), so only call the fetcher when its target exists on the
// current page — this avoids "Cannot read properties of null" console errors.
import fetchtT250md from "./t250md.js";
import fetchtT250sd from "./t250sd.js";
import fetchtT250mm from "./t250mm.js";

if (document.querySelector(".t250md-ranking")) fetchtT250md();
if (document.querySelector(".t250sd-ranking")) fetchtT250sd();
if (document.querySelector(".t250mm-ranking")) fetchtT250mm();
