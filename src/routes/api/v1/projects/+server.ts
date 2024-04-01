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

	const thumbnail = data.get('thumbnail') as File;
	const images = data.getAll('images') as File[];

	const allowedFilesTypes = ['image/jpeg', 'image/png', 'image/webp'];
	if (
		!allowedFilesTypes.includes(thumbnail.type) ||
		images.some((image) => !allowedFilesTypes.includes(image.type))
	) {
		fail(400, { message: 'Invalid file type' });
	}

	const fileMaxSize = 1024 * 1024 * 5;
	if (thumbnail.size > fileMaxSize || images.some((image) => image.size > fileMaxSize)) {
		fail(400, { message: 'File size too large' });
	}

	const id = Date.now();

	const thumbnailUrl = (await ProjectsRepo.uploadImages(`${id}/thumbnail`, [thumbnail]))[0];
	const imageUrls = await ProjectsRepo.uploadImages(`${id}/images`, images);

	ProjectsRepo.save(`${id}`, {
		id,
		title,
		thumbnail: { path: thumbnailUrl, alt: `${title} thumbnail` },
		images: imageUrls.map((url, i) => ({ path: url, alt: `${title} image ${i}` })),
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

export async function DELETE({ request }) {
	const body = (await request.json()) as { id: string };

	try {
		ProjectsRepo.delete(body.id);
	} catch (err) {
		console.log(err);
		return new Response('Something went wrong', { status: 500 });
	}

	return new Response('ok', { status: 200 });
}
