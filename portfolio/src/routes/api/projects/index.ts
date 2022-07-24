import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { projects } from '../../../store/projects';

export const get: RequestHandler = (request: RequestEvent) => {
	return {
		body: {
			projects: projects
		}
	};
};
