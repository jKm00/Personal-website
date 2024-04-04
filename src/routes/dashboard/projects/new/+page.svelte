<script lang="ts">
	import { goto } from '$app/navigation';
	import { SquarePlus, CircleX, Loader2 } from 'lucide-svelte';

	let isLoading = false;
	let error: string | null = null;

	let title = '';
	let titleError: string | null = null;

	let desc = '';
	let descError: string | null = null;

	let text = '';
	let textError: string | null = null;

	let status: string;
	let statusError: string | null = null;

	let stack = [''];
	let stackError: string | null = null;

	let contributors = [
		{
			name: '',
			link: ''
		}
	];
	let contributorsError: string | null = null;

	let features = [''];
	let featureError: string | null = null;

	let resources = [
		{
			label: '',
			link: ''
		}
	];
	let resourceError: string | null = null;

	let thumbnail: FileList | null = null;
	let thumbnailError: string | null = null;

	let images: FileList | null = null;
	let imagesError: string | null = null;

	function addTechnology() {
		stack = [...stack, ''];
	}

	function removeTechnology(index: number) {
		stack = stack.filter((_, i) => i !== index);
	}

	function addAuthor() {
		contributors = [...contributors, { name: '', link: '' }];
	}

	function removeAuthor(index: number) {
		contributors = contributors.filter((_, i) => i !== index);
	}

	function addFeature() {
		features = [...features, ''];
	}

	function removeFeature(index: number) {
		features = features.filter((_, i) => i !== index);
	}

	function addResource() {
		resources = [...resources, { label: '', link: '' }];
	}

	function removeResource(index: number) {
		resources = resources.filter((_, i) => i !== index);
	}

	async function handleSubmit() {
		resetErrors();
		isLoading = true;

		if (title === '') {
			titleError = 'Title is required';
			error = 'Make ';
		}
		if (desc === '') {
			descError = 'Lead is required';
			error = 'Make sure all fields are filled in correctly';
		}
		if (text === '') {
			textError = 'Text is required';
			error = 'Make sure all fields are filled in correctly';
		}
		if (status === '') {
			statusError = 'Status is required';
			error = 'Make sure all fields are filled in correctly';
		}
		if (stack.some((t) => t === '')) {
			stackError = 'All technologies must have a name and a link';
			error = 'Make sure all fields are filled in correctly';
		}
		if (contributors.some((a) => a.name === '' || a.link === '')) {
			contributorsError = 'All authors must have a name and a link';
			error = 'Make sure all fields are filled in correctly';
		}
		if (features.some((f) => f === '')) {
			featureError = 'All features must have a value';
			error = 'Make sure all fields are filled in correctly';
		}
		if (resources.some((r) => r.label === '' || r.link === '')) {
			resourceError = 'All resources must have a label and a link';
			error = 'Make sure all fields are filled in correctly';
		}
		if (thumbnail === null) {
			thumbnailError = 'Thumbnail is required';
			error = 'Make sure all fields are filled in correctly';
		}
		if (images === null) {
			imagesError = 'At least one image is required';
			error = 'Make sure all fields are filled in correctly';
		}
		if (error !== null) {
			isLoading = false;
			return;
		}

		// Send data to the server
		const form = new FormData();
		form.append('title', title);
		form.append('desc', desc);
		form.append('text', text);
		form.append('status', status);
		form.append('stack', JSON.stringify(stack));
		form.append('contributors', JSON.stringify(contributors));
		form.append('features', JSON.stringify(features));
		form.append('resources', JSON.stringify(resources));
		form.append('thumbnail', thumbnail![0]);

		for (let i = 0; i < images!.length; i++) {
			form.append('images', images![i]);
		}

		try {
			const res = await fetch('/api/v1/projects', {
				method: 'POST',
				body: form
			});

			if (!res.ok) {
				error = 'Something went wrong, please try again later.';
				isLoading = false;
				return;
			}
		} catch (error) {
			error = 'Something went wrong, please try again later.';
		} finally {
			isLoading = false;
		}

		goto('/dashboard/projects');
	}

	function resetErrors() {
		error = null;
		titleError = null;
		descError = null;
		textError = null;
		statusError = null;
		stackError = null;
		contributorsError = null;
		featureError = null;
		resourceError = null;
		thumbnailError = null;
		imagesError = null;
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<!-- Title -->
	<div>
		<label for="title" class="label">Title</label>
		<input
			id="title"
			class="input {titleError && 'error'}"
			bind:value={title}
			type="text"
			placeholder="Csgo strats..."
		/>
		{#if titleError}
			<p class="error">{titleError}</p>
		{/if}
	</div>
	<!-- Desc -->
	<div>
		<label for="lead" class="label">Description</label>
		<textarea
			id="lead"
			class="input {descError && 'error'}"
			bind:value={desc}
			placeholder="Catchy lead..."
			rows="3"
		/>
		{#if descError}
			<p class="error">{descError}</p>
		{/if}
	</div>
	<!-- Text -->
	<div>
		<label for="text" class="label">Project body</label>
		<textarea
			id="text"
			class="input {textError && 'error'}"
			bind:value={text}
			placeholder="Full text..."
			rows="10"
		/>
		{#if textError}
			<p class="error">{textError}</p>
		{/if}
	</div>
	<!-- Status --->
	<div>
		<label for="status" class="label">Status</label>
		<select id="status" class="input {statusError && 'error'}" bind:value={status}>
			<option value="">Select status</option>
			<option value="in-progress">In-progress</option>
			<option value="finished">Finished</option>
		</select>
		{#if statusError}
			<p class="error">{statusError}</p>
		{/if}
	</div>
	<!-- Stack -->
	<div>
		<p class="label">Stack</p>
		<div class="one-column">
			{#each stack as item, index}
				<div class="one-column-items">
					<input
						bind:value={item}
						type="text"
						class="input {stackError && 'error'}"
						placeholder="Technology name"
					/>
					<button
						on:click|preventDefault={() => removeTechnology(index)}
						disabled={stack.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		{#if stackError}
			<p class="error">{stackError}</p>
		{/if}
		<button class="button self-start" on:click|preventDefault={addTechnology}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<!-- Contributors -->
	<div>
		<p class="label">Contributors</p>
		<div class="two-column">
			{#each contributors as contributor, index}
				<div class="two-column-items">
					<input
						bind:value={contributor.name}
						type="text"
						class="input {contributorsError && 'error'}"
						placeholder="Author name"
					/>
					<input
						bind:value={contributor.link}
						type="url"
						class="input {contributorsError && 'error'}"
						placeholder="Author link"
					/>
					<button
						on:click|preventDefault={() => removeAuthor(index)}
						disabled={contributors.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		{#if contributorsError}
			<p class="error">{contributorsError}</p>
		{/if}
		<button class="button self-start" on:click|preventDefault={addAuthor}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<!-- Features -->
	<div>
		<p class="label">Features</p>
		<div class="one-column">
			{#each features as feature, index}
				<div class="one-column-items">
					<input
						bind:value={feature}
						type="text"
						class="input {featureError && 'error'}"
						placeholder="Feature"
					/>
					<button
						on:click|preventDefault={() => removeFeature(index)}
						disabled={features.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		{#if featureError}
			<p class="error">{featureError}</p>
		{/if}
		<button class="button self-start" on:click|preventDefault={addFeature}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<!-- Resources -->
	<div>
		<p class="label">Resources</p>
		<div class="two-column">
			{#each resources as resource, index}
				<div class="two-column-items">
					<input
						bind:value={resource.label}
						type="text"
						class="input {resourceError && 'error'}"
						placeholder="Resource label"
					/>
					<input
						bind:value={resource.link}
						type="url"
						class="input {resourceError && 'error'}"
						placeholder="Resource link"
					/>
					<button
						on:click|preventDefault={() => removeResource(index)}
						disabled={resources.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		{#if resourceError}
			<p class="error">{resourceError}</p>
		{/if}
		<button class="button self-start" on:click|preventDefault={addResource}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<!-- Thumbnail -->
	<div>
		<label for="thumbnail" class="label">Thumbnail</label>
		<input id="thumbnail" type="file" accept="image/*" bind:files={thumbnail} />
		{#if thumbnailError}
			<p class="error">{thumbnailError}</p>
		{/if}
	</div>
	<!-- Images -->
	<div>
		<label for="images" class="label">Images</label>
		<input id="images" type="file" accept="image/*" multiple bind:files={images} />
		{#if imagesError}
			<p class="error">{imagesError}</p>
		{/if}
	</div>
	<button disabled={isLoading} class="button" type="submit">
		{#if isLoading}
			<Loader2 class="icon spin" />
		{:else}
			Save draft
		{/if}
	</button>
	{#if error}
		<p class="error">{error}</p>
	{/if}
</form>

<!-- 
	- thumbnail
	- images
	- status
 -->

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 80ch;
	}

	form div {
		display: flex;
		flex-direction: column;
	}

	.label {
		font-size: var(--fs-350);
	}

	.input {
		border: none;
		background-color: var(--background);
		outline: 1px solid var(--foreground-muted);
		padding: 0.5rem;
		border-radius: var(--rounding);
		font-size: var(--fs-400);
		resize: vertical;
		color: var(--foreground);
	}

	.input::placeholder {
		font-size: var(--fs-350);
	}

	.input.error {
		outline: 1px solid var(--error);
	}

	.button {
		border: none;
		background-color: var(--primary);
		color: var(--primary-foreground);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem 2rem;
		margin-top: 0.5rem;
		border-radius: var(--rounding);
	}

	.button:hover,
	.button:focus {
		background-color: var(--clr-accent-500);
	}

	.button:active {
		background-color: var(--clr-accent-600);
	}

	.self-start {
		align-self: start;
	}

	.delete-button {
		border: none;
		background-color: var(--background);
		color: var(--foreground);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		border-radius: var(--rounding);
	}

	.delete-button:hover,
	.delete-button:focus {
		background-color: var(--card-bg);
	}

	.delete-button:disabled {
		opacity: 0.5;
	}

	.delete-button:disabled:hover,
	.delete-button:disabled:focus {
		background-color: var(--background);
	}

	.one-column {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.one-column-items {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
	}

	.two-column {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.two-column-items {
		display: grid;
		grid-template-columns: repeat(2, 1fr) auto;
		gap: 1rem;
	}
</style>
