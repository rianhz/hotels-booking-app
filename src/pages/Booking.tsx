import React from "react";
import { useParams } from "react-router-dom";
import { fetchHotels } from "../api/hotels";
import { useQuery } from "@tanstack/react-query";
import { getDataById } from "../app/hooks";
import { Spinner } from "react-bootstrap";

const Booking = () => {
	const { hotel_name } = useParams();

	const { data, isLoading, isError, error } = useQuery(
		["hotels"],
		fetchHotels,
		{
			select: (data) => getDataById(hotel_name, data),
		}
	);

	if (isLoading)
		return (
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	if (isError) return <h1>{(error as any).message}</h1>;

	console.log(data);

	return <h1>{hotel_name}</h1>;
};

export default Booking;
