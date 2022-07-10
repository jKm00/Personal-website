import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import type { Project } from '../../../app/types/Project';
import { projects } from '../../../store/projects';

export const get: RequestHandler = (request: RequestEvent) => {
	let result: Project | undefined;
	try {
		result = projects.find((project) => project.id === parseInt(request.params.id));
	} catch (error) {
		result = undefined;
	}

	if (result) {
		return {
			body: {
				project: result
			}
		};
	} else {
		return {
			status: 404,
			body: {
				error: 'Project with id ' + request.params.id + ' was not found'
			}
		};
	}
};
