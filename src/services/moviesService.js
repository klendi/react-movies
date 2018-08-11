const API_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'

export function searchMovie(title, page) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}&query=${encodeURI(title)}&page=${page}`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getGenresByID(ids) {
  const genres = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]
  let data = []

  ids.forEach(id => {
    let genre = genres.find(g => id === g.id)
    data = [...data, genre]
  })

  return data
}

export function getPopular() {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getTopRated() {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&page=1`
    )
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getDetailedMovie(movieID) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb`
    )
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}
