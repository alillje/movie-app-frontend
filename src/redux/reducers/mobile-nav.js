/**
 * Redux customer module.
 * Create a customer slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const mobileNavSlice = createSlice({
  name: 'mobilenav',
  initialState: {
    show: false
  },
  reducers: {
    /**
     * Sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    toggleSideBar: (state, action) => {
      state.show = action.payload.show
    }
  }
})

export const { toggleSideBar } = mobileNavSlice.actions
export default mobileNavSlice.reducer
