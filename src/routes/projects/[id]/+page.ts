import { projects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const project = projects.find((project) => project.id === Number(params.id) && project.active);

	return {
		project
	};
};
