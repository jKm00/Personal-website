import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { educations } from '../../../store/resume';

export const get: RequestHandler = (request: RequestEvent) => {
	return {
		body: {
			educations: educations
		}
	};
};
