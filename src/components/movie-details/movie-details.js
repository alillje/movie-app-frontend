import './movie-details.css'
import * as React from 'react'
import { getMovieTrailer } from '../../services/fetch-service'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

/**
 * MovieBrowser Component.
 *
 * @param {object} props - *
 * @param {object} props.movieData - *
 * @returns {React.ReactElement} - MovieBrowser Component.
 */
const MovieDetails = ({ movieData }) => {
  const params = useParams()
  const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${movieData.poster_path}`
  const [videoUrl, setVideoUrl] = useState('')

  /**
   * Gets the videoUrl for the trailer.
   */
  const getVideoUrl = async () => {
    const videoPath = await getMovieTrailer(params.id)
    setVideoUrl(videoPath)
  }

  /**
   * React useEffect Hook
   *
   */
  useEffect(() => {
    getVideoUrl()
  }, [])
  return (
    <div className="movieDetailsContainer">
      <div className="movieDetailsImageWrapper">
      <img src={imageUrl}></img>
      </div>
      <div className="movieDetailsOverviewContainer">
      <h1>{movieData.original_title}</h1>
      <h3>{movieData.tagline}</h3>
        {movieData.overview}
        <div className="movieDetailsInfoContainer">
          <ul>
        <li><b>Release Date: </b>{movieData.release_date}</li>
        <li><b>Rating: </b>{movieData.vote_average}</li>
        <li><b>Votes: </b>{movieData.vote_count}</li>
</ul>
      </div>
        </div>
      <div className="movieDetailsTrailerContainer">
        {videoUrl && <iframe id="player" type="text/html" width="800px" height="500" display="block"
  src={`https://www.youtube.com/embed/${videoUrl}?enablejsapi=1`}></iframe>}
      </div>
    </div>
  )
}
export default MovieDetails
