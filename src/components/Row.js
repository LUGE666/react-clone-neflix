import { useState, useEffect } from 'react'
import axios from '../api/axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  // const [isPlay, setIsPlay] = useState(false)

  // const fetchData = async () => {
  //   const request = await axios.get(fetchUrl)
  //   console.log(request)
  //   return request
  // }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      // console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()

    //[]页面渲染时运行一次
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))

          //点击播放
          // setIsPlay(True)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  console.log(movies)

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              key={index + movie.id}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              onClick={() => handleClick(movie)}
            />
          )
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
