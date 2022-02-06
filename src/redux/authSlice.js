import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'auth',
    initialState:{
        isLoggedIn: false,
        name: 'Abdullah Elmesery'
    },
    reducers:{
        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
});
export const {logInOut} = authSlice.actions;

export default authSlice.reducer;