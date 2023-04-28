import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const postApi = createAsyncThunk("PostApi/postApi", async ({url, payload}: any) => {
    const res = await axios.post(url, payload, {
        withCredentials: true
      });
    return res.data;
});


const initialState: any = {
    isLoading: false,
    apiResponse:  [],
    error: null,
}

 const postApiSlice = createSlice({
    name: 'PostData',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(postApi.pending, ((state, action) => {
            state.isLoading = true;
        }));
        builder.addCase(postApi.fulfilled, ((state, action) => {
            state.isLoading = false;
            state.apiResponse = action.payload;
            state.error = '';

            toast(action.payload.message, { icon: "✅" });
        }));
        builder.addCase(postApi.rejected, (state, action) => {
            state.isLoading= false;
            state.apiResponse = [];
            state.error = action.error.message;
        });
    },
    reducers: {

    }
});

export default  postApiSlice.reducer;
