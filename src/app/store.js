import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import counterReducer from './features/counter/counterSlice.js'
import { productApi } from "./service/dummyData.js"

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)