let fetchtT250mm = async () => {
 try {
   let data = await fetch("https://mahdi-motie.github.io/imdb-sample-db/db.json");
  let res = await data.json();
  console.log(res);
  let menuItem = res.cardm1?.map((elem) => {
    return `
      <div class="tmm-card">
              <img
                src=${elem.image}
                alt=${elem.alt}
              />
              <div class="movie-m-data">
                <div class="rank-num-m">#${elem.num}</div>
                <h4>${elem.title}</h4>
                <span>${elem.year}</span>
                <div class="card-rating">
                  <svg
                    width="11"
                    height="11"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ipc-icon ipc-icon--star-inline"
                    viewBox="0 0 24 24"
                    fill="rgb(245, 197, 24)"
                    role="presentation"
                  >
                    <path
                      d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"
                    ></path>
                  </svg>
                  <span>${elem.rate}</span>
                  <div class="watched-mark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      class="ipc-icon ipc-icon--visibility ipc-btn__icon ipc-btn__icon--pre watched-button--icon ipc-btn__icon--disable-margin"
                      viewBox="0 0 24 24"
                      fill="#0e63be"
                      role="presentation"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
                      ></path>
                    </svg>
                    <span> Mark as watched</span>
                  </div>
                </div>
              </div>
              <div class="info-btn">i</div>
      </div>  
  `;
  });
  console.log(menuItem);
  document.querySelector(".t250mm-ranking").insertAdjacentHTML("afterbegin" ,menuItem.join(""))
  
 } catch (e) {
  console.log(e.message);

 }
};

export default fetchtT250mm