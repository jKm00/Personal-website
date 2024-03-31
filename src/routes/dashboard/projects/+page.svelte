<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ProjectTmp } from '$lib/types/project.js';
	import { Download, Upload } from 'lucide-svelte';

	export let data;

	async function togglePublish(project: ProjectTmp) {
		try {
			const res = await fetch('/api/v1/projects', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...project,
					published: !project.published
				})
			});

			if (!res.ok) {
				// TODO: Add toast
				console.error('Failed to update project');
			}

			goto('/dashboard/projects', {
				invalidateAll: true
			});
		} catch (err) {
			// TODO: Fix toast
			console.error(err);
		}
	}
</script>

<div class="table">
	<div class="table-row">
		<p class="table-header">ID</p>
		<p class="table-header">Title</p>
		<p class="table-header table-header--center">Status</p>
	</div>
	{#if data.projects.length === 0}
		<p class="muted">No projects available...</p>
	{:else}
		{#each data.projects as project}
			<div class="table-row">
				<a href="/projects/{project.id}" class="table-item table-link">{project.id}</a>
				<p class="table-item">{project.title}</p>
				<p class="table-item">
					<button on:click={() => togglePublish(project)} class="button">
						{#if project.published}
							<Download class="icon" /> Unpublish
						{:else}
							<Upload class="icon" /> Publish
						{/if}
					</button>
				</p>
			</div>
		{/each}
	{/if}
</div>

<style scoped>
	.table {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.table-row {
		display: grid;
		grid-template-columns: 15rem 1fr 8rem;
		align-items: center;
		gap: 0.5rem;
	}

	.table-header--center {
		text-align: center;
	}

	.table-link {
		color: var(--primary);
		text-decoration: none;
	}

	.table-link:hover,
	.table-link:focus-visible {
		text-decoration: underline;
	}

	.button {
		border: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--card-bg);
		color: var(--foreground);
		padding: 0.5rem 1rem;
		border-radius: var(--rounding);
		width: 100%;
	}

	.button:hover,
	.button:focus-visible {
		background-color: var(--primary);
		color: var(--primary-foreground);
	}

	.button:active {
		background-color: var(--clr-accent-500);
	}

	.muted {
		color: var(--foreground-muted);
		font-size: var(--fs-350);
	}
</style>
