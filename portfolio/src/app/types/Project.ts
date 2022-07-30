import type { Image } from './Image';
import type { Status } from './Status';

type Contributor = {
	name: string;
	githubLink: string;
};

export type Project = {
	id: number;
	title: string;
	thumbnail: Image;
	images: Image[];
	status: Status;
	stack: string[];
	contributers: Contributor[];
	features: string[];
	githubLink: string;
	desc: string;
	text: string[];
};
