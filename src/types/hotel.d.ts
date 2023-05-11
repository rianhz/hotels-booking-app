interface IBedroom {
	bed: string;
}

export type HotelType = {
	bedroom_preview: IBedroom[];
	hotel_image: string;
	hotel_name: string;
	id: number;
	price: number;
	rating: number;
};
