let fetchBornTodayDsk = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let bornTodayDsk = res.bornToday?.map((elem) => {
    return `
            <div class="swiper-slide">
                <div class="cover">
                  <img src=${elem.img} alt=${elem.alt} />
                </div>
                <div class="title">
                  <p class="main-title">${elem.title}</p>
                </div>
              </div>
            `;
  });

  document
    .querySelector(".dsk-size .born-today .borns-slider .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", bornTodayDsk.join(""));
    var swiper = new Swiper(".bornSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
        breakpoints: {
          340: {
            slidesPerView: 2.4,
          },
          761: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 6,
          },
        },
      });
};

export default fetchBornTodayDsk;
