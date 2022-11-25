import './movie-card.css'
import * as React from 'react'

/**
 * MovieBrowser Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieCard = ({ imageUrl, originalTitle, releaseDate }) => {
  return (
    <div className="movieCardContainer">
    <img src={imageUrl} loading="lazy"></img>
    <div className="movieCardTitle">
       <h3>{originalTitle}</h3>
      {releaseDate}
    </div>
  </div>
  )
}
export default MovieCard
