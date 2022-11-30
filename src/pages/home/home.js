import './home.css'
import * as React from 'react'
import MovieBrowser from '../../components/movie-browser/movie-browser.js'
import { useEffect } from 'react'
/**
 * Home Component.
 * Represents the home page.
 *
 * @returns {React.ReactElement} - Home Component.
 */
const Home = () => {
  /**
   * React useEffect Hook
   */
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="homeContainer">
        <div className="homeBrowserContainer">
          <MovieBrowser category="Trending" endPoint="3/movie/popular" poster={false} />
          <MovieBrowser category="Now Playing" endPoint="3/movie/now_playing" poster={true} />
          <MovieBrowser category="Top Rated" endPoint="3/movie/top_rated" poster={true} />
          </div>
          <div className="homeFooter">This product uses the TMDb API but is not endorsed or certified by TMDb</div>
    </div>
  )
}
export default Home
