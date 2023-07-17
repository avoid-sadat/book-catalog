import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/user/userSlice'
import { api } from './feature/product/apiSlice'
import filterReducer from './feature/filter/filterSlice'
import { booksApi } from './feature/filter/booksApi'

const store = configureStore({
  reducer: {
    filter:filterReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware,booksApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store