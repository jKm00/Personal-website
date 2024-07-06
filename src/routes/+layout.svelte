<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import SkipToMainContent from '$lib/components/SkipToMainContent.svelte';
	import '../global.css';
</script>

<svelte:head>
	<title>Joakim Edvardsen</title>
	<link rel="icon" type="image/x-icon" href="/assets/icons/favicons/favicon.ico" />
</svelte:head>

<div class="body">
	<SkipToMainContent />
	<NavBar />
	<div id="main-content" class="main-wrapper">
		<slot />
	</div>
	<Footer />
</div>

<style scoped>
	.main-wrapper {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
	}
</style>
