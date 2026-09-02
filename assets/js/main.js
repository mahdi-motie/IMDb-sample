import fetchBornToday from "./mobile/home/Bordn-Today.js";
import fetchFeature from "./mobile/home/featured.js";
import fetchMain from "./mobile/home/mainSlider.js";
import fetchPopular from "./mobile/home/popular-instrests.js";
import fetchTopw from "./mobile/home/top-10.js";

fetchMain();
fetchFeature();
fetchTopw();
fetchPopular();
fetchBornToday();



import fetchFeaturedDsk from "./desktop/home/featured.js";
import fetchTopwDsk from "./desktop/home/top-10-dsk.js";
import fetchPopularDsk from "./desktop/home/popular-Dsk.js";
import fetchBornTodayDsk from "./desktop/home/bord-toda-Dsk.js";

fetchFeaturedDsk();
fetchTopwDsk();
fetchPopularDsk();
fetchBornTodayDsk();





let subMenu = document.querySelector(".submenu");
let menuSvg = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");

let show = ()=>{
    subMenu.classList.add("active")
};
let close = ()=>{
    subMenu.classList.remove("active")
};

menuSvg.addEventListener("click",show);
closeBtn.addEventListener("click",close)