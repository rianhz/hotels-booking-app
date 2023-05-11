import React, { useState } from "react";
import "./sidebar.css";
import { InputGroup, Form } from "react-bootstrap";

type PropsTypes = {
	handleMode: () => void;
};

const SideBar: React.FC<PropsTypes> = ({ handleMode }) => {
	const handleRadios = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<div className="sidebar-wrapper">
			<Form.Check
				type="switch"
				id="custom-switch"
				label="Light Mode"
				onChange={handleMode}
			/>
			<InputGroup>
				<Form.Control placeholder="Search Hotel" />
			</InputGroup>

			<div className="filtering">
				<h2>Filter by : </h2>
				<div className="main-price">
					<h5>Price</h5>
					<Form.Group onChange={handleRadios} className="form-group">
						<Form.Check
							type="radio"
							label="<= 1.000.000"
							id="checkOne"
							name="group"
							value="low"
						/>
						<Form.Check
							type="radio"
							label="<= 3.000.000"
							id="checkTwo"
							name="group"
							value="medium"
						/>
						<Form.Check
							type="radio"
							label="> 3.000.000"
							id="checkThree"
							name="group"
							value="high"
						/>
					</Form.Group>
				</div>
				<div className="main-rating">
					<h5>Rating</h5>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
