import { createSlice, current } from '@reduxjs/toolkit'

export const breadcrumb = createSlice({
  name: 'breadcrumb',
  initialState: {
    current: "",
    previous:""
  },
  reducers: {
    page: (state,action) => {
        state.previous=state.current
        state.current=action.payload
        
     
    }
  },
})


export const { page } = breadcrumb.actions

export default breadcrumb.reducer