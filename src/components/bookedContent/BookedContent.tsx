import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { getDataById, useAppDispatch } from "../../app/hooks";
import { fetchHotels } from "../../api/hotels";
import "./BookedContent.css";
import { generateStars, setCurrency } from "../../utils";
import { bookHotel } from "../../features/hotelSlice";
import { AiOutlineArrowRight } from "react-icons/ai";

const BookedContent: React.FC = () => {
	const [renderIndex, setRenderIndex] = useState(0);
	const { hotel_name } = useParams();

	const dispatch = useAppDispatch();

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

	const handleIndex = (e: number) => {
		setRenderIndex(e);
	};

	return (
		<Row className="pt-3">
			<Col lg={8} md={12} sm={12}>
				<Row>
					<Col className="d-flex justify-content-center align-items-center images-containter">
						<div className="booked-images-wrapper">
							{data[0].bedroom_preview.map((bed, bedIndex) => {
								return bedIndex === renderIndex ? (
									<img
										src={bed.bed}
										alt="bed"
										key={bedIndex}
										className="images-booked active"
									/>
								) : (
									<img
										src={bed.bed}
										alt="bed"
										key={bedIndex}
										className="images-booked"
									/>
								);
							})}
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-between mt-2">
						{data[0].bedroom_preview.map((bed, bedIndex) => {
							return (
								<button
									className="button-images"
									key={bedIndex}
									onClick={() => handleIndex(bedIndex)}
								>
									<img src={bed.bed} alt="bed" className="images-button-item" />
								</button>
							);
						})}
					</Col>
				</Row>
			</Col>
			<Col lg={4} md={12} sm={12} className="payments">
				{data.map((el, i) => {
					return (
						<div key={i}>
							<h4>{el.hotel_name}</h4>
							<p>{generateStars(el.rating)}</p>
							<p>{setCurrency(el.price)} / day</p>
							<h5>Description</h5>
							<p>{el.desc}</p>
							<Link
								to={`/payment/${el.hotel_name}`}
								onClick={() => dispatch(bookHotel(el))}
							>
								<Button>
									Go to Payment <AiOutlineArrowRight />
								</Button>
							</Link>
						</div>
					);
				})}
			</Col>
		</Row>
	);
};

export default BookedContent;
