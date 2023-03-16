import { configureStore } from "@reduxjs/toolkit";
import  nasaReducer  from '../nasa/nasaSlice';

export default configureStore({
    reducer: {
        nasa: nasaReducer
    },
})