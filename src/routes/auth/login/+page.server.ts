import { Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { loginSchema } from './schema';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { ADMIN_PASSWORD, ADMIN_TOKEN, ADMIN_USERNAME } from '$env/static/private';
import { dev } from '$app/environment';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(loginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { username, password } = form.data;

		if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
			return message(form, 'Invalid username or password', {
				status: 401
			});
		}

		cookies.set('auth', ADMIN_TOKEN, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			secure: dev ? false : true
		});

		throw redirect(302, '/dashboard');
	}
};
