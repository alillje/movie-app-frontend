import './layout.css'
import * as React from 'react'
import Sidebar from '../sidebar/sidebar.js'
import Topbar from '../topbar/topbar.js'

/**
 * Layout Component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
                        <div className="layoutTop">
                <Topbar />
                </div>
                <div className="layoutRight">
                <Sidebar />
                </div>
                <div className="layoutMain">
                {children}
                </div>

    </div>
  )
}
export default Layout
