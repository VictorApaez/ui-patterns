let apiKey = "4bb0e757619267e381c73a006aa412e2";
let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res.results[0]);
    let movieId = res.results[0].id;
    let moviePath = res.results[0].poster_path;
    let html = `<img src=https://image.tmdb.org/t/p/w185${moviePath}><img>`;
    document.body.insertAdjacentHTML("afterbegin", html);
  });
// https://image.tmdb.org/t/p/w185/
// /3bhkrj58Vtu7enYsRolD1fZdja1.jpg
