import { ProjectTmp } from '$lib/types/project';
import { writeFileSync, existsSync, statSync } from 'fs';

class Repository<T> {
	private path: string;

	constructor(path: string) {
		this.path = path;
	}

	save(name: string, data: T) {
		writeFileSync(`${this.path}${name}.json`, JSON.stringify(data), { flag: 'a' });
	}
}

export const ProjectsRepo = new Repository<ProjectTmp>('src/lib/server/db/projects/');
