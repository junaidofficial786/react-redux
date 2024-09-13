// this is a redux file which contains createSlice hook which further contains name,initial state and reducers
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    countValue: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        handleIncreaseCountAction: (state, action) => {
            state.countValue += 1
        }
    }
})

export const {handleIncreaseCountAction} = counterSlice.actions;
export default counterSlice.reducer;