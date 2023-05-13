import "./App.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import { filteringData, useAppDispatch, useAppSelector } from "./app/hooks";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import List from "./pages/List";
import { switchMode } from "./features/hotelSlice";
import { fetchHotels } from "./api/hotels";
import { useState } from "react";

function App() {
	const [radios, setRadios] = useState<string>("");
	const [stars, setStars] = useState<number>(0);
	const [hover, setHover] = useState(0);

	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.booked.mode);

	const { data, isLoading, isError, error } = useQuery(
		["hotels"],
		fetchHotels,
		{
			select: (data) => filteringData(radios, stars, data),
		}
	);

	console.log({ data: data, radaios: radios, stars: stars });

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

	const handleRadios = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadios(e.target.value);
	};

	const handleMode = () => {
		dispatch(switchMode());
	};
	const handleStars = (e: number) => {
		setStars(e);
	};

	const handleReset = () => {
		setRadios("");
		setHover(0);
		setStars(0);
	};

	return (
		<Container
			fluid
			className={`px-3 m-0 ${
				mode ? "bg-dark text-light" : "bg-light text-dark"
			}`}
		>
			<Row className="p-0 m-0">
				<Col lg={3}>
					<SideBar
						handleMode={handleMode}
						handleRadios={handleRadios}
						handleStars={handleStars}
						stars={stars}
						hover={hover}
						setHover={setHover}
						handleReset={handleReset}
						radios={radios}
					/>
				</Col>
				<Col lg={9} className="p-0 m-0">
					<Routes>
						<Route path="/" element={<List data={data} />} />
						<Route path="/booking/:hotel_name" element={<Booking />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
