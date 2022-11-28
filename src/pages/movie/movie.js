import './movie.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import MovieDetails from '../../components/movie-details/movie-details.js'
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../../services/fetch-service.js'

/**
 * MovieDetails Component.
 *
 * @returns {React.ReactElement} - MovieDetails Component.
 */
const Movie = () => {
  const params = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [error, setError] = useState(false)

  /**
   *
   */
  const getMovie = async () => {
    const movieData = await getSingleMovie(params.id)
    if (movieData) {
      setMovieDetails(movieData)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    getMovie()
    console.log(error)
  }, [])
  return !error ? <MovieDetails movieData={movieDetails} /> : <h2>Error</h2>
}
export default Movie
