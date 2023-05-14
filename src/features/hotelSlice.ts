import { createSlice } from "@reduxjs/toolkit";
import { HotelTypes } from "../types/hotel";

type InitialTypes = {
	mode: boolean;
	booked: HotelTypes;
};

const initialState: InitialTypes = {
	mode: false,
	booked: {
		bedroom_preview: [],
		hotel_image: "",
		hotel_name: "",
		id: 0,
		price: 0,
		rating: 0,
		desc: "",
		times: 0,
		total: 0,
	},
};

const hotelSlice = createSlice({
	name: "hotels",
	initialState,
	reducers: {
		bookHotel: (state, action) => {
			const total = { ...action.payload, total: action.payload.price };
			const times = { times: 1 };
			const temporaryData = { ...total, ...times };

			state.booked = { ...state.booked, ...temporaryData };
		},
		increaseTime: (state) => {
			state.booked.times = state.booked.times += 1;
			state.booked.total = state.booked.price * state.booked.times;
		},
		decreaseTime: (state) => {
			state.booked.times =
				state.booked.times === 1
					? state.booked.times
					: (state.booked.times -= 1);
			state.booked.total = state.booked.price * state.booked.times;
		},
		switchMode: (state) => {
			state.mode = !state.mode;
		},
	},
});

export const { bookHotel, switchMode, increaseTime, decreaseTime } =
	hotelSlice.actions;

export default hotelSlice.reducer;
