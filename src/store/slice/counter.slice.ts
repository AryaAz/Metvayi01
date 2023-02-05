import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "counter",
    initialState: {
        count: 11,
        title: ""
    },
    reducers: {
        inc(state) {
            state.count++;
        },
        dec(state) {
            state.count--;
        },
        set(state, action: PayloadAction<number>) {
            state.count = action.payload
        }
    }
})

export default slice;

export const {inc, dec,set} = slice.actions
// export const inc = slice.actions.inc
// export const dec = slice.actions.dec
