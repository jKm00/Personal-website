import {
	writeFileSync,
	readdirSync,
	readFileSync,
	existsSync,
	mkdirSync,
	unlinkSync,
	rmSync,
	lstatSync
} from 'fs';
import path from 'path';

export function saveFile<T>(path: string, data: T) {
	writeFileSync(path, JSON.stringify(data));
}

export async function uploadImages(path: string, images: File[]) {
	const urls = [] as string[];

	if (!existsSync(path)) {
		mkdirSync(path, { recursive: true });
	}

	for (const image of images) {
		const url = `${path}/${image.name}`;
		writeFileSync(url, Buffer.from(await image.arrayBuffer()));
		urls.push(url);
	}

	return urls;
}

export function getFile<T>(path: string) {
	return JSON.parse(readFileSync(path, 'utf-8')) as T;
}

export function getAllFiles<T>(dirPath: string) {
	const files = readdirSync(dirPath);

	let projects = [] as T[];
	for (const file of files) {
		const fullPath = path.join(dirPath, file);
		if (!lstatSync(fullPath).isDirectory()) {
			projects.push(JSON.parse(readFileSync(fullPath, 'utf-8')));
		}
	}

	return projects;
}

export function deleteDir(path: string) {
	rmSync(path, { recursive: true });
}

export function deleteFile(path: string, ext: string = 'json') {
	unlinkSync(`${path}.${ext}`);
}
