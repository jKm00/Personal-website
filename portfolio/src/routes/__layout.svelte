<script lang="ts">
	import '../global.css';
	import NavBar from '../components/layoutComponents/NavBar.svelte';
	import Footer from '../components/layoutComponents/Footer.svelte';
</script>

<svelte:head>
	<title>Joakim Edvardsen</title>
</svelte:head>
<NavBar />

<slot />

<Footer />
