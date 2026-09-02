let fetchFeature = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let featuredItem = res.featured?.map((elem) => {
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
    .querySelector(".mbl-size .featured-today .featured-slider .swiper-wrapper")
    .insertAdjacentHTML("afterbegin", featuredItem.join(""));
    
};

export default fetchFeature;
