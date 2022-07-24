<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const projectResponse = await fetch('./api/projects');
		const projectData = await projectResponse.json();

		const technologyResponse = await fetch('./api/technologies');
		const technologyData = await technologyResponse.json();

		let props = {};

		if (projectResponse.ok) {
			props = {
				...props,
				projects: projectData.projects
			};
		}

		if (technologyResponse.ok) {
			props = {
				...props,
				technologies: technologyData.technologies
			};
		}

		return {
			props: { ...props }
		};
	};
</script>

<script lang="ts">
	import type { Project } from '../app/types/Project';
	import HeroSection from '../components/pages/homePage/HeroSection.svelte';
	import AboutSection from '../components/pages/homePage/AboutSection.svelte';
	import TechnologyStack from '../components/technologyComponents/TechnologyStack.svelte';
	import ProjectsSection from '../components/projectComponents/ProjectsSection.svelte';
	import type { Technology } from '../app/types/Technology';

	export let projects: Project[];
	export let technologies: Technology[];
</script>

<main>
	<HeroSection />
	<AboutSection />
	<TechnologyStack {technologies} />
	<ProjectsSection {projects} />
</main>

<style scoped lang="scss">
	main {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}
</style>
