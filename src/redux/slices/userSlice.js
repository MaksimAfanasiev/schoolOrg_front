import { createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogin } from "../operations/userOperations";

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorValue: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.errorValue = action.payload;
        state.token = null;
      });

    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.errorValue = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorValue = action.payload;
        state.token = null;
      });
  },
});

export const userReducer = userSlice.reducer;
