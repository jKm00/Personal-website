<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('../api/projects');
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
	import type { Project } from '../../app/types/Project';

	export let projects: Project[];
</script>

<main>
	<h1 class="title">Portfolio</h1>
	{#each projects as project}
		<a sveltekit:prefetch href={'/portfolio/' + project.id}>
			<h2 class="title">{project.title}</h2>
		</a>
	{/each}
	<a sveltekit:prefetch href={'/portfolio/100'}>
		<h2 class="title">100</h2>
	</a>
</main>

<style scoped lang="scss">
	main {
		--nav-height: 75px;
		grid-column: 2 / 3;
		min-height: calc(100vh - var(--nav-height));
	}
</style>
