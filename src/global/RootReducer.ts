import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        players: () => "The Player's club",
    },
});






