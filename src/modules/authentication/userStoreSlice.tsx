import { createSlice } from '@reduxjs/toolkit'

export const userStoreSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    set: (state, action) => Object.assign(state || {}, action.payload),
  },
})

export const { set } = userStoreSlice.actions

// @ts-ignore;
export const getUser = (state) => state.user;

export default userStoreSlice.reducer
