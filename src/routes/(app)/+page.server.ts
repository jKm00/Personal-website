import { PROJECTS_PATH } from '$lib/server/paths.js';
import { getAllFiles } from '$lib/server/utils.js';
import { ProjectTmp } from '$lib/types/project.js';

export const load = async ({}) => {
	async function fetchAllProjects() {
		const files = getAllFiles<ProjectTmp>(PROJECTS_PATH);

		return files.filter((file) => file.published);
	}

	return {
		projects: await fetchAllProjects()
	};
};
