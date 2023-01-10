import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDays = createAsyncThunk("planner/getAll", async (userData, thunkAPI) => {
    try {
        const res = await axios.get("api/v1/planner/getDays");

        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue({
            status: error.response.status,
            data: error.response.data,
        })
    }
})