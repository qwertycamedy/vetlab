import { configureStore } from '@reduxjs/toolkit'

import window from './slices/window/windowSlice'
import header from './slices/header/headerSlice'
import booking from './slices/booking/bookingSlice'
import result from './slices/result/resultSlice'

import about from './slices/about/aboutSlice'
import faq from './slices/faq/faqSlice'
import meta from './slices/meta/metaSlice'
import news from './slices/news/newsSlice'
import clients from './slices/clients/clientsSlice'
import services from './slices/services/servicesSlice'
import team from './slices/team/teamSlice'
import reviews from './slices/reviews/reviewsSlice'


export const store = configureStore({
  reducer: {
    window,
    header,
    booking,
    result,
    about,
    faq,
    meta,
    news,
    clients,
    services,
    team,
    reviews,
  },
})
