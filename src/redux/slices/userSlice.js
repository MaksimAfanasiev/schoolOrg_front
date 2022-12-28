import { createSlice } from "@reduxjs/toolkit";
import {
  userRegister,
  userLogin,
  userLogout,
} from "../operations/userOperations";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  errorValue: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = {
          firstName: action.payload.firstName,
          secondName: action.payload.secondName,
          group: action.payload.group,
        };

        state.isLoggedIn = true;
        state.isLoading = false;
        state.errorValue = null;
        state.token = action.payload.token;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.errorValue = action.payload;
        state.token = null;
        state.isLoggedIn = false;
      });

    builder
      .addCase(userLogin.pending, (state) => {
        state.user = null;
        state.isLoading = true;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = {
          firstName: action.payload.firstName,
          secondName: action.payload.secondName,
          group: action.payload.group,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.errorValue = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.errorValue = action.payload;
        state.token = null;
      });

    builder
      .addCase(userLogout.pending, (state) => {
        state.isLoading = true;
        state.errorValue = null;
        state.token = null;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        if (action.payload === 200) {
          state.user = null;
          state.isLoading = false;
          state.errorValue = null;
          state.token = null;
          state.isLoggedIn = false;
        }
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.errorValue = action.payload;
        state.token = null;
      });
  },
});

export const userReducer = userSlice.reducer;
