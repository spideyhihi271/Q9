import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            user: null,
        },
    },
    reducers: {
        loginClear: (state) => {
            state.login.user = undefined;
        },
        loginSuccess: (state, action) => {
            state.login.user = action.payload;
        },
    },
});

export const { loginSuccess, loginClear } = authSlice.actions;

export default authSlice.reducer;
