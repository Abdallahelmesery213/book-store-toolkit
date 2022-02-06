import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer: {
        books: bookSlice,
        auth: authSlice,
    },
})