<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import TechnologyStack from '$lib/components/sections/TechnologyStack.svelte';
	import ProjectSection from '$lib/components/sections/ProjectSection.svelte';
	import { technologies } from '$lib/data/technologies';
</script>

<main>
	<HeroSection />
	<AboutSection />
	<TechnologyStack {technologies} />
	<ProjectSection />
</main>

<style scoped lang="scss">
	main {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}
</style>
