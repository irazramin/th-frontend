import Cookies from 'js-cookie';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import {HttpHethod} from "../constants";
import {toast} from "react-hot-toast";

export const callApi = createAsyncThunk(
    "CallApi/callApi",
    async ({url, method = HttpHethod.GET, params = {}, body = {}, headers = {}}: any) => {
        params = cleanObject(params);

        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers
        };

        let config = {
            method: method,
            baseURL: url,
            params: Object.keys(params).length ? params : undefined,
            headers: headers,
            data: Object.keys(body).length ? body : undefined,
            withCredentials: true,
            xsrfCookieName: 'access_token'
        }

        const res = await axios.request(config);

        return res.data;
    });

const cleanObject = (obj: any) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null && value !== "")
    );
}

const initialState: any = {
    isLoading: false,
    apiResponse: null,
    error: null
}

const apiSlice = createSlice({
    initialState: initialState,
    name: "ApiData",
    extraReducers: (builder) => {
        builder.addCase(callApi.pending, ((state, action: any) => {
            state.isLoading = true;
        }));
        builder.addCase(callApi.fulfilled, ((state, action: any) => {
            state.isLoading = false;
            const storeName = action?.meta?.arg?.storeName ?? "apiResponse";
            state[storeName] = action.payload;
            state.error = "";

            let showToast = action?.meta?.arg?.showToast ?? false;
            if (showToast) {
                toast(action.payload.message, { icon: "✅" });
            }
        }));
        builder.addCase(callApi.rejected, (state, action: any) => {
            state.isLoading = false;
            const storeName = action?.meta?.arg?.storeName ?? "apiResponse";
            state[storeName] = action?.meta?.arg?.defaultValue ?? null;
            state.error = action.error.message;
            toast(action.error.message, { icon: "X" });

            if (action.error.message.includes("401")) {
                Cookies.remove("access_token");
                Cookies.remove("auth_user");

                window.location.href = "/login";
            }
        });
    },
    reducers: {}
});

export default apiSlice.reducer;
