let fetchTopw = async () => {
  let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();

  let TopWeek = res.topWeek?.map((elem) => {
    return `
            <div class="div1">
               
                <div class="card-body">
                  <div class="card-cover">
                    <img src=${elem.img} alt=${elem.alt} />
                  </div>
                  <div class="card-titles">
                    <p class="tier-number">${elem.rank}</p>
                    <p class="title">${elem.title}</p>
                    <p class="rate">${elem.rate}<a href="#" class="rating">Rate</a>
                    </p>
                    <a href="#" class="mark">Mark as watched</a>
                    
                  </div>
                </div>
              </div>
            `;
  });

  document
    .querySelector(".mbl-size .top-week .layout .grid-layout")
    .insertAdjacentHTML("afterbegin", TopWeek.join(""));
    
};

export default fetchTopw;


