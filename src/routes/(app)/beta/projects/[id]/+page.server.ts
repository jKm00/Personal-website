import { ProjectsRepo } from '$lib/server/repo.js';
import { ProjectTmp } from '$lib/types/project';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const project = ProjectsRepo.get(params.id) as ProjectTmp;

	if (!project || !project.published) {
		throw error(404, 'Project not found');
	}

	return {
		project: ProjectsRepo.get(params.id) as ProjectTmp
	};
};
