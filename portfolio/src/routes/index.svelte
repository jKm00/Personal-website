<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('./api/projects');
		const data = await response.json();

		if (response.ok) {
			return {
				props: {
					projects: data.projects
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
	import type { Project } from '../app/types/Project';
	import Header from '../components/Header.svelte';
	import About from '../components/About.svelte';
	import Languages from '../components/Languages.svelte';
	import Workflow from '../components/Workflow.svelte';
	import Portfolio from '../components/Portfolio.svelte';

	export let projects: Project[];
</script>

<main>
	<Header />
	<About />
	<Portfolio {projects} />
	<Workflow />
	<Languages />
	<h2>This will be more visible</h2>
</main>

<style scoped lang="scss">
	main {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}

	h2 {
		grid-column: 1 / -1;
		text-align: center;
		font-size: var(--fs-primary-heading);
		font-family: var(--ff-heading);
		font-weight: var(--fw-bold);
		padding: 2rem 0;
	}
</style>
