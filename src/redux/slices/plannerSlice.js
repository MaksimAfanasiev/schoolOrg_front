import { createSlice } from "@reduxjs/toolkit";
import { getDays } from "../operations/plannerOperations";

const initialState = {
    isLoading: false,
    days: [],
    plannerError: "",
}

const plannerSlice = createSlice({
    name: "planner",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDays.pending, (state) => {
                state.isLoading = true;
                state.plannerError = "";
            })
            .addCase(getDays.fulfilled, (state, action) => {
                state.isLoading = false;
                state.days = action.payload;
                state.plannerError = "";   
            })
            .addCase(getDays.rejected, (state, action) => {
                state.isLoading = false;
                state.days = [];
                state.plannerError = action.payload;
        })

    }
});

export const plannerReducer = plannerSlice.reducer;