import './movie-browser.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getTitles } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'
import Error from '../../pages/error/error.js'

/**
 * MovieBrowser Component.
 *
 * @param {object} props - *
 * @param {string} props.category - *
 * @param {string} props.endPoint - *
 * @param {string} props.poster - *
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieBrowser = ({ category, endPoint, poster }) => {
  const [recievedMovies, settecievedMovies] = useState(false)
  const [trendingTitles, setTrendingTitles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  /**
   * Gets the movies to display in the list.
   */
  const getMovies = async () => {
    setIsLoading(true)
    const titles = await getTitles(endPoint)
    if (titles) {
      setTrendingTitles(titles.results)
      settecievedMovies(true)
    } else {
      setError(true)
    }
    setIsLoading(false)
  }

  /**
   * React useEffect hook
   */
  useEffect(() => {
    getMovies()
  }, [recievedMovies, isLoading])

  if (error) {
    return <Error message="Oops! Something went wrong.." />
  } else {
    return (
    <div className="movieBrowserContainer">
      <h1>{category}</h1>
    <div className="movieBrowserTitleContainer">
        {trendingTitles.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${poster ? title.poster_path : title.backdrop_path}`
          return (<MovieCard key={title.id} movieId={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={poster} />)
        })}
    </div>
    </div>)
  }
}
export default MovieBrowser
