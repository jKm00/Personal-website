import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { experiences } from '../../../store/resume';

export const get: RequestHandler = (request: RequestEvent) => {
	return {
		body: {
			experiences: experiences
		}
	};
};
