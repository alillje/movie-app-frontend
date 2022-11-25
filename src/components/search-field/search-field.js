import './search-field.css'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setSearch } from '../../redux/reducers/search'

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
