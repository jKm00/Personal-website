import { ADMIN_TOKEN } from '$env/static/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (!event.url.pathname.startsWith('/dashboard')) {
		return resolve(event);
	}

	const authCookie = event.cookies.get('auth');

	console.log('authCookie', authCookie);

	if (!authCookie || authCookie !== ADMIN_TOKEN) {
		return new Response('Redirect', { status: 303, headers: { location: '/auth/login' } });
	}

	return resolve(event);
}
