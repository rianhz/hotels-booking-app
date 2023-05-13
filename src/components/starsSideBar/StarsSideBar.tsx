import React from "react";
import { BsStarFill } from "react-icons/bs";
import "./starsSideBar.css";

type PropsTypes = {
	handleStars: (e: number) => void;
	stars: number;
	hover: number;

	setHover: React.Dispatch<React.SetStateAction<number>>;
};

const StarsSideBar: React.FC<PropsTypes> = ({
	stars,
	handleStars,
	hover,
	setHover,
}) => {
	return (
		<>
			{[...Array(5)].map((el, i) => {
				i += 1;
				return (
					<button
						key={i}
						type="button"
						className={i <= (stars || hover) ? "ratingSideOn" : "ratingSideOff"}
						onClick={() => handleStars(i)}
						onMouseEnter={() => setHover(i)}
						onMouseLeave={() => setHover(stars)}
					>
						<span>
							<BsStarFill />
						</span>
					</button>
				);
			})}
		</>
	);
};

export default StarsSideBar;
