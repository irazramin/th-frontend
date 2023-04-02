import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("PostApi/fetchApi", async ({url, payload}: any) => {
    const res = await axios.post(url, payload);
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
        builder.addCase(fetchApi.pending, ((state, action) => {
            state.isLoading = true;
        }));
        builder.addCase(fetchApi.fulfilled, ((state, action) => {
            state.isLoading= false;
            state.apiResponse = action.payload;
            state.error = '';
        }));
        builder.addCase(fetchApi.rejected, (state, action) => {
            state.isLoading= false;
            state.apiResponse = [];
            state.error = action.error.message;
        });
    },
    reducers: {

    }
});

export default  postApiSlice.reducer;
