<script lang="ts">
	import type { Technology } from '$lib/types/technology';
	import TechnologyCard from '../containers/TechnologyCard.svelte';

	export let technologies: Technology[];

	let cardIndex = 0;
	const getCardIndex = () => {
		return cardIndex++;
	};
</script>

<section id="stack" class="section stack">
	<div class="content">
		<h2 class="stack__title title title--third">My most loved technologies</h2>
		<div class="stack__body">
			{#each technologies as technology}
				<TechnologyCard {technology} delayIndex={getCardIndex()} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.stack {
		--spacing: 1rem;
		margin-bottom: var(--spacing);
		padding-bottom: var(--spacing);

		&__title {
			text-align: center;
			margin-bottom: 1.5rem;
		}

		&__body {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	@media only screen and (min-width: 30rem) {
		.stack {
			&__body {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}

	@media only screen and (min-width: 45rem) {
		.stack {
			--spacing: 2rem;
			margin: var(--spacing) 0;
			padding: var(--spacing) 0;

			&__title {
				margin-bottom: 3rem;
			}
		}
	}

	@media screen and (min-width: 60rem) {
		.stack {
			--spacing: 4rem;

			&__body {
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}
</style>
