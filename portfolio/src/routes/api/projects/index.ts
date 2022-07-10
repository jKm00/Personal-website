import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import type { Project } from '../../../app/types/Project';
import { projects } from '../../../store/projects';

export const get: RequestHandler = (request: RequestEvent) => {
	console.log(request.params);

	return {
		body: {
			projects: projects
		}
	};
};
