import React from "react";
import { Row, Col } from "react-bootstrap";
import { HotelTypes } from "../types/hotel";
import HotelCard from "../components/card/HotelCard";
import HotelHeader from "../components/header/HotelHeader";

type PropsTypes = {
	data: HotelTypes[] | undefined;
};

const List: React.FC<PropsTypes> = ({ data }) => {
	return (
		<>
			<Row>
				<Col>
					<HotelHeader />
				</Col>
			</Row>
			<Row className="d-flex justify-content-center align-items-start min-vh-100 mt-5">
				{data && data.length < 1 ? (
					<Col className="d-flex justify-content-center align-items-start m-3">
						<h4 className="">Hotels not available</h4>
					</Col>
				) : (
					data?.map((el: HotelTypes, i: number) => {
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
					})
				)}
			</Row>
		</>
	);
};

export default List;
