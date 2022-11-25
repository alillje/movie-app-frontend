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

  /**
   *
   */
  const getMovies = async () => {
    try {
      const titles = await getTitles(endPoint)
      setTrendingTitles(titles.results)
      settecievedMovies(true)
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
  }, [recievedMovies])

  return (
    <div className="movieBrowserContainer">
      <h1>{category}</h1>
    <div className="movieBrowserTitleContainer">
        {trendingTitles.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${poster ? title.poster_path : title.backdrop_path}`
          return (
                    // <div key={title.id} className="movieBrowserTrendingTitle">
                    //   <img src={imageUrl} loading="lazy"></img>
                    //   <div className="movieBrowserTrendingMovieTitleContainer">
                    //      <h3>{title.original_title}</h3>
                    //     {title.release_date}
                    //   </div>
                    // </div>
                    <MovieCard key={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} />
          )
        })}
    </div>
    </div>
  )
}
export default MovieBrowser
