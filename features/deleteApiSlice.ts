import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchApi} from "./postApiSlice";

export const deleteFetchApi = createAsyncThunk("PostApi/fetchApi", async (id,thunkAPI) => {
    const res = await axios.delete(`http://localhost:3033/api/v1/company/${id}/delete`);
    return res.data;
});

const initialState: any = {
    deleteIsLoading: false,
    deleteApiResponse: [],
    deleteError: null,
}

const deleteApiSlice = createSlice({
    initialState: initialState,
    name: "GetData",
    extraReducers: (builder) => {
        builder.addCase(deleteFetchApi.pending, ((state, action) => {
            state.deleteIsLoading = true;
        }));
        builder.addCase(deleteFetchApi.fulfilled, ((state, action) => {
            state.deleteIsLoading= false;
            state.deleteApiResponse = action.payload;
            state.deleteError = '';
        }));
        builder.addCase(deleteFetchApi.rejected, (state, action) => {
            state.deleteIsLoading= false;
            state.deleteApiResponse = [];
            state.deleteError = action.error.message;
        });
    },
    reducers: {}

});

export  default  deleteApiSlice.reducer;
