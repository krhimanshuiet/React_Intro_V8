import {createSlice} from "@reduxjs/toolkit"

export const adoptedPetSlice = createSlice({
    name:"adoptedPetSlice",
    initialState:{
        value:null
    },
    reducers:{
        adopt:(state,action) => {
            state.value = action.payload
        },
        unadopt:(state) => {
            state.value = null
        }
    }
})

export const {adopt} = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;