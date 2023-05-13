import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type PropsSideStars = {
	stars: number;
	someFunc: (e: number) => void;
};

export const generateStars = (rating: number) => {
	return (
		<>
			<span>
				{rating >= 1 ? (
					<BsStarFill />
				) : rating >= 0.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span>
				{rating >= 2 ? (
					<BsStarFill />
				) : rating >= 1.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span>
				{rating >= 3 ? (
					<BsStarFill />
				) : rating >= 2.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span>
				{rating >= 4 ? (
					<BsStarFill />
				) : rating >= 3.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
			<span>
				{rating >= 5 ? (
					<BsStarFill />
				) : rating >= 4.5 ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		</>
	);
};

export const GenerateStarsSideBar: React.FC<PropsSideStars> = ({
	stars,
	someFunc,
}) => {
	return (
		<>
			{[...Array(5)].map((el, i) => {
				i += 1;
				return (
					<button
						key={i}
						type="button"
						className={i <= stars ? "ratingSideOn" : "ratingSideOff"}
						onClick={() => someFunc(i)}
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

export const setCurrency = (num: number) => {
	return new Intl.NumberFormat("Rp", {
		style: "currency",
		currency: "idr",
	}).format(Math.round(num));
};
