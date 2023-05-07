import {configureStore} from "@reduxjs/toolkit";
import collapseReducer from '../slices/sidebarCollapaseSlice'
import apiReducer from "../slices/apiSlice";

export const store = configureStore({
    reducer: {
        collapse: collapseReducer,
        callApi: apiReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
