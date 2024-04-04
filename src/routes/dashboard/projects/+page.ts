export const load = async ({ fetch }) => {
	async function fetchProjects() {
		try {
			const res = await fetch('/api/v1/projects');

			if (!res.ok) {
				return [];
			}

			return res.json();
		} catch (err) {
			return [];
		}
	}

	return {
		projects: await fetchProjects()
	};
};
