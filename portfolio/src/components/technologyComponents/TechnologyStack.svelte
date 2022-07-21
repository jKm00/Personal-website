<script lang="ts">
	import TechnologyCard from './TechnologyCard.svelte';

	const technologies = [
		{
			svg: {
				file: 'svelte-original.svg',
				alt: 'svelte logo'
			},
			title: 'Svelte / SvelteKit',
			desc: 'Love the simplicity together with the fast benchmarks',
			link: 'https://svelte.dev/'
		},
		{
			svg: {
				file: 'react-original.svg',
				alt: 'React logo'
			},
			title: 'React',
			desc: 'The first JavaScript framework I tested out',
			link: 'https://reactjs.org/'
		},
		{
			svg: {
				file: 'spring-original.svg',
				alt: 'Spring boot logo'
			},
			title: 'Spring-Boot',
			desc: "I've used spring boot to create most of my APIs",
			link: 'https://spring.io/'
		},
		{
			svg: {
				file: 'postgresql-original.svg',
				alt: 'PostgreSQL logo'
			},
			title: 'PostgreSQL',
			desc: 'My go to SQL database for storing everything I need',
			link: 'https://www.postgresql.org/'
		}
	];
</script>

<section id="stack" class="section stack">
	<div class="content">
		<h2 class="stack__title title title--third">My most loved technologies</h2>
		<div class="stack__body">
			{#each technologies as technology}
				<TechnologyCard {technology} />
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
