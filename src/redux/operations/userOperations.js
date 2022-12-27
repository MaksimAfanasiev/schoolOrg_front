import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050";

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("api/v1/user/register", userData);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        data: error.response.data,
      });
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("api/v1/user/login", userData);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        data: error.response.data,
      });
    }
  }
);

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("api/v1/user/logout");
      return response.status;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        data: error.response.data,
      });
    }
  }
);
