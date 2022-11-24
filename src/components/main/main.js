import './main.css'
import * as React from 'react'
import MovieBrowser from '../movie-browser/movie-browser.js'

/**
 * Main Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Main Component.
 */
const Main = () => {
  return (
    <div className="mainContainer">
        <div className="mainTrending">
          <MovieBrowser category="Trending" endPoint="3/movie/popular" poster={false} />
          <MovieBrowser category="Now Playing" endPoint="3/movie/now_playing" poster={true} />
          <MovieBrowser category="Top Rated" endPoint="3/movie/top_rated" poster={true} />

          </div>
    </div>
  )
}
export default Main
