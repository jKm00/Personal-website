<script lang="ts">
	import type { Project } from '../app/types/Project';
	import PortfolioCard from './PortfolioCard.svelte';

	export let projects: Project[];
</script>

<section class="portfolio" id="portfolio">
	<div class="portfolio__content">
		<h2 class="portfolio__title title">Portfolio</h2>
		<div class="portfolio__cards">
			{#each projects as project}
				<PortfolioCard {project} />
			{/each}
		</div>
		<div class="portfolio__cta--wrapper">
			<div>
				<p class="portfolio__cta--bold">Want to see more and smaller projects?</p>
				<p class="portfolio__cta--normal">Have a look at my codepen</p>
			</div>
			<a href="https://codepen.io/Jaakim" target="_blank" class="portfolio__cta--btn btn"
				><img src="/icons/codepen.svg" alt="codepen logo" /> Codepen</a
			>
		</div>
	</div>
</section>

<style scoped lang="scss">
	.portfolio {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
		background-color: var(--clr-neutral-100);
		position: relative;
		z-index: 1;

		&__content {
			grid-column: 2 / 3;
			text-align: center;
			padding: 5rem 0;
		}

		&__title {
			font-size: var(--fs-seconday-heading);
			margin-bottom: 4rem;
		}

		&__cards {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
			gap: 1rem;
		}

		&__cta--wrapper {
			margin: 3rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}

		&__cta--bold {
			font-family: var(--ff-secondary);
			font-weight: var(--fw-bold);
			font-size: var(--fs-350);
		}

		&__cta--normal {
			font-family: var(--ff-primary);
			font-size: var(--fs-350);
			font-weight: var(--fw-bold);
		}

		&__cta--btn {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			padding: 1.5em 3.5em;
			font-size: var(--fs-250);
			color: var(--clr-neutral-100);
			background-color: var(--clr-accent-400);

			& img {
				width: 1.5rem;
				filter: invert(1);
			}
		}

		&__cta--btn:hover,
		&__cta--btn:focus {
			background-color: var(--clr-neutral-800);
		}
	}

	.portfolio::after {
		content: '';
		display: block;
		background-color: var(--clr-main-400);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		height: 25rem;
	}
</style>
