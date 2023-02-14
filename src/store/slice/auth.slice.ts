import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginResponse, RegisterResponse} from "../../model/auth.model";

type StateType = {
    isAuthenticated: boolean,
    accessToken: string | undefined
    refreshToken: string | undefined
}

const slice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        accessToken: undefined,
        refreshToken: undefined,
    } as StateType,
    reducers: {
        login: (state, action: PayloadAction<LoginResponse>) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.refreshToken = undefined
            state.accessToken = undefined
        }
    }
})


export default slice;

export const {login, logout} = slice.actions
