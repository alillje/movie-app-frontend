import './movie-card.css'
import * as React from 'react'
import { useState } from 'react'

/**
 * MovieBrowser Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieCard = ({ imageUrl, originalTitle, releaseDate, poster }) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="movieCardContainer" >
    <div style={{ width: poster ? '255px' : '680px', display: !loading ? 'none' : 'block', marginLeft: poster ? '127px' : '340px' }} className="movieCardLoaderWrapper">
      <div className="movieCardLoader"></div>
    </div>

    <img onLoad={() => setLoading(false)} style={{ width: poster ? '255px' : '680px', display: !loading ? 'block' : 'none' }} src={imageUrl} />
    <div className="movieCardTitle">
       <h3>{originalTitle}</h3>
      {releaseDate}
    </div>
  </div>
  )
}
export default MovieCard
