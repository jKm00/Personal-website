<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch('../api/projects/' + params.id);
		const data = await response.json();

		if (response.ok) {
			return {
				props: {
					project: data.project
				}
			};
		}
		return {
			props: {
				status: response.status,
				error: data.error
			}
		};
	};
</script>

<script lang="ts">
	import type { Project } from '../../app/types/Project';

	export let project: Project;
</script>
