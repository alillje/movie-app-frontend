import './error.css'
import * as React from 'react'

/**
 * Error Component.
 * Represents an error page.
 *
 * @param {object} props - *
 * @param {object} props.message - *
 * @returns {React.ReactElement} - Error Component.
 */
const Home = ({ message }) => {
  return (
    <div className="errorContainer">
        <h1>{message}</h1>
    </div>
  )
}
export default Home
