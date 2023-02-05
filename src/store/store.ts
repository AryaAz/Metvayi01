import {configureStore} from "@reduxjs/toolkit";
import counterSlice from './slice/counter.slice'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer
    }
})

export default store



export type StoreType = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
