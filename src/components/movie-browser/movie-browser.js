import './movie-browser.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getTitles } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'

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

  /**
   * Gets the movies to display in the list.
   */
  const getMovies = async () => {
    try {
      setIsLoading(true)
      const titles = await getTitles(endPoint)
      setTrendingTitles(titles.results)
      settecievedMovies(true)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }
  /**
   * React useEffect hook
   */
  useEffect(() => {
    getMovies()
  }, [recievedMovies, isLoading])

  return (
    <div className="movieBrowserContainer">
      <h1>{category}</h1>
    <div className="movieBrowserTitleContainer">
        {trendingTitles.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${poster ? title.poster_path : title.backdrop_path}`
          return (<MovieCard key={title.id} movieId={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={poster} />)
        })}
    </div>
    </div>
  )
}
export default MovieBrowser
