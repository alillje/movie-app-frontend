import './discover.css'
import * as React from 'react'
import DiscoverResults from '../../components/discover-results/discover-results.js'
import { useEffect } from 'react'

/**
 * Discover Component.
 * Represents the /discover page.
 *
 * @returns {React.ReactElement} - Discover Component.
 */
const Discover = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="discoverContainer">
        <DiscoverResults title="Discover" />
    </div>
  )
}
export default Discover
