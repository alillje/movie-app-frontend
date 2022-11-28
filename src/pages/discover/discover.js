import './discover.css'
import * as React from 'react'
import DiscoverResults from '../../components/discover-results/discover-results.js'
/**
 * Discover Component.
 *
 * @returns {React.ReactElement} - Discover Component.
 */
const Discover = () => {
  return (
    <div className="discoverContainer">
        <DiscoverResults title="Discover" />
    </div>
  )
}
export default Discover
