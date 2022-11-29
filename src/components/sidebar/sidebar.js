import './sidebar.css'
import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/reducers/search'
import InactiveHomeIcon from './img/InactiveHomeIcon.svg'
import InactiveDiscoverIcon from './img/InactiveDiscoverIcon.svg'
import ActiveHomeIcon from './img/ActiveHomeIcon.svg'
import ActiveDiscoverIcon from './img/ActiveDiscoverIcon.svg'

/**
 * Sidebar Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  /**
   *
   *
   */
  const clearSearchPhrase = () => {
    dispatch(
      setSearch({
        isSearching: false,
        searchPhrase: null
      })
    )
  }

  /**
   * Clears the search phrase from Redux and navigates to path.
   *
   * @param {object} event - An event object.
   */
  const goTo = (event) => {
    console.log(event.target)
    // setButtonActive(event.target.id || undefined)
    clearSearchPhrase()
    navigate(event.target.dataset.value)
  }

  return (
    <div className="sidebarContainer">
        <div data-value="/" className="sidebarHeader" onClick={(event) => goTo(event)}>Movies</div>
        <div className="sidebarButtons">
        <div data-value="/" id ="/" className="sideBarButton" onClick={(event) => goTo(event)} style={{ color: location.pathname === '/' ? '#ffffff' : '#838383' }}><img src={location.pathname === '/' ? ActiveHomeIcon : InactiveHomeIcon}></img><div>Home</div></div>
        <div data-value="/discover" id="/discover" className="sideBarButton" style={{ color: location.pathname === '/discover' ? '#ffffff' : '#838383' }} onClick={(event) => goTo(event)}><img src={location.pathname === '/discover' ? ActiveDiscoverIcon : InactiveDiscoverIcon}></img><div>Discover</div></div>
        </div>
    </div>
  )
}
export default Sidebar
