import { createSlice } from "@reduxjs/toolkit";
import { HotelTypes } from "../types/hotel";

type InitialTypes = {
	booked: HotelTypes[];
};

const initialState: InitialTypes = {
	booked: [],
};

const hotelSlice = createSlice({
	name: "hotels",
	initialState,
	reducers: {
		bookHotel: (state, action) => {
			state.booked.push(action.payload);
		},
	},
});

export const { bookHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
