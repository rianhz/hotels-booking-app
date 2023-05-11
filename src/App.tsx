import react, { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "./api/hotels";
import { HotelType } from "./types/hotel";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";

function App() {
	const [mode, setMode] = useState<boolean>(false);

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["hotels"],
		queryFn: fetchHotels,
	});

	if (isLoading)
		return (
			<div
				style={{
					width: "100vw",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1>Loading....</h1>
			</div>
		);
	if (isError) return <h1>{(error as any).message}</h1>;

	const handleMode = () => {
		setMode(!mode);
	};

	return (
		<Container fluid className="p-0 m-0">
			<Row>
				<Col lg={3}>
					<SideBar handleMode={handleMode} />
				</Col>
				<Col lg={9}>
					<div
						style={{
							height: "100vh",
						}}
					>
						<h1>haii</h1>
					</div>
					<div
						style={{
							height: "100vh",
						}}
					>
						<h1>haii</h1>
					</div>
					{/* {data?.map((el: HotelType, i: number) => {
						return <p key={i}> {el.hotel_name}</p>;
					})} */}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
