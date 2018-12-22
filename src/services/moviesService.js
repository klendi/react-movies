const API_KEY = process.env.REACT_APP_API_KEY

export function searchMovie(title, page) {
  let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&append_to_response=releases`

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

export function getPopular(page) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
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

export function getTopRated(page) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
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
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => {
        resolve(json)
      })
      .catch(err => {
        reject(err)
      })
  })
}
