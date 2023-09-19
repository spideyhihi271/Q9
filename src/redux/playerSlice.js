import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        isPlaying: true,
        song: null,
        playlist: [],
        volume: 100,
        autoNext: false,
    },
    reducers: {
        playerClear: (state) => {
            isPlaying: false;
            song: null;
        },
        playerClearForce: (state) => {
            isPlaying: true;
            song: null;
            playlist: [];
            autoNext: false;
        },
        playerSetSong: (state, action) => {
            state.song = action.payload;
        },
        playerSetPlaylist: (state, action) => {
            state.playlist = action.payload;
        },
        playerSetPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        playerSetVolume: (state, action) => {
            state.volume = action.payload;
        },
        playerSetAutoNext: (state, action) => {
            state.autoNext = action.payload;
        },
    },
});

export const {
    playerClear,
    playerClearForce,
    playerSetSong,
    playerSetPlaylist,
    playerSetPlaying,
    playerSetAutoNext,
    playerSetVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
