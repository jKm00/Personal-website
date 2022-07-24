import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { technologies } from '../../../store/technologies';

export const get: RequestHandler = (request: RequestEvent) => {
	return {
		body: {
			technologies: technologies
		}
	};
};
