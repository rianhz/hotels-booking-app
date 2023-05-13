import React from "react";
import { Card } from "react-bootstrap";
import { HotelTypes } from "../../types/hotel";
import { Link } from "react-router-dom";
import "./hotelCard.css";
import { generateStars, setCurrency } from "../../utils";
import { useAppSelector } from "../../app/hooks";

type PropsTypes = {
	hotels: HotelTypes;
};

const HotelCard: React.FC<PropsTypes> = ({ hotels }) => {
	const mode = useAppSelector((state) => state.booked.mode);

	return (
		<Card
			style={{
				backgroundColor: `${mode ? "#212529" : "#F8F9FA"}`,
				color: `${mode ? "#FFFFFF" : "#212529"}`,
				boxShadow: `${mode ? "0 3px 5px -2px white" : "0 3px 5px -2px black"}`,
			}}
		>
			<Card.Img src={hotels.hotel_image} />
			<Card.Body>
				<Card.Title>{hotels.hotel_name}</Card.Title>
				<Card.Text>{generateStars(hotels.rating)}</Card.Text>
				<Card.Text>{setCurrency(hotels.price)}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Link to={`/booking/${hotels.hotel_name}`} id="booking-link">
					BOOK
				</Link>
			</Card.Footer>
		</Card>
	);
};

export default HotelCard;
