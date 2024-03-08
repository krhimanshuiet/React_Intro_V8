/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import adoptedPet from "./feature/adoptedPetSlice"
import searchParamsSlice from "./feature/searchParamsSlice"
import { petApi } from "./feature/petApiService"
const store = configureStore({
    reducer:{
        adoptedPet,
        searchParamsSlice,
        [petApi.reducerPath]:petApi.reducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(petApi.middleware),
})

export default store;