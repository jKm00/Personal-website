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
	import HeroSection from '../components/pages/homePage/HeroSection.svelte';
	import AboutSection from '../components/pages/homePage/AboutSection.svelte';
	import TechnologyStack from '../components/technologyComponents/TechnologyStack.svelte';
	import ProjectsSection from '../components/projectComponents/ProjectsSection.svelte';

	export let projects: Project[];
</script>

<main>
	<HeroSection />
	<AboutSection />
	<TechnologyStack />
	<ProjectsSection {projects} />
</main>

<style scoped lang="scss">
	main {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}
</style>
