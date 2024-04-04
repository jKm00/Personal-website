<script lang="ts">
	import { Newspaper, List, Cpu } from 'lucide-svelte';

	const categories = [
		{
			name: 'Projects',
			desc: 'Add, edit, or update the projects displayed on the site.',
			icon: Newspaper,
			url: '/dashboard/projects'
		},
		{
			name: 'Resume',
			desc: 'Update your resume information.',
			icon: List,
			url: '/dashboard/resume'
		},
		{
			name: 'Technologies',
			desc: 'Update the technologies you are familiar with.',
			icon: Cpu,
			url: '/dashboard/technologies'
		}
	];
</script>

<h1 class="title">Welcome</h1>
<p class="desc">Select one of the categories to start modifying the content of this page.</p>

<section>
	{#each categories as category}
		<a href={category.url} class="card">
			<svelte:component this={category.icon} class="icon" />
			<h2>{category.name}</h2>
			<p>{category.desc}</p>
		</a>
	{/each}
</section>

<style scoped>
	.title {
		font-size: 2rem;
		font-weight: bold;
	}

	.desc {
		margin-bottom: 2rem;
		color: var(--foreground-muted);
	}

	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.card {
		flex-basis: 200;
		color: var(--foreground);
		text-decoration: none;

		background-color: var(--card-bg);
		padding: 1rem;
		border-radius: var(--rounding);
	}

	:global(.card .icon) {
		width: 2rem;
		height: 2rem;
		margin-bottom: 1rem;
	}

	.card p {
		color: var(--foreground-muted);
		font-size: var(--fs-350);
	}
</style>
