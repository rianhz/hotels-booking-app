import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
	const { hotel_name } = useParams();

	return <h1>{hotel_name}</h1>;
};

export default Booking;
