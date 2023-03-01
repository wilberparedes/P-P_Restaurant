import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SaveTokenActionType } from './action.payload'
import { initialState } from './initial.state'

export const tokenSlice = createSlice({
  name: 'tokenStore',
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
export const selectTokenStore = (state: RootState) => state.tokenStore.token

export default tokenSlice.reducer
