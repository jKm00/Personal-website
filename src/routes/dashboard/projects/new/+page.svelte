<script lang="ts">
	import { SquarePlus, CircleX } from 'lucide-svelte';

	let technologies = [
		{
			name: '',
			link: ''
		}
	];

	let authors = [
		{
			name: '',
			link: ''
		}
	];

	let features = [''];

	let resources = [
		{
			label: '',
			link: ''
		}
	];

	function addTechnology() {
		technologies = [...technologies, { name: '', link: '' }];
	}

	function removeTechnology(index: number) {
		technologies = technologies.filter((_, i) => i !== index);
	}

	function addAuthor() {
		authors = [...authors, { name: '', link: '' }];
	}

	function removeAuthor(index: number) {
		authors = authors.filter((_, i) => i !== index);
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
</script>

<form>
	<!-- Title -->
	<div>
		<label for="title" class="label">Title</label>
		<input id="title" class="input" type="text" placeholder="Csgo strats..." />
	</div>
	<!-- Lead -->
	<div>
		<label for="lead" class="label">Lead</label>
		<textarea id="lead" class="input" placeholder="Catchy lead..." rows="3" />
	</div>
	<!-- Technologies -->
	<div>
		<p class="label">Technologies</p>
		<div class="two-column">
			{#each technologies as technology, index}
				<div class="two-column-items">
					<input
						bind:value={technology.name}
						type="text"
						class="input"
						placeholder="Technology name"
					/>
					<input
						bind:value={technology.link}
						type="url"
						class="input"
						placeholder="Technology link"
					/>
					<button
						on:click|preventDefault={() => removeTechnology(index)}
						disabled={technologies.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		<button class="button self-start" on:click|preventDefault={addTechnology}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<!-- Authors -->
	<div>
		<p class="label">Authors</p>
		<div class="two-column">
			{#each authors as author, index}
				<div class="two-column-items">
					<input bind:value={author.name} type="text" class="input" placeholder="Author name" />
					<input bind:value={author.link} type="url" class="input" placeholder="Author link" />
					<button
						on:click|preventDefault={() => removeAuthor(index)}
						disabled={authors.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
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
					<input bind:value={feature} type="text" class="input" placeholder="Feature" />
					<button
						on:click|preventDefault={() => removeFeature(index)}
						disabled={features.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
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
						class="input"
						placeholder="Resource label"
					/>
					<input bind:value={resource.link} type="url" class="input" placeholder="Resource link" />
					<button
						on:click|preventDefault={() => removeResource(index)}
						disabled={resources.length === 1}
						class="delete-button"><CircleX class="icon" /></button
					>
				</div>
			{/each}
		</div>
		<button class="button self-start" on:click|preventDefault={addResource}
			><SquarePlus class="icon" />Add</button
		>
	</div>
	<button class="button">Save draft</button>
</form>

<!-- 
	- thumbnail
	- images
	- title
	- lead
	- status
	- technologies
	- authors
	- features
	- text
	- resources
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
