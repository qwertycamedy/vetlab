import { configureStore } from '@reduxjs/toolkit'

import window from './slices/window/windowSlice'
import header from './slices/header/headerSlice'
import booking from './slices/booking/bookingSlice'
import result from './slices/result/resultSlice'


export const store = configureStore({
  reducer: {
    window,
    header,
    booking,
    result
  },
})
