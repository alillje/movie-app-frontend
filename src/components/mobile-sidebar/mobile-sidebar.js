import './mobile-sidebar.css'
import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from '../../redux/reducers/mobile-nav'
import InactiveHomeIcon from './img/InactiveHomeIcon.svg'
import InactiveDiscoverIcon from './img/InactiveDiscoverIcon.svg'
import ActiveHomeIcon from './img/ActiveHomeIcon.svg'
import ActiveDiscoverIcon from './img/ActiveDiscoverIcon.svg'

/**
 * MobileSidebar Component.
 *
 * @returns {React.ReactElement} - MobileSidebar Component.
 */
const MobileSidebar = () => {
  const dispatch = useDispatch()
  const showSideBar = useSelector((state) => state.mobileNav.show)
  const navigate = useNavigate()
  const location = useLocation()

  /**
   *
   */
  const closeSidebar = () => {
    dispatch(
      toggleSideBar({
        show: false
      })
    )
  }

  /**
   * Clears the search phrase from Redux and navigates to path.
   *
   * @param {object} event - An event object.
   */
  const goTo = (event) => {
    closeSidebar()
    navigate(event.target.dataset.value)
  }

  return (
    <div className="mobileSidebarContainer" style={{ zIndex: showSideBar ? '10000000' : '0', display: showSideBar ? 'grid' : 'none' }}>
      <div className="mobileSideBarOptions">
        <div className="mobileSidebarButtons">
        <div data-value="/" id ="/" className="mobileSideBarButton" onClick={(event) => goTo(event)} style={{ color: location.pathname === '/' ? '#ffffff' : '#838383' }}><img src={location.pathname === '/' ? ActiveHomeIcon : InactiveHomeIcon}></img><div>Home</div></div>
        <div data-value="/discover" id="/discover" className="mobileSideBarButton" style={{ color: location.pathname === '/discover' ? '#ffffff' : '#838383' }} onClick={(event) => goTo(event)}><img src={location.pathname === '/discover' ? ActiveDiscoverIcon : InactiveDiscoverIcon}></img><div>Discover</div></div>
        </div>
        </div>
        <div className="mobileSideBarTint">X</div>
    </div>
  )
}
export default MobileSidebar
