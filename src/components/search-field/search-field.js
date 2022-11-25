import './search-field.css'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setSearch, setCurrentPage } from '../../redux/reducers/search'

/**
 * SearchField Component.
 *
 * @returns {React.ReactElement} - SearchField Component.
 */
const SearchField = () => {
  const [currentSearch, setCurrentSearch] = useState('')
  const dispatch = useDispatch()

  /**
   *
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
    dispatch(
      setCurrentPage({
        currentPage: 1
      })
    )
  }

  /**
   *
   *
   * @returns {*}
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
