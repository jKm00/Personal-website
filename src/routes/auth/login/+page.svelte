<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, enhance, errors, message } = superForm(data.form);
</script>

<form method="post" use:enhance>
	<h1 class="title">Login</h1>
	<div>
		<input bind:value={$form.username} name="username" type="text" placeholder="Admin username" />
		{#if $errors.username}
			<p class="error">{$errors.username}</p>
		{/if}
	</div>
	<div>
		<input
			bind:value={$form.password}
			name="password"
			type="password"
			placeholder="Admin password"
		/>
		{#if $errors.password}
			<p class="error">{$errors.password}</p>
		{/if}
	</div>
	{#if $message}
		<p class="error">{$message}</p>
	{/if}
	<button class="cta" type="submit">Log in</button>
</form>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input {
		background-color: var(--card-bg);
		padding: 0.5rem;
		border: 1px solid var(--border-color);
		border-radius: 0.25rem;
		min-width: 20rem;
		color: var(--foreground);
	}

	.error {
		font-size: var(--fs-350);
		color: var(--error);
	}

	.cta {
		justify-content: center;
	}
</style>
