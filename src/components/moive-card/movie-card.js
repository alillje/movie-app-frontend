import './movie-card.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * MovieCard Component.
 *
 * @param {object} props - *
 * @param {string} props.imageUrl - *
 * @param {string} props.originalTitle - *
 * @param {string} props.releaseDate - *
 * @param {string} props.poster - *
 * @param {string} props.movieId - *
 * @returns {React.ReactElement} - MovieCard Component.
 */
const MovieCard = ({ imageUrl, originalTitle, releaseDate, poster, movieId }) => {
  const [loading, setLoading] = useState(true)
  const [isHover, setIsHover] = useState(false)

  /**
   * Sets the hovering state to true on mouse enter.
   */
  const handleMouseEnter = () => {
    setIsHover(true)
  }

  /**
   * Sets the hovering state to false on mouse enter.
   */
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  /**
   * React useEffect Hook
   */
  useEffect(() => {}, [isHover])
  return (
    <div className="movieCardContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/movie/${movieId}`}>
      <div className="movieCardLoader" style={{ width: '40px', margin: poster ? ' 0px 108px 0px 107px' : '0px 320px 0px 320px', display: loading ? 'block' : 'none' }}></div>
      {poster ? <img className="movieCardPosterImg" onLoad={() => setLoading(false)} style={{ display: loading ? 'none' : 'block' }} src={imageUrl} /> : <img className="movieCardImg" onLoad={() => setLoading(false)} style={{ display: loading ? 'none' : 'block' }} src={imageUrl} />}

    {!poster && <div className="movieCardTitleBackdrop" style={{ display: loading || poster ? 'none' : 'block', width: poster ? '255px' : '680px' }}>
       <h3>{originalTitle}</h3>
      {releaseDate}
    </div>}

   {isHover && poster && !loading && <div className="movieCardTitlePoster" style={{ width: poster ? '255px' : '680px' }}>
       <h3>{originalTitle}</h3>
      {releaseDate}
    </div>}
    </Link>
  </div>
  )
}
export default MovieCard
