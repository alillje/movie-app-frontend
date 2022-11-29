import './sidebar.css'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/reducers/search'

/**
 * Sidebar Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // TODO: Set to isSearching = false when clicking a link

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
    setButtonActive(event.target.id || undefined)
    clearSearchPhrase()
    navigate(event.target.dataset.value)
  }

  /**
   *
   * @param {*} buttonId
   */
  const setButtonActive = (buttonId) => {
    const allButtons = document.querySelectorAll('.sideBarButton')
    for (const button of allButtons) {
      button.style.color = '#838383'
    }
    if (buttonId) {
      document.getElementById(buttonId).style.color = '#ffffff'
    }
  }

  return (
    <div className="sidebarContainer">
        <div data-value="/" className="sidebarHeader" onClick={(event) => goTo(event)}>Movies</div>
        <div className="sidebarButtons">
        <div data-value="/" id ="/" className="sideBarButton" onClick={(event) => goTo(event)}>Home</div>
        <div data-value="/discover" id="/discover" className="sideBarButton" onClick={(event) => goTo(event)}>Discover</div>
        </div>
    </div>
  )
}
export default Sidebar
