import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        children: 0,
        sideParams: null,
    },
    reducers: {
        modelSetOpen: (state, action) => {
            state.open = action.payload;
        },
        modelSetChildren: (state, action) => {
            state.children = action.payload;
        },
        modelSetParams: (state, action) => {
            state.sideParams = action.payload;
        },
    },
});

export const { modelSetOpen, modelSetChildren, modelSetParams } =
    modalSlice.actions;

export default modalSlice.reducer;
