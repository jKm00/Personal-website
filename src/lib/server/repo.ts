import { ProjectTmp } from '$lib/types/project';
import { writeFileSync, readdirSync, readFileSync } from 'fs';
import path from 'path';

class Repository<T> {
	private path: string;

	constructor(path: string) {
		this.path = path;
	}

	save(name: string, data: T) {
		writeFileSync(`${this.path}${name}.json`, JSON.stringify(data));
	}

	getAll() {
		const files = readdirSync(this.path);

		let projects = [];
		for (const file of files) {
			const fullPath = path.join(this.path, file);
			projects.push(JSON.parse(readFileSync(fullPath, 'utf-8')));
		}

		return projects;
	}
}

export const ProjectsRepo = new Repository<ProjectTmp>('src/lib/server/db/projects/');
