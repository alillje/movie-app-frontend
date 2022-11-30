import './search-field.css'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setSearch, setCurrentPage } from '../../redux/reducers/search'

/**
 * SearchField Component.
 * Takes search input and uses redux to set search phrase.
 *
 * @returns {React.ReactElement} - SearchField Component.
 */
const SearchField = () => {
  const [currentSearch, setCurrentSearch] = useState('')
  const dispatch = useDispatch()

  /**
   * Sets the search phrase by dispatching to redux.
   */
  const setSearchPhrase = () => {
    dispatch(
      setSearch({
        isSearching: true,
        searchPhrase: currentSearch
      })
    )
    dispatch(
      setCurrentPage({
        currentPage: 1
      })
    )
  }

  /**
   * Clears the search phrase by dispatching to redux.
   */
  const clearSearchPhrase = () => {
    dispatch(
      setSearch({
        isSearching: false,
        searchPhrase: null
      })
    )
    dispatch(
      setCurrentPage({
        currentPage: 1
      })
    )
  }

  /**
   * React useEffect hook.
   */
  useEffect(() => {
    currentSearch.length ? setSearchPhrase() : clearSearchPhrase({})
  }, [currentSearch])
  return (
    <input value={currentSearch} onChange={(event) => setCurrentSearch(event.target.value)} type="text" placeholder="Search Movie Titles" className="searchfieldInput">
    </input>
  )
}
export default SearchField
