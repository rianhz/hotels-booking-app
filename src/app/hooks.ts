import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { HotelTypes } from "../types/hotel";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getDataById = (e: string | undefined, data: HotelTypes[]) => {
	const hotel = data.filter((el) => el.hotel_name === e);
	return hotel;
};

export const filteringData = (
	value: string,
	stars: number,
	data: HotelTypes[]
) => {
	if (value === "low" && stars === 0) {
		const lowData = data.filter((el) => el.price <= 2000000);
		return lowData;
	} else if (value === "low" && stars === 1) {
		const lowData = data.filter((el) => el.price <= 2000000 && el.rating <= 1);
		return lowData;
	} else if (value === "low" && stars === 2) {
		const lowData = data.filter((el) => el.price <= 2000000 && el.rating <= 2);
		return lowData;
	} else if (value === "low" && stars === 3) {
		const lowData = data.filter((el) => el.price <= 2000000 && el.rating <= 3);
		return lowData;
	} else if (value === "low" && stars === 4) {
		const lowData = data.filter((el) => el.price <= 2000000 && el.rating <= 4);
		return lowData;
	} else if (value === "low" && stars === 5) {
		const lowData = data.filter((el) => el.price <= 2000000 && el.rating >= 5);
		return lowData;
	} else if (value === "medium" && stars === 0) {
		const lowData = data.filter((el) => el.price <= 3000000);
		return lowData;
	} else if (value === "medium" && stars === 1) {
		const lowData = data.filter((el) => el.price <= 3000000 && el.rating <= 1);
		return lowData;
	} else if (value === "medium" && stars === 2) {
		const lowData = data.filter((el) => el.price <= 3000000 && el.rating <= 2);
		return lowData;
	} else if (value === "medium" && stars === 3) {
		const lowData = data.filter((el) => el.price <= 3000000 && el.rating <= 3);
		return lowData;
	} else if (value === "medium" && stars === 4) {
		const lowData = data.filter((el) => el.price <= 3000000 && el.rating <= 4);
		return lowData;
	} else if (value === "medium" && stars === 5) {
		const lowData = data.filter((el) => el.price <= 3000000 && el.rating >= 5);
		return lowData;
	} else if (value === "high" && stars === 0) {
		const lowData = data.filter((el) => el.price > 3000000);
		return lowData;
	} else if (value === "high" && stars === 1) {
		const lowData = data.filter((el) => el.price > 3000000 && el.rating <= 1);
		return lowData;
	} else if (value === "high" && stars === 2) {
		const lowData = data.filter((el) => el.price > 3000000 && el.rating <= 2);
		return lowData;
	} else if (value === "high" && stars === 3) {
		const lowData = data.filter((el) => el.price > 3000000 && el.rating <= 3);
		return lowData;
	} else if (value === "high" && stars === 4) {
		const lowData = data.filter((el) => el.price > 3000000 && el.rating <= 4);
		return lowData;
	} else if (value === "high" && stars === 5) {
		const lowData = data.filter((el) => el.price > 3000000 && el.rating >= 5);
		return lowData;
	} else if (value === "" && stars === 1) {
		const lowData = data.filter((el) => el.rating <= 1);
		return lowData;
	} else if (value === "" && stars === 2) {
		const lowData = data.filter((el) => el.rating <= 2);
		return lowData;
	} else if (value === "" && stars === 3) {
		const lowData = data.filter((el) => el.rating <= 3);
		return lowData;
	} else if (value === "" && stars === 4) {
		const lowData = data.filter((el) => el.rating <= 4);
		return lowData;
	} else if (value === "" && stars === 5) {
		const lowData = data.filter((el) => el.rating > 4);
		return lowData;
	} else {
		return data;
	}
};
