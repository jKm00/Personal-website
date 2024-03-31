export const load = async ({ fetch }) => {
	async function fetchProjects() {
		const res = await fetch('/api/v1/projects');
		return res.json();
	}

	return {
		projects: fetchProjects()
	};
};
