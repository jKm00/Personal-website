<script lang="ts">
	import Header from '../components/Header.svelte';
	import About from '../components/About.svelte';
	import Languages from '../components/Languages.svelte';
	import Workflow from '../components/Workflow.svelte';
</script>

<main>
	<Header />
	<About />
	<Languages />
	<Workflow />
</main>

<style scoped lang="scss">
	main {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}
</style>
