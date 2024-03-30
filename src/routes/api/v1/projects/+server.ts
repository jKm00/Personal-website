import { ADMIN_TOKEN } from '$env/static/private';

export function POST({ request, cookies }) {
	const authCookie = cookies.get('auth');
	if (!authCookie || authCookie !== ADMIN_TOKEN) {
		return new Response('Unauthorized', { status: 401 });
	}

	console.log(request);
	return new Response('ok', { status: 200 });
}
