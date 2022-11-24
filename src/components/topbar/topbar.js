import './topbar.css'
import * as React from 'react'
import SearchField from '../search-field/search-field.js'

/**
 * Topbar Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Topbar Component.
 */
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <SearchField />
    </div>
  )
}

export default Topbar
