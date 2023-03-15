import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter', //ime slicea po kojem ga id aom
    initialState: {
        value: 0
    }, //inState ovisi o appu, nama je inState je 0 jer app je counter
    reducers: {
        //on prima reducer funkcije - one utječu na initStae i ovise o tome o čemu ti je app

        incrament: (state) => { //ovo je trenutni state
            state.value += 1; //USING IMMMER LIB IN BACKGROUND, zato mozes direktno prtljat po stateu 
        },    

        decrement: (state) => {
            state.value -= 1;
        },  

        reset: (state) => {
            state.value = 0;
        } 

    }
})
export const { decrement , incrament, reset} = counterSlice.actions;

export default counterSlice.reducer;