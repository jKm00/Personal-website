type Image = {
	path: string;
	alt: string;
};

export type Project = {
	id: number;
	title: string;
	desc: string;
	text: string[];
	images: Image[];
};
