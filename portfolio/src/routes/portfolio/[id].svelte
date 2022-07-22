<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch('../api/projects/' + params.id);
		const data = await response.json();

		if (response.ok) {
			return {
				props: {
					project: data.project
				}
			};
		}
		return {
			props: {
				status: response.status,
				error: data.error
			}
		};
	};
</script>

<script lang="ts">
	import type { Project } from '../../app/types/Project';
	import Stats from '../../components/Stats.svelte';

	export let status: number;
	export let error: string;
	export let project: Project;
</script>

<div class="section">
	{#if error}
		<div class="error--wrapper content">
			<h1 class="title">{status}: {error}</h1>
			<a sveltekit:prefetch href="/" class="link">Back to home page</a>
		</div>
	{:else}
		<article class="project content">
			<p class="text">Status: <span class="highlighted">{project.status}</span></p>
			<h1 class="title title--secondary">{project.title}</h1>

			<!-- TODO: Make swiper -->

			<Stats stats={project.stack} alignRight={false} />
			<ul>
				{#each project.contributers as contributer}
					<li><a href={contributer.githubLink} target="_blank">{contributer.name}</a></li>
				{/each}
			</ul>
			<ul>
				{#each project.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>
			<a href={project.githubLink}>GitHub</a>
		</article>
	{/if}
</div>

<style lang="scss">
	.error--wrapper {
		display: grid;
		justify-items: center;
		align-content: center;
		height: 100vh;

		& h1 {
			margin-bottom: 1em;
		}
	}

	.project {
		margin-top: 7rem;
	}
</style>
