/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './reducers/search'
import mobileNavReducer from './reducers/mobile-nav'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    search: searchReducer,
    mobileNav: mobileNavReducer
  }
})

export default store
