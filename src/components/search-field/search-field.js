import './search-field.css'
import * as React from 'react'

/**
 * SearchField Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - SearchField Component.
 */
const SearchField = () => {
  return (
    <input type="text" placeholder="Search Movie Titles" className="searchfieldInput">
    </input>
  )
}
export default SearchField
