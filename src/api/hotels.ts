import axios from "axios";

export const fetchHotels = async () => {
	const a = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotels`);
	const res = await a.data.hotels;

	return res;
};
