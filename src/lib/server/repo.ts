import { ProjectTmp } from '$lib/types/project';
import { writeFileSync, readdirSync, readFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

class Repository<T> {
	private repoUrl: string;
	private imgUrl: string;

	constructor(name: string) {
		this.repoUrl = `src/lib/server/db/${name}/`;
		this.imgUrl = `static/assets/img/${name}/`;
	}

	save(id: string, data: T) {
		writeFileSync(`${this.repoUrl}${id}.json`, JSON.stringify(data));
	}

	async uploadImages(path: string, images: File[]) {
		const urls = [] as string[];

		if (!existsSync(`${this.imgUrl}${path}`)) {
			mkdirSync(`${this.imgUrl}${path}`, { recursive: true });
		}

		for (const image of images) {
			const url = `${this.imgUrl}${path}/${image.name}`;
			writeFileSync(url, Buffer.from(await image.arrayBuffer()));
			urls.push(url);
		}

		return urls;
	}

	get(id: string) {
		const fullPath = path.join(this.repoUrl, `${id}.json`);
		return JSON.parse(readFileSync(fullPath, 'utf-8'));
	}

	getAll() {
		const files = readdirSync(this.repoUrl);

		let projects = [];
		for (const file of files) {
			const fullPath = path.join(this.repoUrl, file);
			projects.push(JSON.parse(readFileSync(fullPath, 'utf-8')));
		}

		return projects;
	}
}

export const ProjectsRepo = new Repository<ProjectTmp>('projects');
