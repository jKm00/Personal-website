<script lang="ts">
	interface FullStat {
		label: string;
		value: string;
	}

	interface Stat {
		value: string;
	}

	export let stats: FullStat[] | Stat[];
</script>

<div class="stats">
	{#each stats as stat}
		{#if 'label' in stat}
			<p class="stats__item text"><span class="stats__label">{stat.label}: </span>{stat.value}</p>
		{:else}
			<p class="stats__item text">{stat.value}</p>
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
</style>
