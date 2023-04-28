import getApiByIdReducer from './../features/getApiByIdSlice';
import {configureStore} from "@reduxjs/toolkit";
import collapseReducer from '../features/sidebarCollapaseSlice'
import postApiReducer from '../features/postApiSlice'
import getApiReducer from "../features/getApiSlice";
import putApiReducer from "../features/putApiSlice";
import deleteApiReducer from "../features/deleteApiSlice";
import apiReducer from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        collapse: collapseReducer,
        postApi: postApiReducer,
        getApi: getApiReducer,
        putApi: putApiReducer,
        deleteApi: deleteApiReducer,
        getApiById: getApiByIdReducer,
        deleteApiReducer,
        callApi: apiReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
