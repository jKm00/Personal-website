import { ADMIN_TOKEN } from '$env/static/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (!event.url.pathname.startsWith('/dashboard') && !event.url.pathname.startsWith('/api')) {
		return resolve(event);
	}

	const authCookie = event.cookies.get('auth');

	if (!authCookie || authCookie !== ADMIN_TOKEN) {
		if (event.url.pathname.startsWith('/api')) {
			return new Response('Unauthorized', { status: 401 });
		} else {
			return new Response('Redirect', { status: 303, headers: { location: '/auth/login' } });
		}
	}

	return resolve(event);
}
