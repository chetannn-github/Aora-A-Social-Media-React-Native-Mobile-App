// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'loggedInUser',
    initialState: null,
    reducers: {
        addLoggedInUser: (state, action) => {
            return action.payload;
        },
        removeLoggedInUser: (state) => {
            return null;
        },
    },
});

export const {addLoggedInUser,removeLoggedInUser } = authSlice.actions;
export default authSlice.reducer;