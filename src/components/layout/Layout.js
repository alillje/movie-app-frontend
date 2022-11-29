import './layout.css'
import * as React from 'react'
// import { useEffect } from 'react'
import Sidebar from '../sidebar/sidebar.js'
import Topbar from '../topbar/topbar.js'
import MobileSidebar from '../mobile-sidebar/mobile-sidebar.js'

/**
 * Layout Component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ children }) => {
  return (
     <div className="layoutContainer">
                <MobileSidebar className="layoutMobileNav" />

                <div className="layoutTop">
                <Topbar />
                </div>
                <div className="layoutLeft">
                <Sidebar />
                </div>
                <div className="layoutMain" >
                {children}
                </div>
    </div>
  )
}

export default Layout
