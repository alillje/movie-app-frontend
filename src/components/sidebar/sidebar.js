import './sidebar.css'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Sidebar Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Sidebar = () => {
  const navigate = useNavigate()
  // TODO: Set to isSearching = false when clicking a link
  return (
    <div className="sidebarContainer">
        <div className="sidebarHeader">Movies</div>
        <div className="sideBarButton" onClick={() => navigate('/')}>Home</div>
        <div className="sideBarButton" onClick={() => navigate('/discover')}>Discover</div>

    </div>
  )
}
export default Sidebar
