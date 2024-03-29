<script lang="ts">
	import { Cpu, List, LogOut, Newspaper } from 'lucide-svelte';
	import '../../reset.css';
	import '../../theme.css';
	import '../../utils.css';
	import { page } from '$app/stores';

	const links = [
		{ name: 'Projects', url: '/dashboard/projects', icon: Newspaper },
		{ name: 'Resume', url: '/dashboard/resume', icon: List },
		{ name: 'Technologies', url: '/dashboard/technologies', icon: Cpu }
	];

	$: active = $page.url.pathname.split('/').pop();
</script>

<div class="body">
	<aside>
		<div>
			<h1 class="title"><a href="/dashboard">Dashboard</a></h1>
			<ul class="list">
				{#each links as link}
					<li>
						<a
							href={link.url}
							class="item {active?.toLowerCase() === link.name.toLowerCase() ? 'active' : ''}"
						>
							<svelte:component this={link.icon} class="icon" />
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="item" href="/dashboard/logout"><LogOut class="icon" />Logout</a>
	</aside>
	<main class="main">
		<slot />
	</main>
</div>

<style scoped>
	.body {
		display: grid;
		grid-template-columns: 15rem 1fr;
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--card-bg);
	}

	.title {
		font-weight: bold;
		margin: 2rem 1rem 1rem 1rem;
	}

	.title a {
		color: var(--foreground);
		text-decoration: none;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		color: var(--foregrund);
		text-decoration: none;
	}

	.item.active {
		background-color: var(--primary);
		color: var(--primary-foreground);
	}

	.main {
		padding: 2rem;
	}
</style>
