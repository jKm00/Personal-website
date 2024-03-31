import { ADMIN_TOKEN } from '$env/static/private';
import { ProjectsRepo } from '$lib/server/repo';
import { Status } from '$lib/types/status';
import { fail } from '@sveltejs/kit';

export async function GET() {
	const projects = ProjectsRepo.getAll();

	return new Response(JSON.stringify(projects), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function POST({ request }) {
	const data = await request.formData();

	const title = data.get('title') as string;
	const desc = data.get('desc') as string;
	const text = data.get('text') as string;
	const status = data.get('status') as string;
	const stack = data.get('stack') as string;
	const contributors = data.get('contributors') as string;
	const features = data.get('features') as string;
	const resources = data.get('resources') as string;

	if (!title || !desc || !text || !status || !stack || !contributors || !features || !resources) {
		fail(400, { message: 'Missing required fields' });
	}

	const id = Date.now();

	ProjectsRepo.save(`${id}`, {
		id,
		title,
		thumbnail: { path: '', alt: '' },
		images: [],
		status: status === 'finished' ? Status.FINISHED : Status.IN_PROGRESS,
		stack: JSON.parse(stack) as string[],
		contributers: JSON.parse(contributors) as { name: string; link: string }[],
		features: JSON.parse(features) as string[],
		resources: JSON.parse(resources) as { label: string; link: string }[],
		desc,
		text,
		published: false
	});

	return new Response('ok', { status: 200 });
}

export async function PATCH({ request }) {
	const body = await request.json();

	try {
		ProjectsRepo.save(`${body.id}`, body);
	} catch (err) {
		return new Response('Something went wrong', { status: 500 });
	}

	return new Response('ok', { status: 200 });
}
