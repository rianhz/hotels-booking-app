import { createSlice } from "@reduxjs/toolkit";
import { HotelTypes } from "../types/hotel";

type InitialTypes = {
	mode: boolean;
	booked: HotelTypes[];
};

const initialState: InitialTypes = {
	mode: false,
	booked: [],
};

const hotelSlice = createSlice({
	name: "hotels",
	initialState,
	reducers: {
		bookHotel: (state, action) => {
			state.booked.push(action.payload);
		},
		switchMode: (state) => {
			state.mode = !state.mode;
		},
	},
});

export const { bookHotel, switchMode } = hotelSlice.actions;

export default hotelSlice.reducer;
