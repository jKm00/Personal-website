import { PROJECTS_PATH } from '$lib/server/paths.js';
import { getAllFiles } from '$lib/server/utils.js';
import { Project } from '$lib/types/project.js';

export const load = async ({}) => {
	async function fetchAllProjects() {
		try {
			const files = getAllFiles<Project>(PROJECTS_PATH);
			return files.filter((file) => file.published);
		} catch (err) {
			return [];
		}
	}

	return {
		projects: await fetchAllProjects()
	};
};
