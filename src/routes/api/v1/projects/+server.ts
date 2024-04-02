import { PROJECTS_IMG_PATH, PROJECTS_PATH, PROJECTS_THUMBNAIL_PATH } from '$lib/server/paths.js';
import { deleteDir, deleteFile, getAllFiles, saveFile, uploadImages } from '$lib/server/utils.js';
import { ProjectTmp } from '$lib/types/project.js';
import { Status } from '$lib/types/status';
import { fail } from '@sveltejs/kit';

export async function GET() {
	const projects = getAllFiles<ProjectTmp>(PROJECTS_PATH);

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

	const thumbnailUrl = (await uploadImages(PROJECTS_THUMBNAIL_PATH(id), [thumbnail]))[0];
	const imageUrls = await uploadImages(PROJECTS_IMG_PATH(id), images);

	saveFile<ProjectTmp>(`${PROJECTS_PATH}/${id}.json`, {
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
		saveFile<ProjectTmp>(`${PROJECTS_PATH}/${body.id}.json`, body);
	} catch (err) {
		return new Response('Something went wrong', { status: 500 });
	}

	return new Response('ok', { status: 200 });
}

export async function DELETE({ request }) {
	const body = (await request.json()) as { id: string };

	try {
		// Delete images
		deleteDir(PROJECTS_THUMBNAIL_PATH(body.id));
		deleteDir(PROJECTS_IMG_PATH(body.id));
		// Delete project info
		deleteFile(`${PROJECTS_PATH}/${body.id}`);
	} catch (err) {
		console.log(err);
		return new Response('Something went wrong', { status: 500 });
	}

	return new Response('ok', { status: 200 });
}
