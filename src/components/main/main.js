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
        <div className="mainTrending"><MovieBrowser category="Trending" endPoint="3/movie/popular" poster={false} /></div>
    </div>
  )
}
export default Main
