import { redirect } from '@sveltejs/kit';

export function GET({ cookies }) {
	cookies.set('auth', '', {
		path: '/',
		httpOnly: true,
		expires: new Date(0)
	});
	throw redirect(302, '/');
}
