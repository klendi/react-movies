async function searchMovie(title, callback) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${encodeURI(
      title
    )}`
  )
    .then(res => {
      return res.json();
    })
    .then(myJson => {
      callback(null, myJson);
      return myJson;
    });
}

// TODO: Finish getGenresByID
function getGenresByID(id, callback) {
  let data = [];

  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US`
  )
    .then(res => {
      return res.json();
    })
    .then(myJson => {
      callback(null, myJson);
      return myJson;
    });
}

export default searchMovie;
