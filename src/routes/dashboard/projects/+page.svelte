<script lang="ts">
	import { SquarePlus } from 'lucide-svelte';
</script>

<div class="header">
	<h1 class="title">Projects</h1>
	<a href="/dashboard/projects/new" class="link"><SquarePlus class="icon" />New Project</a>
</div>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
