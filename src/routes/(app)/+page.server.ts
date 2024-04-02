import { PROJECTS_PATH } from '$lib/server/paths.js';
import { getAllFiles } from '$lib/server/utils.js';
import { Project } from '$lib/types/project.js';

export const load = async ({}) => {
	async function fetchAllProjects() {
		const files = getAllFiles<Project>(PROJECTS_PATH);

		return files.filter((file) => file.published);
	}

	return {
		projects: await fetchAllProjects()
	};
};
