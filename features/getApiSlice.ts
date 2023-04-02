import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchApi} from "./postApiSlice";

export const getFetchApi = createAsyncThunk("GetApi/getFetchApi", async (thunkAPI) => {
    const res = await axios.get(`http://localhost:8091/api/v1/company`);
    return res.data;
});

const initialState: any = {
    isLoading: false,
    apiResponse: [],
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
            state.isLoading= false;
            state.apiResponse = action.payload;
            state.error = '';
        }));
        builder.addCase(getFetchApi.rejected, (state, action) => {
            state.isLoading= false;
            state.apiResponse = [];
            state.error = action.error.message;
        });
    },
    reducers: {}

});

export  default  getApiSlice.reducer;
