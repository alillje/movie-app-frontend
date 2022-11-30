/**
 * Redux search module.
 * Create a search slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isSearching: false,
    searchPhrase: null,
    currentPage: 1
  },
  reducers: {
    /**
     * Sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setSearch: (state, action) => {
      state.isSearching = action.payload.isSearching
      state.searchPhrase = action.payload.searchPhrase
    },
    /**
     * Sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage
    },
    /**
     * Clears all state variables to values and sets the to initialState.
     *
     * @param {object} state - Redux state object.
     */
    clearSearch: (state) => {
      state.isSearching = false
      state.searchPhrase = null
      state.currentPage = 1
    }
  }
})

export const { setSearch, clearSearch, setCurrentPage } = searchSlice.actions
export default searchSlice.reducer
