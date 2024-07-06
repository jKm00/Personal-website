<script lang="ts">
	interface Stat {
		label: string;
		value: string | Date;
	}

	export let stats: Stat[] | string[];
	export let alignRight: boolean;
</script>

<ul class="stats" class:align-right={alignRight}>
	{#each stats as stat}
		{#if typeof stat === 'string'}
			<li class="stats__item text">{stat}</li>
		{:else}
			<li class="stats__item text">
				<span class="stats__label">{stat.label}: </span>
				{#if stat.value instanceof Date}
					{@const day = ('0' + stat.value.getDate()).slice(-2)}
					{@const month = ('0' + (stat.value.getMonth() + 1)).slice(-2)}
					{@const year = stat.value.getFullYear()}
					<time datetime="{year}-{month}-{day}">{day}.{month}.{year}</time>
				{:else}
					{stat.value}
				{/if}
			</li>
		{/if}
	{/each}
</ul>

<style lang="scss">
	.stats {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1rem;

		&__item {
			cursor: default;
			color: var(--clr-neutral-400);
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
