<script lang="ts">
	import type { Technology } from '$lib/types/technology';
	import { fly } from 'svelte/transition';

	export let technology: Technology;
	export let delayIndex: number;

	let yScroll: number;
	let showTechnologyStack: boolean;

	$: if (yScroll > 1100) showTechnologyStack = true;
</script>

<svelte:window bind:scrollY={yScroll} />

{#if showTechnologyStack}
	<a
		in:fly={{ y: 50, duration: 1000, delay: delayIndex * 100 }}
		class="card"
		href={technology.link}
		target="_blank"
	>
		<img
			class="card__img"
			src={'/assets/icons/' + technology.svg.file}
			alt={technology.svg.alt}
			loading="lazy"
			aria-hidden="true"
		/>
		<h3 class="card__title title">{technology.title}</h3>
		<p class="card__desc">{technology.desc}</p>
	</a>
{:else}
	<div in:fly={{ y: 50, duration: 1000, delay: delayIndex * 100 }} class="card placeholder">
		<img
			class="card__img"
			src={'/assets/icons/' + technology.svg.file}
			alt={technology.svg.alt}
			loading="lazy"
		/>
		<h3 class="card__title title">{technology.title}</h3>
		<p class="card__desc">{technology.desc}</p>
	</div>
{/if}

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		color: var(--clr-neutral-000);
		text-decoration: none;

		&__img {
			max-width: 2rem;
		}

		&__desc {
			font-family: var(--ff-primary);
			font-size: var(--fs-300);
		}
	}

	.placeholder {
		visibility: hidden;
	}

	@media only screen and (min-width: 45rem) {
		.card {
			&__img {
				max-width: 3rem;
				margin-bottom: 2rem;
			}

			&__desc {
				font-size: var(--fs-400);
			}
		}
	}
</style>
