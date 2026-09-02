let fetchMain = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let mainItem = res.mainSlider?.map((elem) => {
    return `
            <div class="swiper-slide">
              <a href="#" class="card">
                <div class="card-background">
                  <img src=${elem.img} alt=${elem.alt} />
                </div>
                <div class="front-view">
                  <div class="cover-img">
                    <img
                      src=${elem.img2}
                      alt=${elem.alt}
                      class="cover"
                    />
                  </div>
                  <div class="movie-names">
                    <p class="title">${elem.title}</p>
                    <p class="describtion">${elem.describtion}</p>
                    <p class="likes">${elem.rate}</p>
                  </div>
                </div>
              </a>
            </div>
            `;
  });

  document
    .querySelector(".mbl-size .main-slider .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", mainItem.join(""));
    var swiper = new Swiper(".mainSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
      });
};

export default fetchMain;
