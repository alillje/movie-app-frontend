import './trending.css'
import * as React from 'react'
import { useEffect } from 'react'
import { getTitles } from '../../services/fetch-service.js'

/**
 * Trending Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Trending Component.
 */
const Trending = () => {
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
      await getTitles()
    }
    getTrending()
  }, [])

  return (
    <div className="trendingContainer"></div>
  )
}
export default Trending
