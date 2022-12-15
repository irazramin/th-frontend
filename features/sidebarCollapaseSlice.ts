import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    collapse: false
}

export const collapseSlice = createSlice({
    initialState: initialValue,
    name: "sidebarCollapse",
    reducers: {
        collapseAction: (state, action) => {
            state.collapse = action.payload
        },
    }
});

export const {collapseAction} = collapseSlice.actions;

export default collapseSlice.reducer;
