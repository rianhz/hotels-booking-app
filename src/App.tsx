import { useState } from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { bookHotel } from "./features/hotelSlice";

import { Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import List from "./pages/List";

function App() {
	const [mode, setMode] = useState<boolean>(false);

	const handleMode = () => {
		setMode(!mode);
	};

	return (
		<Container
			fluid
			className={`p-0 m-0 ${
				mode ? "bg-dark text-light" : "bg-light text-dark"
			}`}
		>
			<Row>
				<Col lg={3}>
					<SideBar handleMode={handleMode} mode={mode} />
				</Col>
				<Col lg={9}>
					<Routes>
						<Route path="/" element={<List />} />
						<Route path="/booking/:hotel_name" element={<Booking />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
