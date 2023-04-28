import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const putApi = createAsyncThunk("PutApi/putApi", async ({url, payload}: any) => {
    const res = await axios.put(url, payload);
    return res.data;
});


const initialState: any = {
    putIsLoading: false,
    putApiResponse:  [],
    putAPiError: null,
}

 const putApiSlice = createSlice({
    name: 'UpdateData',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(putApi.pending, ((state, action: any) => {
            state.putIsLoading = true;
        }));
        builder.addCase(putApi.fulfilled, ((state, action: any) => {
            state.putIsLoading= false;
            state.putApiResponse = action.payload;
            state.putAPiError = '';
        }));
        builder.addCase(putApi.rejected, (state, action: any) => {
            state.putIsLoading= false;
            state.putApiResponse = [];
            state.putAPiError = action.putAPiError.message;
        });
    },
    reducers: {

    }
});

export default  putApiSlice.reducer;
