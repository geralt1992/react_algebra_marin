import { createSlice } from "@reduxjs/toolkit";

export const nasaSlice = createSlice({
    name: 'nasa',
    initialState: {
        data: null
    },
    reducers: {
        setData: (state, action) => { //action ima payload to je ono sto user mrda, došlo od usera
            state.data = action.payload;
        }

    }
    
})

export default nasaSlice.reducer;
export const { setData } = nasaSlice.actions;