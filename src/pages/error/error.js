import './error.css'
import * as React from 'react'

/**
 * Main Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Main Component.
 */
const Home = ({ message }) => {
  return (
    <div className="errorContainer">
        <h1>{message}</h1>
    </div>
  )
}
export default Home
