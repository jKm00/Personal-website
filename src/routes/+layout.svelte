<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import '../global.css';
</script>

<svelte:head>
	<title>Joakim Edvardsen</title>
</svelte:head>

<div class="body">
	<NavBar />
	<slot />
	<Footer />
</div>
