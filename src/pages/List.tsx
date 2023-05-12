import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "../api/hotels";
import { HotelTypes } from "../types/hotel";
import HotelCard from "../components/card/HotelCard";

const List = () => {
	const { data, isLoading, isError, error, isSuccess } = useQuery({
		queryKey: ["hotels"],
		queryFn: fetchHotels,
	});

	console.log({ hotels: data, success: isSuccess, isError: isError });

	if (isLoading)
		return (
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1>Loading....</h1>
			</div>
		);
	if (isError) return <h1>{(error as any).message}</h1>;
	return (
		<Row>
			{data?.map((el: HotelTypes, i: number) => {
				return (
					<Col
						key={i}
						lg={3}
						md={6}
						sm={12}
						className="d-flex justify-content-center align-items-center m-3"
					>
						<HotelCard hotels={el} />
					</Col>
				);
			})}
		</Row>
	);
};

export default List;
