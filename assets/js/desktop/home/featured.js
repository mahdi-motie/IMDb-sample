let fetchFeaturedDsk = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let featuredItemDsk = res.featured?.map((elem) => {
    return `
            <div class="swiper-slide">
                <div class="cover">
                  <img src="${elem.img}" alt="${elem.alt}" />
                </div>
                <div class="title">
                  <p class="main-title">${elem.title}</p>
                  <a href="#">${elem.describtion}</a>
                </div>
              </div>
            `;
  });

  document
    .querySelector(".dsk-size .featured-today .featured-slider .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", featuredItemDsk.join(""));
    var swiper = new Swiper(".featuredSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          340: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          761: {
            slidesPerView: 2,
          },
        },
      });
};

export default fetchFeaturedDsk;
