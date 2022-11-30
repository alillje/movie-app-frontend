import './topbar.css'
import * as React from 'react'
import SearchField from '../search-field/search-field.js'
import MenuIcon from './img/MenuIcon.svg'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../../redux/reducers/mobile-nav'

/**
 * Topbar Component.
 *
 * @returns {React.ReactElement} - Topbar Component.
 */
const Topbar = () => {
  const dispatch = useDispatch()

  /**
   * Handles the click of the menu icon by showing the mobile sidebar.
   */
  const handleClick = () => {
    dispatch(
      toggleSideBar({
        show: true
      })
    )
  }
  return (
    <div className="topbarContainer">
      <img src={MenuIcon} onClick={handleClick}></img>
      <SearchField className="topbarSearch" />
    </div>
  )
}

export default Topbar
