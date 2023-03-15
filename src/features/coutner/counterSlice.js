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
        },

        //ZA DODAVANJE VRIJEDNOSTI OD KORISNIKA NPR, TAJ PAYLOAD
        incramentByAmount: (state, action) => {
            state.value += action.payload;
        }


    }
})
export const { decrement , incrament, reset, incramentByAmount} = counterSlice.actions;

export default counterSlice.reducer;