import { PROJECTS_PATH } from '$lib/server/paths.js';
import { getFile } from '$lib/server/utils.js';
import { ProjectTmp } from '$lib/types/project';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const project = getFile<ProjectTmp>(`${PROJECTS_PATH}/${params.id}.json`);

	if (!project || !project.published) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};
