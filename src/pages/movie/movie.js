import './movie.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import MovieDetails from '../../components/movie-details/movie-details.js'
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../../services/fetch-service.js'
import Error from '../../pages/error/error.js'

/**
 * MovieDetails Component.
 *
 * @returns {React.ReactElement} - MovieDetails Component.
 */
const Movie = () => {
  const params = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   *
   */
  const getMovie = async () => {
    setIsLoading(true)
    const movieData = await getSingleMovie(params.id)
    if (movieData) {
      setMovieDetails(movieData)
    } else {
      setError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getMovie()
  }, [])
  if (isLoading) {
    return <div className="movieLoadingSpinnerWrapper"><div className="movieLoadingSpinner"></div></div>
  } else if (error) {
    return <Error message="Could not find the specified movie" />
  } else {
    return <MovieDetails movieData={movieDetails} />
  }

  // !error ? <MovieDetails movieData={movieDetails} /> : <Error message="Could not find the specified movie" />
}
export default Movie
