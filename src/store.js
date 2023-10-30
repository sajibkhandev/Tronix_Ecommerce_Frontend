import { configureStore } from '@reduxjs/toolkit'
import breadcrumb from './slices/breadcrumb'

export default configureStore({
  reducer: {
    breadcrumbs:breadcrumb,
  },
})