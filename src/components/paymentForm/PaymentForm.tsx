import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decreaseTime, increaseTime } from "../../features/hotelSlice";
import "./paymentForm.css";
import { generateStars, setCurrency } from "../../utils";
import toast, { Toaster } from "react-hot-toast";

const PaymentForm: React.FC = () => {
	const hotels = useAppSelector((state) => state.booked.booked);
	const mode = useAppSelector((state) => state.booked.mode);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handlePayment = () => {
		toast.success("Hotel is booked!");
		setTimeout(() => {
			navigate("/");
		}, 2000);
	};

	return (
		<Container>
			<Row>
				<Col>
					<div className="payment-wrapper">
						<Toaster />

						<div className="payment-item">
							<h1
								style={{
									color: `${mode ? "#000" : "#212529"}`,
								}}
							>
								Payment
							</h1>
							<hr
								style={{
									color: "#000000",
									backgroundColor: "#000000",
									height: "2px",
									borderColor: "#000000",
									width: "100%",
								}}
							/>
							<h4
								className="mt-4"
								style={{
									color: `${mode ? "#000" : "#212529"}`,
								}}
							>
								{hotels.hotel_name}
							</h4>
							<div
								className="d-flex"
								style={{
									color: `${mode ? "#000" : "#212529"}`,
								}}
							>
								{generateStars(hotels.rating)}
							</div>
							<span
								style={{
									color: `${mode ? "#000" : "#212529"}`,
								}}
							>
								{setCurrency(hotels.price)}
							</span>
							<div
								className="button-wrapper"
								style={{
									color: `${mode ? "#000" : "#212529"}`,
								}}
							>
								<Button
									variant="secondary"
									onClick={() => dispatch(decreaseTime())}
								>
									-
								</Button>
								<h4>{hotels.times} days</h4>
								<Button
									variant="secondary"
									onClick={() => dispatch(increaseTime())}
								>
									+
								</Button>
							</div>

							<h5 className="ms-auto mt-4">
								Total : {setCurrency(hotels.total)}
							</h5>
							<Button className="w-100" onClick={handlePayment}>
								Checkout
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default PaymentForm;
