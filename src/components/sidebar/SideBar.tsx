import React from "react";
import "./sidebar.css";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import StarsSideBar from "../starsSideBar/StarsSideBar";
import { ReactComponent as ReactLogo } from "../../images/logoipsum-243.svg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

type PropsTypes = {
	handleMode: () => void;
	handleRadios: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleStars: (e: number) => void;
	stars: number;
	hover: number;
	setHover: React.Dispatch<React.SetStateAction<number>>;
	handleReset: () => void;
	radios: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	searchValue: string;
};

const SideBar: React.FC<PropsTypes> = ({
	handleMode,
	handleRadios,
	handleStars,
	stars,
	setHover,
	hover,
	handleReset,
	radios,
	setSearchValue,
	searchValue,
}) => {
	const mode = useAppSelector((state) => state.booked.mode);

	return (
		<div
			className={`${
				mode ? "bg-dark text-light" : "bg-light text-dark"
			} sidebar-wrapper`}
		>
			<div className="d-flex justify-content-start align-items-center w-100">
				<Form.Check
					type="switch"
					id="custom-switch"
					label={mode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
					onChange={handleMode}
				/>
				<ReactLogo />
			</div>
			<InputGroup>
				<Form.Control
					placeholder="Type >3 Characters"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</InputGroup>

			<div className="filtering">
				<h2>Filter by : </h2>
				<div className="main-price">
					<h5>Price</h5>
					<Form.Group className="form-group">
						<Form.Check
							type="radio"
							label="<= 2.000.000"
							id="checkOne"
							name="group"
							value="low"
							checked={radios === "low" ? true : false}
							onChange={handleRadios}
						/>
						<Form.Check
							type="radio"
							label="<= 3.000.000"
							id="checkTwo"
							name="group"
							value="medium"
							onChange={handleRadios}
							checked={radios === "medium" ? true : false}
						/>
						<Form.Check
							type="radio"
							label="> 3.000.000"
							id="checkThree"
							name="group"
							value="high"
							onChange={handleRadios}
							checked={radios === "high" ? true : false}
						/>
					</Form.Group>
				</div>
				<div className="main-rating">
					<h5>Rating</h5>
					<StarsSideBar
						stars={stars}
						handleStars={handleStars}
						hover={hover}
						setHover={setHover}
					/>
					<Button className="mx-auto mt-5 w-100" onClick={() => handleReset()}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
