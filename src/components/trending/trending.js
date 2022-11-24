import './trending.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getTitles } from '../../services/fetch-service.js'

/**
 * Trending Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Trending Component.
 */
const Trending = () => {
  const [recievedTrending, setRecievedTrending] = useState(false)
  const [trendingTitles, setTrendingTitles] = useState([])
  /**
   *
   *
   * @returns {*}
   */
  useEffect(() => {
    /**
     *
     */
    const getTrending = async () => {
      const titles = await getTitles('3/movie/popular')
      setTrendingTitles(titles.results)
      setRecievedTrending(true)
      console.log(titles.results)
    }
    getTrending()
  }, [recievedTrending])

  return (
    <div className="trendingContainer">
        {trendingTitles.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.backdrop_path}`
          console.log(imageUrl)
          return (
                <div key={1} className="trendingTitles">
                    <img src={imageUrl}></img>
                </div>
          )
        })}
    </div>
  )
}
export default Trending
