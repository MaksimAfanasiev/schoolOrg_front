import { createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogin } from "../operations/userOperations";

const initialState = {
    user: {},
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        builder.addCase(userRegister.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        })
        builder.addCase(userLogin.rejected, (state) => {
            state.isLoading = false;
        })
    }


})

export const userReducer = userSlice.reducer;