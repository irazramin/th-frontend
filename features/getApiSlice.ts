import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

export const getFetchApi = createAsyncThunk("GetApi/getFetchApi", async ({url, params = []}:any) => {
    params = cleanObject(params);
    let queryString = new URLSearchParams(params).toString();
    const res = await axios.get(queryString.length ? `${url}?${queryString}` : url);
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
    error: null,
}

const getApiSlice = createSlice({
    initialState: initialState,
    name: "GetData",
    extraReducers: (builder) => {
        builder.addCase(getFetchApi.pending, ((state, action) => {
            state.isLoading = true;
        }));
        builder.addCase(getFetchApi.fulfilled, ((state, action) => {
            state.isLoading = false;
            const storeName = action?.meta?.arg?.storeName ?? 'apiResponse';
            state[storeName] = action.payload;
            state.error = '';
        }));
        builder.addCase(getFetchApi.rejected, (state, action) => {
            state.isLoading = false;
            const storeName = action?.meta?.arg?.storeName ?? 'apiResponse';
            state[storeName] = action?.meta?.arg?.defaultValue ?? null;
            state.error = action.error.message;
        });
    },
    reducers: {}

});

export  default  getApiSlice.reducer;
