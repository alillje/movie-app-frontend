import './movie-card.css'
import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * MovieBrowser Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieCard = ({ imageUrl, originalTitle, releaseDate, poster, movieId }) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="movieCardContainer" >
      <Link to={`/movie/${movieId}`}>
      <div className="movieCardLoader" style={{ width: '40px', margin: poster ? ' 0px 108px 0px 107px' : '0px 320px 0px 320px', display: loading ? 'block' : 'none' }}></div>

    <img onLoad={() => setLoading(false)} style={{ width: poster ? '255px' : '680px', display: loading ? 'none' : 'block' }} src={imageUrl} />
    <div className="movieCardTitle" style={{ display: !loading ? 'none' : 'block', width: poster ? '255px' : '680px' }}>
       <h3>{originalTitle}</h3>
      {releaseDate}
    </div>
    </Link>
  </div>
  )
}
export default MovieCard
