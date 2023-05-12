import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "../features/hotelSlice";

export const store = configureStore({
	reducer: { booked: hotelSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
