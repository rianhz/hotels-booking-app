import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { HotelTypes } from "../types/hotel";
import HotelCard from "../components/card/HotelCard";
import HotelHeader from "../components/header/HotelHeader";
import SideBar from "../components/sidebar/SideBar";

type PropsTypes = {
	data: HotelTypes[] | undefined;
	handleMode: () => void;
	handleRadios: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleStars: (e: number) => void;
	stars: number;
	hover: number;
	setHover: React.Dispatch<React.SetStateAction<number>>;
	handleReset: () => void;
	radios: string;
	listRef: React.MutableRefObject<undefined>;
};

const List: React.FC<PropsTypes> = ({
	data,
	handleMode,
	handleRadios,
	handleStars,
	stars,
	setHover,
	hover,
	handleReset,
	radios,
	listRef,
}) => {
	return (
		<>
			<Row>
				<Col>
					<HotelHeader />
				</Col>
			</Row>
			<Row>
				<Col lg={3} className="p-0 m-0">
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
				<Col lg={9}>
					<Row
						className="d-flex justify-content-center align-items-start min-vh-100 mt-lg-5 mt-md-1"
						ref={listRef}
					>
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
				</Col>
			</Row>
		</>
	);
};

export default List;
