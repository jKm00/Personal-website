import type { Status } from './status';
import type { Image } from './image';

type Contributor = {
	name: string;
	link: string;
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
	resources: { label: string; link: string }[];
	desc: string;
	text: string[];
};

export type ProjectTmp = {
	id: number;
	title: string;
	thumbnail: Image;
	images: Image[];
	status: Status;
	stack: string[];
	contributers: Contributor[];
	features: string[];
	resources: { label: string; link: string }[];
	desc: string;
	text: string;
};
