import { configureStore } from "@reduxjs/toolkit";
import loggedInUserReducer from "./userSlice.js"


export const appStore = configureStore({
    reducer: {
        loggedInUser: loggedInUserReducer,
    },
});

