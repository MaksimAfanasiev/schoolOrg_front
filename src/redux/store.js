import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { plannerReducer } from "./slices/plannerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    planner: plannerReducer
  },
});
