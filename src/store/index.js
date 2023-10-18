import { configureStore } from '@reduxjs/toolkit'
import newsApi from './api'

const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

export default store
