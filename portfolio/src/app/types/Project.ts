import type { Image } from './Image';

type Contributor = {
	name: string;
	githubLink: string;
};

export type Project = {
	id: number;
	title: string;
	thumbnail: Image;
	images: Image[];
	status: string;
	stack: string[];
	contributers: Contributor[];
	features: string[];
	githubLink: string;
	desc: string;
	text: string[];
};
