import {configureStore} from "@reduxjs/toolkit";
import   collapseReducer from '../features/sidebarCollapaseSlice'
import {createWrapper} from "next-redux-wrapper";

export const store = () =>
    configureStore({
        reducer: collapseReducer
    });


export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store);


