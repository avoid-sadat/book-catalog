import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/user/userSlice'
import { api } from './feature/product/apiSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store