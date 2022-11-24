import './sidebar.css'
import * as React from 'react'

/**
 * Sidebar Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
        <div className="sidebarHeader">Movies</div>
    </div>
  )
}
export default Sidebar
