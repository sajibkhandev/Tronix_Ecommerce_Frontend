import { configureStore } from '@reduxjs/toolkit'
import breadcrumb from './slices/breadcrumb'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    breadcrumbs:breadcrumb,
    cart:cartSlice
  },
})