type Image = {
	path: string;
	alt: string;
};

export type Project = {
	id: number;
	title: string;
	status: string;
	stack: string[];
	features: string[];
	desc: string;
	text: string[];
	thumbnail: Image;
	images: Image[];
};
