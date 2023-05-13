import React from "react";
import { Col, Row } from "react-bootstrap";
import bg from "../../images/bg-hotel.webp";
import "./hotelHeader.css";
import { useAppSelector } from "../../app/hooks";

const HotelHeader: React.FC = () => {
	const mode = useAppSelector((state) => state.booked.mode);
	return (
		<Row>
			<Col
				style={{
					backgroundImage: `url(${bg})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: 300,
					borderRadius: "0 0 20px 20px",
					padding: 0,
					margin: 0,
					position: "relative",
				}}
			>
				<div className="booking-wrapper"></div>

				<div className="booking-text">
					<h4> Mencari tempat menginap?</h4>
					<h1>Kami siap membantu!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta,
						quibusdam est tempora eum ipsa quam praesentium ullam voluptatum
						dolorem minus architecto provident, culpa modi.
					</p>
				</div>
			</Col>
		</Row>
	);
};

export default HotelHeader;
