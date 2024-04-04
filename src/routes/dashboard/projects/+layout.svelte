<script lang="ts">
	import { SquarePlus } from 'lucide-svelte';
</script>

<header class="header">
	<h1 class="title"><a href="/dashboard/projects">Projects</a></h1>
	<a href="/dashboard/projects/new" class="link"><SquarePlus class="icon" />New Project</a>
</header>

<slot />

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	a {
		color: var(--foreground);
		text-decoration: none;
	}

	.link {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.link::after {
		display: none;
	}
</style>
