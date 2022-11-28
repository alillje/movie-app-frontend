import './movie-browser.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getTitles } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'

/**
 * MovieBrowser Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieBrowser = ({ category, endPoint, poster }) => {
  const [recievedMovies, settecievedMovies] = useState(false)
  const [trendingTitles, setTrendingTitles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  /**
   *
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
   *
   *
   * @returns {*}
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
// <div key={title.id} className="movieBrowserTrendingTitle">
//   <img src={imageUrl} loading="lazy"></img>
//   <div className="movieBrowserTrendingMovieTitleContainer">
//      <h3>{title.original_title}</h3>
//     {title.release_date}
//   </div>
// </div>
