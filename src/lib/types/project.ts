import type { Status } from './status';
import type { Image } from './image';

type Contributor = {
	name: string;
	githubLink: string;
};

export type Project = {
	id: number;
	order: number;
	active: boolean;
	title: string;
	thumbnail: Image;
	images: Image[];
	status: Status;
	stack: string[];
	contributers: Contributor[];
	features: string[];
	resources: { label: string; link: string }[];
	desc: string;
	content: Section[];
};

type Section = {
	title?: string;
	text: string[];
};
