<script lang="ts">
	interface Stat {
		label: string;
		value: string;
	}

	export let stats: Stat[] | string[];
	export let alignRight: boolean;
</script>

<div class="stats" class:align-right={alignRight}>
	{#each stats as stat}
		{#if typeof stat === 'string'}
			<p class="stats__item text">{stat}</p>
		{:else}
			<p class="stats__item text">
				<span class="stats__label">{stat.label}: </span>{stat.value}
			</p>
		{/if}
	{/each}
</div>

<style lang="scss">
	.stats {
		display: flex;
		gap: 1rem;

		&__item {
			cursor: default;
			color: var(--clr-neutral-500);
		}

		&__label {
			color: var(--clr-accent-200);
		}
	}

	@media screen and (min-width: 60rem) {
		.align-right {
			justify-content: end;
		}
	}
</style>
