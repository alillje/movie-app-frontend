import './sidebar.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const dispatch = useDispatch()
  const [homeActive, setHomeActive] = useState(false)
  const [discoverActive, setDiscoverActive] = useState(false)

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
    event.stopPropagation()
    console.log(event.target)
    setButtonActive(event.target.id || undefined)
    clearSearchPhrase()
    navigate(event.target.dataset.value)
  }

  /**
   *
   * @param {*} buttonId
   */
  const setButtonActive = (buttonId) => {
    console.log(buttonId)
    setHomeActive(false)
    setDiscoverActive(false)
    const allButtons = document.querySelectorAll('.sideBarButton')
    for (const button of allButtons) {
      button.style.color = '#838383'
    }
    if (buttonId) {
      document.getElementById(buttonId).style.color = '#ffffff'
      buttonId = '/' && setHomeActive(true)
      buttonId = '/discover' && setHomeActive(true)
    }
  }

  useEffect(() => {

  }, [homeActive, discoverActive])

  return (
    <div className="sidebarContainer">
        <div data-value="/" className="sidebarHeader" onClick={(event) => goTo(event)}>Movies</div>
        <div className="sidebarButtons">
        <div data-value="/" id ="/" className="sideBarButton" onClick={(event) => goTo(event)}><img src={homeActive ? ActiveHomeIcon : InactiveHomeIcon}></img><div>Home</div></div>
        <div data-value="/discover" id="/discover" className="sideBarButton" onClick={(event) => goTo(event)}><img src={discoverActive ? ActiveDiscoverIcon : InactiveDiscoverIcon}></img><div>Discover</div></div>
        </div>
    </div>
  )
}
export default Sidebar
