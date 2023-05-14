interface IBedroom {
	bed: string;
}

export type HotelTypes = {
	bedroom_preview: IBedroom[];
	hotel_image: string;
	hotel_name: string;
	id: number;
	price: number;
	rating: number;
	desc: string;
	times: number;
	total: number;
};
