import './main.css'
import * as React from 'react'
import Trending from '../trending/trending.js'

/**
 * Main Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Main Component.
 */
const Main = () => {
  return (
    <div className="mainContainer">
        <Trending />
    </div>
  )
}
export default Main
