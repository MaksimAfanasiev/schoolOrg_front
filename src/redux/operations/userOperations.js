import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050";

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("api/v1/user/register", userData);
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

      return response.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        data: error.response.data,
      });
    }
  }
);
