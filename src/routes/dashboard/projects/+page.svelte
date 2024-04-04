<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Project } from '$lib/types/project.js';
	import { Download, ExternalLink, Trash, Upload } from 'lucide-svelte';

	export let data;

	let deleteDialog: HTMLDialogElement;
	let projectToDelete: Project | null = null;

	async function togglePublish(project: Project) {
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

	function openDeleteDialog(project: Project) {
		projectToDelete = project;
		deleteDialog.showModal();
	}

	function closeDeleteDialog() {
		projectToDelete = null;
		deleteDialog.close();
	}

	async function deleteProject() {
		if (!projectToDelete) {
			console.error('Project to delete not selected');
			return;
		}

		try {
			const res = await fetch('/api/v1/projects', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id: projectToDelete.id })
			});

			if (!res.ok) {
				// TODO: Add toast
				console.error('Failed to delete project');
			}

			deleteDialog.close();
			// TODO: Add toast
			goto('/dashboard/projects', {
				invalidateAll: true
			});
		} catch (err) {
			// TODO: Add toast
			console.error('Something went wrong while deleting project', err);
		}
	}
</script>

<div class="table">
	<div class="table-row">
		<p class="table-header">ID</p>
		<p class="table-header">Title</p>
		<p class="table-header table-header--center span-2">Actions</p>
	</div>
	{#if data.projects.length === 0}
		<p class="muted">No projects available...</p>
	{:else}
		{#each data.projects as project}
			<div class="table-row">
				{#if project.published}
					<a href="/projects/{project.id}" target="_blank" class="table-item table-link"
						>{project.id} <ExternalLink class="icon" /></a
					>
				{:else}
					<p>{project.id}</p>
				{/if}
				<p class="table-item">{project.title}</p>
				<button on:click={() => togglePublish(project)} class="table-item button">
					{#if project.published}
						<Download class="icon" /> Unpublish
					{:else}
						<Upload class="icon" /> Publish
					{/if}
				</button>
				<button class="table-item button button--delete" on:click={() => openDeleteDialog(project)}>
					<Trash class="icon" /> Delete
				</button>
			</div>
		{/each}
	{/if}
</div>

<!-- Delete confirm dialog -->
<dialog bind:this={deleteDialog} class="dialog">
	<h2 class="dialog-title">Are you sure you want to delete this project?</h2>
	<p class="dialog-content">This action cannot be undone.</p>
	<div class="dialog-actions">
		<button on:click={closeDeleteDialog} class="button button-secondary">Cancel</button>
		<button on:click={deleteProject} class="button button--delete">Delete anyways</button>
	</div>
</dialog>

<style scoped>
	.table {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.table-row {
		display: grid;
		grid-template-columns: 15rem 1fr 8rem 7rem;
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

	.span-2 {
		grid-column: span 2;
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

	.button-secondary {
		outline: 1px solid var(--foreground);
		background-color: transparent;
	}

	.button-secondary:hover,
	.button-secondary:focus-visible {
		background-color: var(--foreground);
		color: var(--background);
	}

	.button--delete {
		outline: 1px solid var(--error);
		background-color: transparent;
	}

	.button--delete:hover,
	.button--delete:focus-visible {
		background-color: var(--error);
		color: var(--foreground);
	}

	.muted {
		color: var(--foreground-muted);
		font-size: var(--fs-350);
	}

	.dialog {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1rem;
		background-color: var(--card-bg);
		color: var(--foreground);
		border-radius: var(--rounding);
		border: none;
	}

	.dialog::backdrop {
		background-color: var(--background);
		opacity: 0.8;
	}

	.dialog-title {
		margin-bottom: 0.5rem;
	}

	.dialog-content {
		color: var(--foreground-muted);
		margin-bottom: 1.5rem;
	}

	.dialog-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
