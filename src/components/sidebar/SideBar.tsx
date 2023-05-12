import React, { useState } from "react";
import "./sidebar.css";
import { InputGroup, Form } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

type PropsTypes = {
	mode: boolean;
	handleMode: () => void;
};

const SideBar: React.FC<PropsTypes> = ({ handleMode, mode }) => {
	const handleRadios = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	const rating = 4.5;

	return (
		<div
			className={`${
				mode ? "bg-dark text-light" : "bg-light text-dark"
			} sidebar-wrapper`}
		>
			<Form.Check
				type="switch"
				id="custom-switch"
				label={mode ? "Dark Mode" : "Light Mode"}
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
					<span className="stars-span">
						{rating >= 1 ? (
							<BsStarFill />
						) : rating >= 0.5 ? (
							<BsStarHalf />
						) : (
							<BsStar />
						)}
					</span>
					<span className="stars-span">
						{rating >= 2 ? (
							<BsStarFill />
						) : rating >= 1.5 ? (
							<BsStarHalf />
						) : (
							<BsStar />
						)}
					</span>
					<span className="stars-span">
						{rating >= 3 ? (
							<BsStarFill />
						) : rating >= 2.5 ? (
							<BsStarHalf />
						) : (
							<BsStar />
						)}
					</span>
					<span className="stars-span">
						{rating >= 4 ? (
							<BsStarFill />
						) : rating >= 3.5 ? (
							<BsStarHalf />
						) : (
							<BsStar />
						)}
					</span>
					<span className="stars-span">
						{rating >= 5 ? (
							<BsStarFill />
						) : rating >= 4.5 ? (
							<BsStarHalf />
						) : (
							<BsStar />
						)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
