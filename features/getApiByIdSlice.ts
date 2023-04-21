import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchApi} from "./postApiSlice";

export const getByIdFetchApi = createAsyncThunk("GetByIdApi/getByIdFetchApi", async ({url,payload}:any) => {
    const res = await axios.get(`${url}${payload}`);    
    return res.data;
});

const initialState: any = {
    isLoading: false,
    apiResponse: {},
    error: null,
}

const getApiSlice = createSlice({
    initialState: initialState,
    name: "GetByIdData",
    extraReducers: (builder) => {
        builder.addCase(getByIdFetchApi.pending, ((state, action) => {
            state.isLoading = true;
        }));
        builder.addCase(getByIdFetchApi.fulfilled, ((state, action) => {
            state.isLoading= false;
            state.apiResponse = action.payload;
            state.error = '';
        }));
        builder.addCase(getByIdFetchApi.rejected, (state, action) => {
            state.isLoading= false;
            state.apiResponse = [];
            state.error = action.error.message;
        });
    },
    reducers: { }

});

export  default  getApiSlice.reducer;