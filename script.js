let apiKey = "4bb0e757619267e381c73a006aa412e2";
let urlTopMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
let urlComingSoon = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

function createUI(res, rowName) {
  res.results.forEach((movieInfo) => {
    let moviePath = movieInfo.poster_path;
    let html = `
      <div class="poster"
        style="background-image: url(https://image.tmdb.org/t/p/w185${moviePath});">
        <dialog class="modal ${movieInfo.id}">
          <div class="modal_content">
            <img src=https://image.tmdb.org/t/p/w185${moviePath} alt="">
            <div>
              <h1>${movieInfo.title}</h1>
              <p>${movieInfo.overview}</p>
          </div>
        <div>
      </dialog>
      </div>
      
    `;
    document.querySelector(rowName).insertAdjacentHTML("beforeend", html);
  });
}

function clickButtons(element, num) {
  const nextBtn = document.querySelectorAll(".btn-next")[num];
  const prevBtn = document.querySelectorAll(".btn-prev")[num];
  const width = document.querySelector(".top-rated").offsetWidth;
  const modals = document.querySelectorAll(".modal");
  const posters = document.querySelectorAll(element);

  posters.forEach((poster) => {
    poster.addEventListener("click", (e) => {
      e.target.querySelector(".modal").showModal();
    });
  });

  // modals.forEach((modal) => {
  //   modal.addEventListener("click", () => {
  //     modal.close();
  //   });
  // });

  nextBtn.addEventListener("click", (e) => {
    e.path[1].querySelector(element).scrollBy({
      top: 0,
      left: width,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", (e) => {
    e.path[1].querySelector(element).scrollBy({
      top: 0,
      left: -width,
      behavior: "smooth",
    });
  });
}

function fetchData(url, rowName, index) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      createUI(res, rowName);
      clickButtons(rowName, index);
    });
}

fetchData(urlTopMovies, ".top-rated", 0);
fetchData(urlNowPlaying, ".now-playing", 1);
fetchData(urlComingSoon, ".coming-soon", 2);
