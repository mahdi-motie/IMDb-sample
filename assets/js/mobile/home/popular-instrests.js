let fetchPopular = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let popularIntrests = res.popular?.map((elem) => {
    return `
            <div class="swiper-slide">
                <div class="cover">
                  <img src=${elem.img} alt=${elem.alt} />
                </div>
                <div class="title">
                  <p class="main-title">
                    ${elem.title}
                  </p>
                </div>
              </div>
            `;
  });

  document
    .querySelector(".mbl-size .popular-intrests .intrests-slider .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", popularIntrests.join(""));
    var swiper = new Swiper(".popularSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          340: {
            slidesPerView: 1,
          },
          761: {
            slidesPerView: 2,
          },
        },
      });
};

export default fetchPopular;
