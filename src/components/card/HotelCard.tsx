import React from "react";
import { Card } from "react-bootstrap";
import { HotelTypes } from "../../types/hotel";
import { Link } from "react-router-dom";
import "./hotelCard.css";
import { generateStars, setCurrency } from "../../utils";
type PropsTypes = {
	hotels: HotelTypes;
};

const HotelCard: React.FC<PropsTypes> = ({ hotels }) => {
	return (
		<Card>
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
