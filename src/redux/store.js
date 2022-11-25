/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './reducers/search'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    search: searchReducer
  }
})

export default store
