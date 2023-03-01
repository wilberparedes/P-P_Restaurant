import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SaveTokenActionType } from './action.payload'
import { initialState } from './initial.state'

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<SaveTokenActionType>) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = null
    },
  },
})

export const { saveToken, removeToken } = tokenSlice.actions

export default tokenSlice.reducer
